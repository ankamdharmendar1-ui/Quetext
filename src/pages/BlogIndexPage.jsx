import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../lib/seoHelper';

const allPosts = [
  {
    slug: '/blog/fifa-world-cup-2026-guide',
    title: 'FIFA World Cup 2026: The Complete Fan Guide Nobody Else Is Writing',
    excerpt: "From dark horse teams to host city travel tips, this is everything you actually need to know about the 2026 World Cup — stuff sports networks skip.",
    category: 'Sports',
    categoryColor: 'bg-green-100 text-green-700',
    date: 'June 30, 2026',
    readTime: '6 min read',
    emoji: '⚽',
  },
  {
    slug: '/blog/ai-tools-for-students-2026',
    title: 'Best AI Tools for Student Productivity in 2026 (That Actually Work)',
    excerpt: "Drowning in assignments? Here are the AI tools students are actually using to save hours every week without risking academic integrity.",
    category: 'AI Tools',
    categoryColor: 'bg-purple-100 text-purple-700',
    date: 'June 30, 2026',
    readTime: '7 min read',
    emoji: '🎓',
  },
  {
    slug: '/blog/side-hustles-that-pay-daily-india-2026',
    title: 'Best Side Hustles That Pay Daily in India (2026 Edition)',
    excerpt: "Most side hustle guides tell you to wait months for results. These are the ones that put money in your account this week.",
    category: 'Finance',
    categoryColor: 'bg-yellow-100 text-yellow-700',
    date: 'June 30, 2026',
    readTime: '7 min read',
    emoji: '💰',
  },
  {
    slug: '/blog/how-to-save-money-college-student-india',
    title: 'How to Actually Save Money as a College Student in India (2026)',
    excerpt: "Broke at the end of every month? No fluff, no generic advice — just practical strategies that work on a real student budget.",
    category: 'Finance',
    categoryColor: 'bg-yellow-100 text-yellow-700',
    date: 'June 30, 2026',
    readTime: '6 min read',
    emoji: '🎒',
  },
  {
    slug: '/blog/cold-plunge-benefits-beginners',
    title: 'Cold Plunge Benefits for Beginners: What Actually Happens to Your Body',
    excerpt: "Cold plunging is everywhere. But what does it actually do? Here is the science-backed, honest guide before you take the plunge.",
    category: 'Health',
    categoryColor: 'bg-cyan-100 text-cyan-700',
    date: 'June 30, 2026',
    readTime: '7 min read',
    emoji: '🧊',
  },
  {
    slug: '/blog/ai-tools-for-email-marketing',
    title: "AI Tools for Email Marketing Beginners: What to Use and What to Skip",
    excerpt: "Email still delivers the highest ROI of any channel. Here are the AI tools that help beginners write better emails without sounding like a robot.",
    category: 'AI Tools',
    categoryColor: 'bg-purple-100 text-purple-700',
    date: 'June 30, 2026',
    readTime: '7 min read',
    emoji: '📧',
  },
  {
    slug: '/blog/home-office-setup-for-adhd',
    title: 'How to Set Up a Home Office for ADHD: What Actually Works',
    excerpt: "Generic productivity advice doesn't cut it for ADHD brains. Here is how to design your workspace to work with your brain, not against it.",
    category: 'Productivity',
    categoryColor: 'bg-amber-100 text-amber-700',
    date: 'June 30, 2026',
    readTime: '7 min read',
    emoji: '🧠',
  },
  {
    slug: '/blog/magnesium-glycinate-vs-citrate',
    title: 'Magnesium Glycinate vs Citrate: Which One Should You Actually Take?',
    excerpt: "Clear, no-jargon breakdown of the two most popular magnesium forms — and which one is right for your specific health goal.",
    category: 'Health',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    date: 'June 30, 2026',
    readTime: '6 min read',
    emoji: '💊',
  },
  {
    slug: '/blog/pickleball-rules-for-beginners',
    title: "Pickleball Rules for Complete Beginners: Everything You Need to Start Playing",
    excerpt: "Never played pickleball? This is the clearest beginner guide to the world's fastest growing sport. Learn the basics and get on the court fast.",
    category: 'Sports',
    categoryColor: 'bg-orange-100 text-orange-700',
    date: 'June 30, 2026',
    readTime: '6 min read',
    emoji: '🏓',
  },
  {
    slug: '/blog/credit-card-mistakes-beginners-india',
    title: 'Credit Card Mistakes Beginners Make in India (And How to Avoid Every One)',
    excerpt: "Getting your first credit card? These are the costly mistakes that trap Indian beginners — and exactly how to avoid each one.",
    category: 'Finance',
    categoryColor: 'bg-red-100 text-red-700',
    date: 'June 30, 2026',
    readTime: '7 min read',
    emoji: '💳',
  },
  {
    slug: '/blog/ai-tools-for-local-businesses-india',
    title: "AI Tools for Local Businesses in India: What's Actually Worth Using in 2026",
    excerpt: "AI is not just for startups. Here are the tools Indian SMBs are using to automate, market smarter, and compete with bigger players.",
    category: 'AI Tools',
    categoryColor: 'bg-indigo-100 text-indigo-700',
    date: 'June 30, 2026',
    readTime: '7 min read',
    emoji: '🏪',
  },
  // Existing blog posts
  {
    slug: '/blog/guide-to-avoiding-plagiarism',
    title: "The Complete Guide to Avoiding Plagiarism in Your Writing",
    excerpt: "Everything you need to know about plagiarism — what counts, what doesn't, and how to make sure your writing is always original.",
    category: 'Writing',
    categoryColor: 'bg-blue-100 text-blue-700',
    date: 'May 23, 2026',
    readTime: '5 min read',
    emoji: '📝',
  },
  {
    slug: '/blog/how-ai-detectors-work',
    title: "How AI Detectors Work: The Technology Behind the Tool",
    excerpt: "AI content detectors seem like magic — but there is real science behind them. Here is how they identify AI-written text.",
    category: 'AI Tools',
    categoryColor: 'bg-purple-100 text-purple-700',
    date: 'May 23, 2026',
    readTime: '5 min read',
    emoji: '🤖',
  },
  {
    slug: '/blog/top-grammar-mistakes',
    title: "10 Cringeworthy Grammar Mistakes That Ruin Your Professional Vibe",
    excerpt: "These are the grammar errors that make readers cringe — and exactly how to fix each one before you hit send.",
    category: 'Writing',
    categoryColor: 'bg-blue-100 text-blue-700',
    date: 'May 23, 2026',
    readTime: '5 min read',
    emoji: '✏️',
  },
  {
    slug: '/blog/art-of-paraphrasing',
    title: "The Art of Paraphrasing: How to Rewrite Without Plagiarizing",
    excerpt: "Paraphrasing is a skill. Here is the difference between genuine rewriting and changing a few words — and how to do it properly.",
    category: 'Writing',
    categoryColor: 'bg-blue-100 text-blue-700',
    date: 'May 23, 2026',
    readTime: '5 min read',
    emoji: '🔄',
  },
  {
    slug: '/blog/why-word-count-matters',
    title: "Why Word Count Matters More Than You Think",
    excerpt: "Word count affects SEO, readability, and credibility. Here is why it matters and how to hit the right length for every type of content.",
    category: 'Writing',
    categoryColor: 'bg-blue-100 text-blue-700',
    date: 'May 23, 2026',
    readTime: '5 min read',
    emoji: '📊',
  },
];

