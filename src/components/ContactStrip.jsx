import React from 'react';
import { SUPPORT_EMAIL } from '../lib/siteConfig';

export default function ContactStrip() {
  return (
    <section className="bg-indigo-600 py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <span className="text-white font-semibold text-sm sm:text-base">
          Have a question or need help?
        </span>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold text-sm sm:text-base px-5 py-2 rounded-full hover:bg-indigo-50 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {SUPPORT_EMAIL}
        </a>
      </div>
    </section>
  );
}
