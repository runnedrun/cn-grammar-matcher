/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups, regexMatchLocs } = require('../lib/regexMatchers');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASG765HD',
  name: 'AllSet Chinese Grammar Wiki',
};


module.exports = {
  id: 'expressingItDependsWithKan',
  name: '(这 / 那) + 得看 / 要看 + [What "It" Depends On]',
  description: 'Although there are a number of ways to express "it depends" in Chinese, the most common ones in spoken Chinese involve the verb 看 (kàn). Some common expressions include:',
  sources: [
    allSetSrc,
  ],
  match: (sentence) => {
    const text = sentence.original;
    return mergeLocMatchGroups([
      regexMatchLocs(text, /((?:(?:这|那)?)(?:得看|要看))/),
      regexMatchLocs(text, /((?:得看|要看))/),
    ]);
  },
  examples: [
    {
      zh: '这得看你的时间。',
      en: 'This depends on when you are available.',
      src: allSetSrc,
    },
    {
      zh: '这得看天气怎么样。',
      en: 'It depends on how the weather is.',
      src: allSetSrc,
    },
    {
      zh: '那得看考试难不难。',
      en: 'That depends on whether the exam is difficult or not.',
      src: allSetSrc,
    },
    {
      zh: '那要看他有没有女朋友。',
      en: 'That depends on whether or not he has a girlfriend.',
      src: allSetSrc,
    },
    {
      zh: '那要看孩子怎么想。',
      en: 'It depends on what the child thinks.',
      src: allSetSrc,
    },
    {
      zh: '去不去要看他的心情。',
      en: 'Whether he comes or not depends on his mood.',
      src: allSetSrc,
    },
    {
      zh: '能不能得到这个工作要看你的面试结果。',
      en: 'Whether you can get this job depends on the result of the job interview.',
      src: allSetSrc,
    },
    {
      zh: '请多少人来得看你们的预算是多少。',
      en: 'When to meet this client depends on what time he will be available.',
      src: allSetSrc,
    },
    {
      zh: '送什么礼物要看她喜欢什么。',
      en: 'What birthday present to give to her depends on what she really likes.',
      src: allSetSrc,
    },
    {
      zh: '能不能赢得看我们的团队合作得怎么样。',
      en: 'Whether we can win depends on how our teamwork is.',
      src: allSetSrc,
    },
  ],
};
