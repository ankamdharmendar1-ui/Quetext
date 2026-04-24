const axios = require('axios');

async function humanizeText(text) {
  try {
    const response = await axios.post(
      `${process.env.AI_SERVICE_URL}/humanize`,
      { text },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );
    
    return response.data.humanized;
  } catch (error) {
    console.error('AI humanization failed:', error.response?.data || error.message);
    throw new Error('AI humanization failed');
  }
}

module.exports = { humanizeText };