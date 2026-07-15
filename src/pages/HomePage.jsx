import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../lib/seoHelper';

const tools = [
  { id: 'plagiarism-checker',    name: 'Plagiarism Checker',    icon: '🔍', desc: 'Scan billions of sources and detect copied content instantly.' },
  { id: 'ai-content-detector',   name: 'AI Content Detector',   icon: '🤖', desc: 'Identify ChatGPT and AI-generated text with high accuracy.' },
  { id: 'grammar-checker',       name: 'Grammar Checker',       icon: '✏️', desc: 'Fix grammatical errors and improve your writing quality effortlessly.' },
  { id: 'paraphrasing-tool',     name: 'Paraphrasing Tool',     icon: '🔄', desc: 'Rephrase any text while preserving its original meaning perfectly.' },
  { id: 'sentence-rewriter',     name: 'Sentence Rewriter',     icon: '📝', desc: 'Rewrite sentences for better clarity and improved structure.' },
  { id: 'word-counter',          name: 'Word Counter',          icon: '🔢', desc: 'Instantly count words, characters, sentences, and reading time.' },
  { id: 'index-checker',         name: 'Index Checker',         icon: '🔍', desc: 'Check instantly whether a URL is indexed by Google Search.' },
  { id: 'youtube-subscribe-link-generator', name: 'YouTube Subscribe Link', icon: '▶️', desc: 'Generate an auto-subscribe link for your YouTube channel.' },
];

const blogs = [
  { id: 'guide-to-avoiding-plagiarism', title: 'A Complete Guide to Avoiding Plagiarism', desc: 'Learn the best practices to keep your content original and plagiarism-free.', date: 'May 10, 2024' },
  { id: 'how-ai-detectors-work', title: 'How Do AI Detectors Work?', desc: 'Discover the technology behind AI content detection and how accurate it really is.', date: 'May 12, 2024' },
  { id: 'top-grammar-mistakes', title: 'Top Grammar Mistakes to Avoid', desc: 'Improve your writing instantly by avoiding these common grammatical errors.', date: 'May 14, 2024' },
  { id: 'art-of-paraphrasing', title: 'The Art of Paraphrasing', desc: 'How to rewrite content effectively without losing its original meaning or context.', date: 'May 16, 2024' },
  { id: 'why-word-count-matters', title: 'Why Word Count Matters', desc: 'Understanding the ideal length for blog posts, essays, and social media.', date: 'May 18, 2024' },
];

export default function HomePage() {
  return (
    <div className="gp-container py-12">
      <SEO
        title="Quetext – Free Plagiarism Checker & Writing Tools"
        description="Quetext.in offers the best free plagiarism checker, AI content detector, grammar checker, paraphrasing tool, and word counter – all optimized for speed."
        keywords="quetext, free plagiarism checker, AI content detector, grammar checker, paraphrasing tool, word counter"
        url="/"
      />

      {/* Hero */}
      <section className="text-center mb-16 mt-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Write Smarter, Not Harder</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Plagiarism checker, AI detector, grammar fixer, paraphraser — everything you need to create original, high-quality content.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/plagiarism-checker" className="gp-btn">
            Check Plagiarism Free
          </Link>
          <Link to="/tools" className="inline-block px-5 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-50 transition">
            View All Tools
          </Link>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            to={`/${tool.id}`}
            className="gp-card flex flex-col items-center text-center transition-transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-4">
              {tool.icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
            <span className="text-sm text-blue-600 font-medium mt-auto">Use Tool &rarr;</span>
          </Link>
        ))}
      </section>

      {/* Blog Section */}
      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Latest From Our Blog</h2>
          <p className="text-gray-600">Writing tips, guides, and tutorials to enhance your skills.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map(blog => (
            <Link key={blog.id} to={`/blog/${blog.id}`} className="gp-card flex flex-col transition-transform hover:-translate-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{blog.date}</span>
              <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
              <p className="text-gray-600 text-sm mt-auto">{blog.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
