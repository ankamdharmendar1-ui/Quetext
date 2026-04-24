import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Plagiarism Checker</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          The most accurate plagiarism checker that finds copied content and helps prevent academic dishonesty
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/plagiarism"
            className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Check for Plagiarism
          </Link>
          <button className="px-8 py-4 bg-white text-blue-600 font-medium border border-blue-600 rounded-lg hover:bg-blue-50 transition duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Plagiarism Checker?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3">Deep Search Technology</h3>
              <p className="text-gray-600">Scans billions of web pages and academic papers to find potential matches.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Analysis</h3>
              <p className="text-gray-600">Advanced algorithms detect paraphrased content and subtle similarities.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3">Detailed Reports</h3>
              <p className="text-gray-600">Get comprehensive reports with highlighted matches and source links.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-2">Paste Text</h3>
              <p className="text-gray-600">Copy and paste your content into our checker</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-2">Scan Document</h3>
              <p className="text-gray-600">Our system scans billions of sources</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-2">Get Results</h3>
              <p className="text-gray-600">Receive a detailed plagiarism report</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-2">Make Corrections</h3>
              <p className="text-gray-600">Fix issues and ensure originality</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Check Your Work?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-10">
          Join thousands of students, teachers, and professionals who trust our plagiarism checker
        </p>
        <Link 
          to="/plagiarism"
          className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition duration-300"
        >
          Start Free Check
        </Link>
      </section>
    </div>
  );
}
