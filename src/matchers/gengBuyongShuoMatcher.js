/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups, regexMatchLocs } = require('../lib/matchingHelpers');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGHOI8S',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'gengBuyongShuo',
  name: '连 + A + 都 / 也 + Verb， 更不用说 + B + 了',
  description:
    '更不用说 (gèng bùyòng shuō) means "let alone," and is used in the same way as the English, where we might say: "he can\'t even boil an egg, let alone prepare a banquet"',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([
      regexMatchLocs(text, /(连)?[^都也]+((?:都|也))?[^说]+(更不用说)[^了]+(了)/),
    ]);
  },
  examples: [
    {
      zh: '他都不会煮鸡蛋，更不用说做一大桌子的菜了。',
      en: "He can't boil an egg, let alone prepare a banquet.",
      src: allSetSrc,
    },
    {
      zh: '他连自己国家的国旗都不认识，更不用说其他国家的了。',
      en:
        "He can't even recognize his own country's flag, not to mention any other countries' flags.",
      src: allSetSrc,
    },
    {
      zh: '他从来没有出过远门，更不用说出国了。',
      en: "He's never traveled very far, let alone out of the country.",
      src: allSetSrc,
    },
  ],
};