const categories = ['All', 'AI Tools', 'Finance', 'Health', 'Sports', 'Productivity', 'Writing'];

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? allPosts
    : allPosts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO
        title="Blog — Writing, AI, Finance & Productivity Tips | Quetext"
        description="Read expert articles on writing better, using AI tools effectively, managing personal finance, and boosting productivity. Fresh insights updated regularly on Quetext Blog."
        keywords="quetext blog, writing tips, AI tools, plagiarism, grammar, productivity, personal finance India, health wellness"
        url="/blog"
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
            Fresh Articles — Updated June 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
            The Quetext <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Blog</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Practical guides on writing, AI tools, finance, health, and productivity.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-16 z-30 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 py-14">
        <p className="text-gray-500 text-sm mb-8">{filtered.length} article{filtered.length !== 1 ? 's' : ''} {activeCategory !== 'All' ? `in "${activeCategory}"` : 'total'}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(post => (
            <Link
              key={post.slug}
              to={post.slug}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-indigo-600 transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                  <span>{post.date}</span>
                  <span className="text-indigo-600 font-semibold group-hover:underline">Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 px-4 mt-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to write better content?</h2>
          <p className="text-indigo-100 mb-8">Use our free tools to check plagiarism, fix grammar, and detect AI content — all in one place.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/plagiarism-checker" className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition">
              Plagiarism Checker
            </Link>
            <Link to="/grammar-checker" className="bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-400 transition border border-white/20">
              Grammar Checker
            </Link>
            <Link to="/ai-content-detector" className="bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-400 transition border border-white/20">
              AI Detector
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
