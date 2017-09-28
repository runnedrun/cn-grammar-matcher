/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { regexMatchLocs } = require('../lib/matching/regexMatch');
const { mergeLocMatchGroups } = require('../lib/matching/utils');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGF763H',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'dengDeng',
  name: 'A1，A2⋯⋯等 / 等等',
  description:
    '等等 (děng děng), or simply 等 (děng), is just like saying “and so on” or “etc.” in English, but just a bit more formal.  Both are placed after listing a series of items (generally with a list that exceeds two items).',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([
      regexMatchLocs(text, /(等等)/),
      regexMatchLocs(text, /.+，.+(等)/),
    ]);
  },
  examples: [
    {
      zh: '西瓜、菠萝、苹果、葡萄等等都是我喜欢的水果。',
      en:
        'Watermelons, pineapples, apples, grapes and so on are all the fruits that I like.',
      src: allSetSrc,
    },
    {
      zh: '我的男朋友会说很多外语，英语、法语、西班牙语等等。',
      en: 'My boyfriend can speak many foreign languages: English, French, Spanish, etc.',
      src: allSetSrc,
    },
    {
      zh: '我很喜欢运动，比如跑步、游泳、做瑜伽等等。',
      en: 'I like exercising very much, for example, running, swimming, doing yoga, etc.',
      src: allSetSrc,
    },
    {
      zh: '我们公司有好几个部门，市场部、客户部、技术部等。',
      en:
        'Our company has several departments: marketing department,  client department, technology department, etc.',
      src: allSetSrc,
    },
    {
      zh: 'JackieChan、JetLi、BruceLi等都是中国有名的功夫明星。',
      en:
        'Jackie Chan, Jet Li, Bruce Li, etc. are all famous Chinese martial arts stars.',
      src: allSetSrc,
    },
    {
      zh: '长城、故宫等地方都是北京有名的景点。',
      en:
        'The Great Wall, the Forbidden City, etc. are all famous scenic spots in Beijing.',
      src: allSetSrc,
    },
    {
      zh: '北京、上海、广州等城市是中国最发达的城市。',
      en:
        'Beijing, Shanghai, Guangzhou and so on are the most developed cities in China.',
      src: allSetSrc,
    },
    {
      zh: '牛津、剑桥等大学都是最有名的英国大学。',
      en: 'Oxford, Cambridge and so on are the most famous British Universities.',
      src: allSetSrc,
    },
    {
      zh: '中国、印度、巴西等国家都不是发达国家。',
      en: 'China, India, Brazil and so on are not developed countries.',
      src: allSetSrc,
    },
    {
      zh: 'WTO,WHO等组织都是国际组织。',
      en: 'WTO, WHO and so on are all international organizations.',
      src: allSetSrc,
    },
  ],
};
