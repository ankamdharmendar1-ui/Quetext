const { preprocessText, chunkText } = require('./textProcessing');
const { searchWeb } = require('./webSearch');
const { calculateSimilarity } = require('./similarity');

async function checkPlagiarism(text) {
  try {
    // Preprocess and chunk text
    const cleanedText = preprocessText(text);
    const chunks = chunkText(cleanedText, 100);
    
    // Check each chunk
    const matches = [];
    
    for (const chunk of chunks) {
      const searchResults = await searchWeb(chunk);
      
      for (const result of searchResults) {
        const similarity = calculateSimilarity(chunk, result.snippet);
        
        if (similarity > 0.7) {
          matches.push({
            text: chunk,
            similarity,
            source: result.link,
            title: result.title
          });
        }
      }
    }
    
    // Calculate overall score
    const totalChunks = chunks.length;
    const matchedChunks = matches.length;
    const plagiarismScore = (matchedChunks / totalChunks) * 100;
    
    return {
      plagiarismScore,
      matches
    };
    
  } catch (error) {
    console.error('Plagiarism check failed:', error);
    throw new Error('Plagiarism check failed');
  }
}

module.exports = { checkPlagiarism };