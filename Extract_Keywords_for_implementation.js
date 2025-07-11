
const allItems = $input.all();
const seed = allItems[0].json.seedKeyword;
const keywords = allItems.map(item => item.json.keyword);

return [
  {
    json: {
      seedKeyword: seed,
      keywords: keywords,
      totalKeywords: keywords.length
    }
  }
];