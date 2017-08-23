/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups, regexMatchLocs } = require('../lib/matchingHelpers');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGJ1VZQ',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'buJin',
  name: 'Subj. + 不仅 / 不但 / 不只 + ⋯⋯，而且 / 还 / 也 + ⋯⋯',
  description:
    'We\'ve seen 不但⋯⋯而且 in B1, but other than that there are a number of other structures which can be used to express "not only...but also." 不但 can be substituted with 不仅(bù jǐn) and 不只  (bù zhǐ), all meaning "not only," and can be followed by 而且 (ér qiě) , 还 (hái), or 也 (yě) \nOther than 不但⋯⋯而且 being more common than the others, they are all pretty similar in usage and meaning.',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([
      regexMatchLocs(text, /((?:不仅|不但|不只))[^而且还也]+((?:而且|还|也))/),
    ]);
  },
  examples: [
    {
      zh: '这篇文章不仅结构清楚，而且思想先进。',
      en: 'This essay is not only written clearly, but is also well-developed.',
      src: allSetSrc,
    },
    {
      zh: '他不仅喜欢吃中国菜，而且也会做几个中国菜！',
      en: 'He not only likes to eat Chinese food, but he can make some as well!',
      src: allSetSrc,
    },
    {
      zh: '这个外国人不只会唱民歌，还会说方言，真是了不起！',
      en:
        "Not only can this foreigner sing folk songs, but he can also speak the dialect. That's really amazing!",
      src: allSetSrc,
    },
    {
      zh: '他不但聪明还很善良。难怪他这么受大家的喜爱！',
      en: "He's not only smart, but also kind. No wonder everyone loves him.",
      src: allSetSrc,
    },
  ],
};
