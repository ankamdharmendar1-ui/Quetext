import React, { useState } from 'react';
import TextEditor from '../components/TextEditor';
import { paraphraseText } from '../lib/api';
import SEO from '../lib/seoHelper';

const ParaphrasePage = () => {
  const [original, setOriginal] = useState('');
  const [paraphrased, setParaphrased] = useState('');
  const [style, setStyle] = useState('standard');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleParaphrase = async () => {
    if (!original.trim()) {
      setError('Please enter some text to paraphrase');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const result = await paraphraseText(original, style);
      setParaphrased(result);
    } catch (err) {
      setError('Failed to paraphrase text');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Free Paraphrasing Tool Online | Quetext"
        description="Rephrase text while maintaining original meaning with our free paraphrasing tool. Avoid plagiarism and improve content clarity."
        keywords="rewriter, article spinner, content rephraser"
        url="/paraphrasing-tool"
      />
      
      <h1 className="text-3xl font-bold mb-6">Paraphrasing Tool</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Original Text
            </label>
            <TextEditor 
              value={original} 
              onChange={setOriginal} 
              placeholder="Enter text to paraphrase..."
              rows={10}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Paraphrase Style
            </label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="standard">Standard</option>
              <option value="formal">Formal</option>
              <option value="casual">Casual</option>
              <option value="creative">Creative</option>
              <option value="academic">Academic</option>
            </select>
          </div>
          
          <button 
            onClick={handleParaphrase}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Paraphrasing...' : 'Paraphrase Text'}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Paraphrased Result
          </label>
          <TextEditor 
            value={paraphrased} 
            onChange={setParaphrased} 
            placeholder="Paraphrased text will appear here..."
            rows={10}
            readOnly={false}
          />
          
          {paraphrased && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => navigator.clipboard.writeText(paraphrased)}
                className="flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
                Copy to Clipboard
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParaphrasePage;