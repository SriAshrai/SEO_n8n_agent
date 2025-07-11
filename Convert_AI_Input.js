
const openAIOutput = $input.first().json; 


let originalSeedKeyword = '';
try {
    
    const startNodeOutput = $node['Start - Seed Keyword Input'];

    if (startNodeOutput) {
        
        if (Array.isArray(startNodeOutput.json) && startNodeOutput.json.length > 0) {
            
            if (startNodeOutput.json[0] && startNodeOutput.json[0].json && startNodeOutput.json[0].json.seedKeyword) {
                originalSeedKeyword = startNodeOutput.json[0].json.seedKeyword;
            } else if (startNodeOutput.json[0] && startNodeOutput.json[0].seedKeyword) {
                
                originalSeedKeyword = startNodeOutput.json[0].seedKeyword;
            }
        } else if (startNodeOutput.json && startNodeOutput.json.seedKeyword) {
            
            originalSeedKeyword = startNodeOutput.json.seedKeyword;
        }
    }

    if (!originalSeedKeyword) {
        console.warn("Warning: originalSeedKeyword could not be retrieved from 'Start - Seed Keyword Input'. Please check the node name and its output structure.");
    }
} catch (e) {
    console.error(`Error retrieving originalSeedKeyword: ${e.message}. Ensure 'Start - Seed Keyword Input' node is correctly named and executed.`);
}




let aiKeywordsContent = '';
if (openAIOutput && openAIOutput.message && openAIOutput.message.content) {
    aiKeywordsContent = openAIOutput.message.content;
} else {
    console.warn("AI output content is missing or in an unexpected format.");
}


return [{
    json: {
        aiKeywordsContent: aiKeywordsContent,
        originalSeedKeyword: originalSeedKeyword
    }
}];