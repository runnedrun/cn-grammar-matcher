/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups, regexMatchLocs } = require('../lib/matchingHelpers');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGC06N0',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'basicComparisonsWithYiyang',
  name: 'Noun 1 + 跟 / 和 + Noun 2 + 一样',
  description:
    'Along with 比 (bǐ) and 没有 (méiyǒu), 一样 (yīyàng) is another way to make basic comparisons. However, 一样 (yīyàng) is used to express that two things are the same in some way.',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([
      regexMatchLocs(text, /((?:跟|和))[^一样]+(一样)/),
      regexMatchLocs(text, /((?:跟|和))[^一样]+(一样)/),
    ]);
  },
  examples: [
    {
      zh: '我和你一样。',
      en: 'I am the same as you.',
      src: allSetSrc,
    },
    {
      zh: '他的性格跟他妈妈一样。',
      en: 'He has the same personality as his mom.',
      src: allSetSrc,
    },
    {
      zh: '北京的天气和上海不一样。',
      en: 'The weather in Beijing and the weather in Shanghai are not alike.',
      src: allSetSrc,
    },
    {
      zh: '这个词的意思和那个词一样吗？',
      en: 'Are the meanings of this word and that word the same?',
      src: allSetSrc,
    },
    {
      zh: '美国文化跟中国文化不一样。',
      en: 'American culture and Chinese culture are not the same.',
      src: allSetSrc,
    },
    {
      zh: '啤酒和葡萄酒的味道一样吗？',
      en: 'Do beer and red wine taste the same?',
      src: allSetSrc,
    },
    {
      zh: '你家跟我家一样大。',
      en: 'Your house is just as big as mine.',
      src: allSetSrc,
    },
    {
      zh: '她和她哥哥一样高。',
      en: 'She and her older brother are equally tall.',
      src: allSetSrc,
    },
    {
      zh: '你的头发和我的头发一样长。',
      en: 'You hair is as long as mine.',
      src: allSetSrc,
    },
    {
      zh: '这里的天气跟我老家一样舒服。',
      en: "The weather here is just as comfortable as my hometown's.",
      src: allSetSrc,
    },
    {
      zh: '你跟老板一样忙吗？',
      en: 'Are you as busy as the boss is?',
      src: allSetSrc,
    },
  ],
};
