const { summarizeText } = require('../ai-service/app/services/text_processing');

const summarize = async (text, options = {}) => {
  try {
    const summary = await summarizeText(text, options);
    return summary;
  } catch (error) {
    console.error('Summarization failed:', error);
    throw new Error('Failed to summarize text');
  }
};

module.exports = {
  summarize
};