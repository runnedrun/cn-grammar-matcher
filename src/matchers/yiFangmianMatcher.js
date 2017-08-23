/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups, regexMatchLocs } = require('../lib/matchingHelpers');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGCWHNF',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'yiFangmian',
  name: '一 方面 + Aspect 1， (另) 一 方面 + Aspect 2',
  description:
    'When talking about various aspects of a situation, "一方面⋯⋯， (另)一方面⋯⋯" (yī fāngmiàn..., (lìng) yī fāngmiàn...) can be used in a similar way that "On one hand..., on the other hand..." is in English.',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([
      regexMatchLocs(text, /(一方面)[^面]+(另?一方面)/),
      regexMatchLocs(text, /(一方面)[^方]+(另?一方面)/),
    ]);
  },
  examples: [
    {
      zh: '我们一方面要让客户满意，另一方面又不能让公司有损失。',
      en:
        "One one hand, we need to make our clients satisfied, but on the other hand, we can't cause the company any loss.",
      src: allSetSrc,
    },
    {
      zh: '这个项目一方面能增加当地人的收入，另一方面还能保护当地的环境。',
      en:
        "One one hand, this project can increase local people's income; on the other hand, it can protect local environment.",
      src: allSetSrc,
    },
    {
      zh: '他一方面很想创业，另一方面又担心风险太大。',
      en:
        "On one hand, he wants to start a business, but on the other hand, he's afraid the risk is too great.",
      src: allSetSrc,
    },
    {
      zh: '智能手机一方面让我们的生活方便了很多，另一方面也浪费了我们不少时间。',
      en:
        'One one hand, smart phone makes our life more convenient; on the other hand, it wastes a lot of our time.',
      src: allSetSrc,
    },
    {
      zh: '开发太阳能一方面可以减少污染，一方面也可以降低成本。',
      en:
        'On one hand, developing solar power can reduce pollution; on the other hand, it could also reduce the cost.',
      src: allSetSrc,
    },
  ],
};
