const KD_THRESHOLD = 70;
const VOL_THRESHOLD = 10;


const allItems = $input.all();
console.log("TOTAL INPUT ITEMS:", allItems.length);

const allKeywords = [];
allItems.forEach(item => {
  try {
    // Handle multiple tasks
    const tasks = item.json.tasks || [];
    
    tasks.forEach(task => {
      // Process each keyword result
      (task.result || []).forEach(result => {
        // Extract metrics
        const comp = result.competition_index ?? 
                     result.competition_score ?? 
                     (result.competition === "LOW" ? 20 : 
                      result.competition === "MEDIUM" ? 50 : 
                      result.competition === "HIGH" ? 80 : 100);
        
        const vol = result.search_volume ?? 
                    result.monthly_searches?.reduce((sum, m) => sum + (m.search_volume || 0), 0) ?? 
                    result.keyword_info?.search_volume;
        
        
        const compNum = Number(comp);
        const volNum = Number(vol);
        
        if (!isNaN(compNum) && !isNaN(volNum)) {
          allKeywords.push({
            json: {
              
              ...result,
              
              competition_score: compNum,
              monthly_volume: volNum,
              
              seedKeyword: item.json.seedKeyword || "global internship"
            }
          });
        } else {
          console.warn("INVALID METRICS FOR:", result.keyword);
        }
      });
    });
  } catch (error) {
    console.error("PROCESSING ERROR:", error.message);
  }
});

console.log("EXTRACTED KEYWORDS:", allKeywords.length);

// Filter and sort
const filteredSorted = allKeywords
  .filter(item => item.json.competition_score <= KD_THRESHOLD && 
                  item.json.monthly_volume >= VOL_THRESHOLD)
  .sort((a, b) => {
    
    const compDiff = a.json.competition_score - b.json.competition_score;
    if (compDiff !== 0) return compDiff;
    

    return b.json.monthly_volume - a.json.monthly_volume;
  });

console.log("FILTERED/SORTED COUNT:", filteredSorted.length);
return filteredSorted;