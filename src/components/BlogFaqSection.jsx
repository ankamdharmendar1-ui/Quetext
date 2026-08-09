import React from 'react';
import { Link } from 'react-router-dom';
import { blogFaqContent } from '../content/seo/blogFaqs';

const BlogFaqSection = ({ slug }) => {
  const content = blogFaqContent[slug];
  if (!content) return null;

  const renderLinks = (text) => {
    const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
    return parts.map((part, i) => {
      const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (match) {
        const [, label, href] = match;
        return (
          <Link key={i} to={href} className="text-indigo-600 hover:underline">
            {label}
          </Link>
        );
      }
      return part;
    });
  };

  return (
    <section className="mt-12 border-t border-gray-200 pt-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{content.title || 'Frequently Asked Questions'}</h2>
      <div className="space-y-6 not-prose">
        {content.faqs.map((faq, idx) => (
          <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
            <p className="text-gray-700 leading-relaxed">{renderLinks(faq.answer)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogFaqSection;
