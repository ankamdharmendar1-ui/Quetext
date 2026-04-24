import React, { useState } from 'react';
import TextEditor from '../components/TextEditor';
import { detectAI } from '../lib/api';
import SEO from '../lib/seoHelper';

const AIDetectionPage = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDetectAI = async () => {
    if (!text.trim()) {
      setError('Please enter some text to analyze');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const data = await detectAI(text);
      setResult(data);
    } catch (err) {
      setError('Failed to analyze text');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">AI Content Detection</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <TextEditor 
            value={text} 
            onChange={setText} 
            placeholder="Enter text to analyze for AI-generated content..."
            rows={10}
          />
          <button 
            onClick={handleDetectAI}
            disabled={loading}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : 'Detect AI Content'}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        
        <div>
          {result && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
              
              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-1">AI Probability</h3>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-blue-600 h-4 rounded-full" 
                    style={{ width: `${result.aiProbability * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {Math.round(result.aiProbability * 100)}% likely AI-generated
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700 mb-1">Detailed Report</h3>
                <p className="text-gray-800">{result.report}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIDetectionPage;