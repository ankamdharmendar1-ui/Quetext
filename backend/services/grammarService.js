const axios = require('axios');

async function checkGrammar(text) {
  try {
    const response = await axios.post(
      'https://api.grammarcheck.com/v1/check',
      {
        text,
        api_key: process.env.GRAMMAR_API_KEY
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
    return response.data;
  } catch (error) {
    console.error('Grammar check failed:', error.response?.data || error.message);
    throw new Error('Grammar check failed');
  }
}

module.exports = { checkGrammar };