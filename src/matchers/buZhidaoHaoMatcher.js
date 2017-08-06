/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups, regexMatchLocs } = require('../lib/regexMatchers');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASG0EQQJ',
  name: 'AllSet Chinese Grammar Wiki',
};


module.exports = {
  id: 'buZhidaoHao',
  name: 'Subj. + 不知道 + Verb Phrase + 好',
  description: '"不知道⋯⋯好" (bù zhīdào...hǎo) is an expression used to indicate and emphasize that the speaker does not know how to do something, or at least does not know how to do something well.',
  sources: [
    allSetSrc,
  ],
  match: (sentence) => {
    const text = sentence.original;
    return mergeLocMatchGroups([
      regexMatchLocs(text, /(不知道)[^好]+(好)/),
    ]);
  },
  examples: [
    {
      zh: '这件事我真的不知道怎么办好。',
      en: 'I really don\'t know what to do with this.',
      src: allSetSrc,
    },
    {
      zh: '那时候我真不知道说什么好。',
      en: 'I didn\'t know what to say at that time.',
      src: allSetSrc,
    },
    {
      zh: '他的短信我不知道怎么回复好。',
      en: 'I don\'t know how to reply to his message.',
      src: allSetSrc,
    },
    {
      zh: '这些东西我们不知道放在哪儿好。',
      en: 'We don\'t know where to put there stuff.',
      src: allSetSrc,
    },
    {
      zh: '好吃的太多了，他不知道先吃哪个好。',
      en: 'There are too much delicious food. He doesn\'t know which one to start with.',
      src: allSetSrc,
    },
  ],
};
