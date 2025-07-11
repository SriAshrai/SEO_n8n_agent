const MAX_KEYWORDS = 100;
const keywords = $input.first().json.keywords;

if (keywords.length > MAX_KEYWORDS) {
  throw new Error(`❌ Exceeds budget! Max ${MAX_KEYWORDS} keywords allowed`);
}
return $input.all();