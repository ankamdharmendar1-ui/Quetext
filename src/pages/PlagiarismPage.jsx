import React, { useState } from 'react';
import TextEditor from '../components/TextEditor';
import HighlightedText from '../components/HighlightedText';
import SourceList from '../components/SourceList';
import { checkPlagiarism } from '../lib/api';
import SEO from '../lib/seoHelper';
import RelatedTools from '../components/RelatedTools';
import SeoContentSection from '../components/SeoContentSection';
import { getToolSchema } from '../content/seo/toolContent';

const PlagiarismPage = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckPlagiarism = async () => {
    if (!text.trim()) {
      setError('Please enter some text to check');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const data = await checkPlagiarism(text);
      setResult(data);
    } catch (err) {
      setError('Failed to check plagiarism');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Free Plagiarism Checker"
        description="Free Plagiarism Checker – Instantly check any text for plagiarism with Quetext. Get detailed reports, high accuracy, and protect your academic integrity."
        keywords="Free Plagiarism Checker, plagiarism checker, duplicate content detector, free plagiarism detection"
        url="/plagiarism-checker"
        customSchema={getToolSchema('/plagiarism-checker')}
      />
      
      <h1 className="text-3xl font-bold mb-6">Plagiarism Checker</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <TextEditor 
            value={text} 
            onChange={setText} 
            placeholder="Enter text to check for plagiarism..."
          />
          <button 
            onClick={handleCheckPlagiarism}
            disabled={loading}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Checking...' : 'Check Plagiarism'}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        
        <div>
          {result && (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Plagiarism Score: {result.plagiarismScore.toFixed(1)}%</h2>
                <HighlightedText 
                  text={text} 
                  matches={result.matches}
                />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Sources</h3>
                <SourceList sources={result.matches} />
              </div>
            </>
          )}
        </div>
      </div>

      <SeoContentSection path="/plagiarism-checker" />
    
      <RelatedTools currentPath="/plagiarism-checker" />
    </div>
  );
};

export default PlagiarismPage;