/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups, regexMatchLocs } = require('../lib/matchingHelpers');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGT3KF6',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'structureOfDates',
  name: 'x 年 + y 月 + z 日',
  description:
    'Dates in Chinese follow the order "year, month, day." This is in keeping with the "from big to small" trend which pervades many facets of Chinese culture.',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([
      regexMatchLocs(
        text,
        /([零一二三四五六七八九十百千万亿0-9]+年)?([零一二三四五六七八九十百千万亿0-9]+月[零一二三四五六七八九十百千万亿0-9]+(?:号|日))/
      ),
      regexMatchLocs(
        text,
        /([零一二三四五六七八九十百千万亿0-9]+年[零一二三四五六七八九十百千万亿0-9]+月)([零一二三四五六七八九十百千万亿0-9]+(?:号|日))?/
      ),
    ]);
  },
  examples: [
    {
      zh: '1868年1月18号',
      en: 'January 18, 1868',
      src: allSetSrc,
    },
    {
      zh: '1910年8月9号',
      en: 'August 9, 1910',
      src: allSetSrc,
    },
    {
      zh: '2001年7月20日',
      en: 'July 20th, 2001',
      src: allSetSrc,
    },
    {
      zh: '1月1日是新年。',
      en: "January 1st is New Year's Day.",
      src: allSetSrc,
    },
    {
      zh: '12月24日是平安夜。',
      en: 'December 24th is Christmas Eve.',
      src: allSetSrc,
    },
    {
      zh: '10月1号我们去上海。',
      en: 'We will go to Shanghai on October 1st.',
      src: allSetSrc,
    },
    {
      zh: '我1990年7月出生。',
      en: 'I was born in July 1990.',
      src: allSetSrc,
    },
    {
      zh: '你的生日是11月11号吗？',
      en: 'Is your birthday November 11th?',
      src: allSetSrc,
    },
    {
      zh: '我2006年4月17号认识了他。',
      en: 'I met him on April 17, 2006.',
      src: allSetSrc,
    },
    {
      zh: '1980年9月4号我们结婚了。',
      en: 'We got married on September 4th, 1980.',
      src: allSetSrc,
    },
  ],
};
