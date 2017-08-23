/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups, regexMatchLocs } = require('../lib/matchingHelpers');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGW863F',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'jinguan',
  name: '尽管 A，还是 / 仍然 B',
  description:
    '尽管 (jǐnguǎn)  means "although," and is a little stronger than 虽然, perhaps more like "even though."',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([regexMatchLocs(text, /(尽管)[^还是仍然]+((?:还是|仍然))?/)]);
  },
  examples: [
    {
      zh: '尽管领导今天不来，可我们还是不能偷懒。',
      en: "Even though the leaders aren't coming today, we still can't be lazy.",
      src: allSetSrc,
    },
    {
      zh: '尽管火很大，很危险，消防员仍然勇敢地冲了进去。',
      en:
        'Even though the fire was big and it was very dangerous, the firefighters are still bravely running in.',
      src: allSetSrc,
    },
    {
      zh: '尽管失败了好几次，可他仍然想创业。',
      en: "Even though he's failed many times, he still wants to start a business.",
      src: allSetSrc,
    },
    {
      zh: '尽管实现这个目标不太容易，但是我们不能这么快就放弃。',
      en:
        "Even though it's not that easy to realize this goal, we can't just give up on it.",
      src: allSetSrc,
    },
    {
      zh: '尽管没人赞同他的观点，他还是坚持自己的看法。',
      en: 'Even though nobody agreed with him,he still holds to his views.',
      src: allSetSrc,
    },
  ],
};
