const axios = require('axios');

async function detectAI(text) {
  try {
    const response = await axios.post(
      `${process.env.AI_SERVICE_URL}/detect-ai`,
      { text },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );
    
    return response.data;
  } catch (error) {
    console.error('AI detection service error:', error.response?.data || error.message);
    throw new Error('Failed to detect AI content');
  }
}

module.exports = { detectAI };