import React from 'react';
import SEO from '../lib/seoHelper';
import { Link } from 'react-router-dom';

export default function TestBlogPage() {
  console.log('TestBlogPage component loaded');
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <SEO
        title="Test Blog Page"
        description="A simple test page to verify lazy loading and routing works."
        keywords="test, blog, lazy loading"
        url="/blog/test-page"
      />
      <div className="mb-8">
        <Link to="/blog" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">← Back to Blog</Link>
      </div>
      <article className="prose prose-indigo prose-lg max-w-none">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Test Blog Page</h1>
        <p>This is a simple test page to verify that lazy loading and routing are functioning correctly.</p>
      </article>
    </div>
  );
}
