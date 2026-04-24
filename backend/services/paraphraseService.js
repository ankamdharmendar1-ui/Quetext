const axios = require('axios');
const { preprocessText } = require('./textProcessing');

async function paraphraseText(text, style = 'standard') {
  try {
    const cleanedText = preprocessText(text);
    
    const response = await axios.post(
      `https://language.googleapis.com/v1/documents:analyzeSyntax?key=${process.env.PARAPHRASE_API_KEY}`,
      {
        document: {
          content: cleanedText,
          type: 'PLAIN_TEXT'
        },
        features: {
          extract_syntax: true
        }
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
    // Extract tokens and reconstruct paraphrased text
    const tokens = response.data.tokens;
    const paraphrasedText = tokens.map(token => token.text.content).join(' ');
    
    return paraphrasedText;
  } catch (error) {
    console.error('Paraphrase failed:', error.response?.data || error.message);
    throw new Error('Paraphrasing failed');
  }
}

module.exports = { paraphraseText };