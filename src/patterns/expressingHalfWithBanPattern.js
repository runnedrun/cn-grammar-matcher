/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { regexMatchLocs } = require('../lib/matching/regexMatch');
const { mergeLocMatchGroups } = require('../lib/matching/utils');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGAC1P9',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'expressingHalfWithBan',
  name: '半 + Measure Word + Noun',
  description:
    'The Chinese word 半 (bàn) means "half." That\'s simple enough, but what can get slightly tricky is the rules for how it combines with measure words.',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([
      regexMatchLocs(text, /(半)/),
      regexMatchLocs(text, /(半(?:天|年))/),
      regexMatchLocs(text, /((?:天|年)半)/),
    ]);
  },
  examples: [
    {
      zh: '半个小时',
      en: 'half an hour',
      src: allSetSrc,
    },
    {
      zh: '半个月',
      en: 'half a month',
      src: allSetSrc,
    },
    {
      zh: '半碗米饭',
      en: 'half a bowl of rice',
      src: allSetSrc,
    },
    {
      zh: '半瓶酒',
      en: 'half a bottle of liquor',
      src: allSetSrc,
    },
    {
      zh: '半份炒面',
      en: 'half a serving of chow mein',
      src: allSetSrc,
    },
    {
      zh: '半个小时',
      en: 'half an hour',
      src: allSetSrc,
    },
    {
      zh: '一个半小时',
      en: 'an hour and a half',
      src: allSetSrc,
    },
    {
      zh: '三个半小时',
      en: 'three and a half hours',
      src: allSetSrc,
    },
    {
      zh: '两个半月',
      en: 'two and a half months',
      src: allSetSrc,
    },
    {
      zh: '一斤半水果',
      en: 'one and a half jin of fruit',
      src: allSetSrc,
    },
    {
      zh: '一瓶半白酒',
      en: 'one and a half bottles of wine',
      src: allSetSrc,
    },
    {
      zh: '四块半巧克力',
      en: 'four and a half pieces of chocolate',
      src: allSetSrc,
    },
    {
      zh: '半天',
      en: 'half a day',
      src: allSetSrc,
    },
    {
      zh: '半年',
      en: 'half a year',
      src: allSetSrc,
    },
    {
      zh: '两天半',
      en: 'two and a half days',
      src: allSetSrc,
    },
    {
      zh: '一年半',
      en: 'a year and a half',
      src: allSetSrc,
    },
    {
      zh: '三天半',
      en: 'three and a half days',
      src: allSetSrc,
    },
    {
      zh: '四年半',
      en: 'four and a half years',
      src: allSetSrc,
    },
  ],
};
