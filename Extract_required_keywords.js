
const inputData = $input.first().json;


const aiOutput = inputData.aiKeywordsContent || '';
const seedKeyword = inputData.originalSeedKeyword || '';


if (aiOutput.trim() === '') {
    console.warn("AI generated no keywords or content was empty. Returning original seed keyword only if available.");
    if (seedKeyword) {
        return [{ json: { keyword: seedKeyword, seedKeyword: seedKeyword } }];
    }
    return []; 
}

let keywords = aiOutput.split(',')
                       .map(keyword => keyword.trim())
                       .filter(keyword => keyword !== '');


if (seedKeyword && !keywords.map(kw => kw.toLowerCase()).includes(seedKeyword.toLowerCase())) {
    keywords.unshift(seedKeyword);
}


const uniqueKeywords = [];
const seen = new Set();
for (const kw of keywords) {
    const lowerKw = kw.toLowerCase();
    if (!seen.has(lowerKw)) {
        seen.add(lowerKw);
        uniqueKeywords.push(kw);
    }
}


return uniqueKeywords.map(keyword => ({
    json: { 
        keyword: keyword,
        seedKeyword: seedKeyword
    }
}));