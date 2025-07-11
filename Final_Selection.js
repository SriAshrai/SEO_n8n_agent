const finalFormattedKeywords = [];
const seenKeywords = new Set(); // To track unique keywords and prevent duplicates


const TARGET_KEYWORD_COUNT = 50;



console.log("--- START JS CODE NODE EXECUTION (Resilient Parsing & Deduplication) ---");
console.log("Total input items received:", allInputItems.length);
console.log(`Targeting ${TARGET_KEYWORD_COUNT} unique keyword items.`);


for (const item of allInputItems) {
    
    if (finalFormattedKeywords.length >= TARGET_KEYWORD_COUNT) {
        console.log(`Collected ${TARGET_KEYWORD_COUNT} unique keywords. Stopping further input processing.`);
        break;
    }

    
    let rawText = item.json?.text || item.text;

    console.log("\n--- Processing New Input Item ---");
    console.log("Full input item structure (first 200 chars):", JSON.stringify(item, null, 2).substring(0, 200) + "...");
    console.log("Raw text extracted (first 500 chars):", rawText ? rawText.substring(0, 500) + (rawText.length > 500 ? "..." : "") : "No raw text found");

    
    if (typeof rawText !== 'string' || !rawText.trim()) {
        console.warn("Skipping item due to missing or invalid 'text' content.");
        continue; 
    }

    
    const objectMatches = rawText.match(/\{[^}]*\}/g);

    if (!objectMatches || objectMatches.length === 0) {
        console.warn("No valid JSON objects found in raw text for this item. Skipping.", rawText);
        continue; 
    }

    console.log(`Found ${objectMatches.length} potential JSON object strings in this input item.`);

    
    for (const objStr of objectMatches) {
        
        if (finalFormattedKeywords.length >= TARGET_KEYWORD_COUNT) {
            console.log(`Collected ${TARGET_KEYWORD_COUNT} unique keywords. Stopping further object parsing for current input item.`);
            break;
        }

        try {
            const parsedObject = JSON.parse(objStr);

            // Ensure the parsed object has a 'keyword' and it's not a duplicate
            if (parsedObject.keyword && typeof parsedObject.keyword === 'string' && !seenKeywords.has(parsedObject.keyword)) {
                // Also, ensure it has at least one of the other expected keys to be considered valid
                if (parsedObject.justification || parsedObject.content_angle) {
                    finalFormattedKeywords.push(parsedObject);
                    seenKeywords.add(parsedObject.keyword); 
                    
                } else {
                    console.warn(`Parsed object for keyword "${parsedObject.keyword}" does not contain 'justification' or 'content_angle' keys. Skipping.`);
                }
            } else if (parsedObject.keyword && seenKeywords.has(parsedObject.keyword)) {
                console.warn(`Skipping duplicate keyword: "${parsedObject.keyword}".`);
            } else {
                console.warn("Parsed object does not contain a valid 'keyword' or is missing expected keys. Skipping.", parsedObject);
            }
        } catch (e) {
            console.error("Failed to parse an individual JSON object string:", e);
            console.error("Problematic object string (first 200 chars):", objStr.substring(0, 200) + (objStr.length > 200 ? "..." : ""));
            
        }
    }
}

console.log("\n--- JS CODE NODE SUMMARY ---");
console.log(`Final collected unique keywords: ${finalFormattedKeywords.length} (Target: ${TARGET_KEYWORD_COUNT})`);

const n8nOutput = finalFormattedKeywords.map(keywordItem => ({
    json: keywordItem
}));

console.log("Total items in final n8n output:", n8nOutput.length);
console.log("--- END JS CODE NODE EXECUTION ---");

return n8nOutput;





