import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PlagiarismPage from './pages/PlagiarismPage';
import AIDetectionPage from './pages/AIDetectionPage';
import ParaphrasePage from './pages/ParaphrasePage';
import GrammarPage from './pages/GrammarPage';
import SentenceRewriterPage from './pages/SentenceRewriterPage';
import WordCounterPage from './pages/WordCounterPage';
import ToolsHubPage from './pages/ToolsHubPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tools" element={<ToolsHubPage />} />
            <Route path="/plagiarism-checker" element={<PlagiarismPage />} />
            <Route path="/ai-content-detector" element={<AIDetectionPage />} />
            <Route path="/paraphrasing-tool" element={<ParaphrasePage />} />
            <Route path="/grammar-checker" element={<GrammarPage />} />
            <Route path="/sentence-rewriter" element={<SentenceRewriterPage />} />
            <Route path="/word-counter" element={<WordCounterPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
