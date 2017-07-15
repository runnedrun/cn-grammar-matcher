const { padLeft } = require('./utils');
const { notRoot } = require('./tokenFilters');
const MultiRegExp = require('../vendor/MultiRegExp');


// This returns a 0-padded string representing this token ID which can be used in the token regex
const getTokenIdStr = (tokenId, tokens) => {
  const tokenIdDigits = Math.ceil(tokens.length / 10);
  return `#${padLeft(tokenId, tokenIdDigits)}`;
};

const constructRegexSubstitution = (matchFunc, tokens) => {
  const matchingTokenIds = [];
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (matchFunc(token)) {
      matchingTokenIds.push(getTokenIdStr(i, tokens));
    }
  }
  if (matchingTokenIds.length === 0) {
    // ensure there's never an empty (:?) group for conditions that match nothing
    matchingTokenIds.push('NONE');
  }
  return `(?:${matchingTokenIds.join('|')})`;
};

const constructRegexStr = (tokens, regexTemplate, matchParams) => {
  let regexStr = regexTemplate;
  for (const subName of Object.keys(matchParams)) {
    const matchFunc = matchParams[subName];
    const replacement = constructRegexSubstitution(matchFunc, tokens);
    regexStr = regexStr.replace(new RegExp(`:${subName}:`, 'g'), replacement);
  }
  return regexStr;
};

// used to match the generated regex template against
const constructTokensStr = (tokens) => {
  let tokensStr = '';
  for (let i = 0; i < tokens.length; i += 1) {
    tokensStr += getTokenIdStr(i, tokens);
  }
  return tokensStr;
};

const getCapturedTokensFromMatch = (matchResults, tokens) => {
  const matchingTokens = [];
  // the first result is the whole match, not captured groups
  for (const result of matchResults.slice(1)) {
    // if there's an optional capture group that didn't match, it will have a value of undefined
    // ignore those matches here. Revisit later if we find we want to keep the undefined, or
    // keep grouping each match by capture group regardless
    if (result === undefined) continue;
    const tokenIndexStrs = result.split('#').filter(index => index !== '');
    for (const tokenIndexStr of tokenIndexStrs) {
      matchingTokens.push(tokens[parseInt(tokenIndexStr, 10)]);
    }
  }
  return matchingTokens;
};

const getCapturedLocsFromMatch = (multiMatchResults, startIndex) => {
  const matchingLocs = [];
  // the first result is the whole match, not captured groups
  for (const key of Object.keys(multiMatchResults)) {
    const matchData = multiMatchResults[key];
    // if there's an optional capture group that didn't match, it will have a value of null
    // ignore those matches here. Revisit later if we find we want to keep them null, or
    // keep grouping each match by capture group regardless
    if (matchData === null) continue;
    matchingLocs.push({
      start: matchData.index + startIndex,
      end: matchData.index + startIndex + matchData.text.length,
    });
  }
  return matchingLocs;
};

/**
* Given an array of locs, combine adject locs into 1 bigger index
*/
const combineAdjacentLocations = (locs) => {
  if (locs.length <= 1) {
    return locs;
  }

  const sortedLocs = [...locs];
  sortedLocs.sort((locA, locB) => locA.start - locB.start);
  const combinedIndices = [];
  let currentLoc = Object.assign({}, sortedLocs[0]);
  for (let i = 1; i < sortedLocs.length; i += 1) {
    const loc = sortedLocs[i];
    if (loc.start <= currentLoc.end && loc.end > currentLoc.end) {
      currentLoc.end = loc.end;
    } else if (loc.start > currentLoc.end) {
      combinedIndices.push(currentLoc);
      currentLoc = Object.assign({}, loc);
    }
  }
  combinedIndices.push(currentLoc);
  return combinedIndices;
};

/**
* Match patterns of tokens using a regex
* returns an array of tokens for each capture group match
* ex: regexMatchTokens(tokens, '(:adv:):noPunc:*(:yijing:)', {adv: pos('adv'), noPunc, yijing: word('已经')})
*
* @returns {Tokens[][]|null} the capured tokens or null if no match was found
*/
exports.regexMatchTokens = (tokens, regexTemplate, matchParams) => {
  const filteredTokens = tokens.filter(notRoot); // remove the root node from matches
  const tokensStr = constructTokensStr(filteredTokens);
  const regexStr = constructRegexStr(filteredTokens, regexTemplate, matchParams);
  const mainMatches = tokensStr.match(new RegExp(regexStr, 'g'));
  if (!mainMatches) return null;
  const matchResults = [];
  for (const innerMatchStr of mainMatches) {
    const innerMatch = innerMatchStr.match(new RegExp(regexStr));
    matchResults.push(getCapturedTokensFromMatch(innerMatch, filteredTokens));
  }
  return matchResults;
};

/**
* Match a raw string and retun an array of locations of each capture group match
* ex: regexMatchLocs(text, /(已经).*(了)/)
*
* @returns {Tokens[][]|null} the capured match locations or null if no match was found
*/
exports.regexMatchLocs = (text, regex) => {
  const mainMatches = text.match(new RegExp(regex, 'gui'));
  if (!mainMatches) return null;
  const matchResults = [];
  let lastMatchEndIndex = 0;
  const multiRegex = new MultiRegExp(new RegExp(regex, 'ui'));
  for (const innerMatchStr of mainMatches) {
    const innerMatchStartPos = text.indexOf(innerMatchStr, lastMatchEndIndex);
    const innerMatch = multiRegex.exec(innerMatchStr);
    let locs = getCapturedLocsFromMatch(innerMatch, innerMatchStartPos);
    locs = combineAdjacentLocations(locs);
    matchResults.push(locs);
    lastMatchEndIndex = innerMatchStartPos + innerMatchStr.length;
  }
  return matchResults;
};

const locationFromToken = (token, matchRegex = null) => {
  const baseLocation = {
    start: token.characterOffsetBegin,
    end: token.characterOffsetEnd,
  };
  if (!matchRegex) return baseLocation;
  const matchData = token.word.match(new RegExp(matchRegex, 'ui'));
  if (!matchData) return null;
  baseLocation.start += matchData.index;
  baseLocation.end = baseLocation.start + matchData[0].length;
  return baseLocation;
};

/**
* Extract match locations from a returned list of token matches
*
* @param {Tokens[][]|null} the tokens representing the match
* @param {matchRegex} an optional regex to further filter the resulting locs.
*     Useful if tokens might contain extra characters besides just those we want to match
* @returns {Location[][]|null} The 
*/
exports.locsFromTokens = (tokenMatches, matchRegex = null) => {
  if (!tokenMatches) return null;
  const matches = [];
  for (const tokenMatch of tokenMatches) {
    let locations = [];
    for (const token of tokenMatch) {
      const location = locationFromToken(token, matchRegex);
      if (!location) continue;
      locations.push(location);
    }
    locations = combineAdjacentLocations(locations);
    matches.push(locations);
  }
  return matches;
};
