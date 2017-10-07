/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { regexMatchLocs } = require('../lib/matching/regexMatch');
const { mergeLocMatchGroups } = require('../lib/matching/utils');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGPFUM2',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'bothWithYou',
  name: 'Subj. + 又 + Adj. 1 + 又 + Adj. 2',
  description:
    'When you\'re getting descriptive, you may find yourself wanting to use multiple adjectives at a time. The character 又 (yòu) can be used to give two qualities to something. Using the double 又 (yòu) structure is like saying that something is "both… and…" in English.',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([regexMatchLocs(text, /(又)[^又]+(又)/)]);
  },
  examples: [
    {
      zh: '她男朋友又高又帅。',
      en: 'Her boyfriend is both tall and handsome.',
      src: allSetSrc,
    },
    {
      zh: '这个房子又大又亮。',
      en: 'This house is both big and bright.',
      src: allSetSrc,
    },
    {
      zh: '妈妈的头发又黑又亮。',
      en: "Mom's hair is both black and shiny.",
      src: allSetSrc,
    },
    {
      zh: '我姐姐又聪明又漂亮。',
      en: 'My older sister is both smart and beautiful.',
      src: allSetSrc,
    },
    {
      zh: '中国菜又便宜又好吃。',
      en: 'Chinese food is both cheap and good-tasting.',
      src: allSetSrc,
    },
    {
      zh: '你们老板又年轻又有钱。',
      en: 'Your boss is both young and rich.',
      src: allSetSrc,
    },
    {
      zh: '这里的咖啡又贵又难喝。',
      en: 'The coffee here is both expensive and bad-tasting.',
      src: allSetSrc,
    },
    {
      zh: '我家小狗又可爱又听话。',
      en: "My family's dog is both cute and obedient.",
      src: allSetSrc,
    },
    {
      zh: '上海的冬天又冷又湿。',
      en: 'Winter here in Shanghai is both cold and humid.',
      src: allSetSrc,
    },
    {
      zh: '她小时候又矮又瘦。',
      en: 'She was both short and thin when she was young.',
      src: allSetSrc,
    },
  ],
};