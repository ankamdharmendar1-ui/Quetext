import React from 'react';
import { Link } from 'react-router-dom';
import { toolSeoContent } from '../content/seo/toolContent';

/**
 * Renders 500+ word on-page SEO content for tool pages.
 * Content is keyed by route path (e.g. "/plagiarism-checker").
 */
const SeoContentSection = ({ path, className = '' }) => {
  const content = toolSeoContent[path];
  if (!content) return null;

  const renderInlineLinks = (text) => {
    const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
    return parts.map((part, i) => {
      const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (match) {
        const [, label, href] = match;
        if (href.startsWith('/')) {
          return (
            <Link key={i} to={href} className="text-blue-600 hover:underline">
              {label}
            </Link>
          );
        }
        return (
          <a key={i} href={href} className="text-blue-600 hover:underline">
            {label}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className={`mt-16 max-w-4xl mx-auto ${className}`}>
      {content.sections.map((section, idx) => (
        <section key={idx} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">{section.title}</h2>
          {section.paragraphs.map((para, pIdx) => (
            <p key={pIdx} className="text-gray-700 mb-4 leading-relaxed">
              {renderInlineLinks(para)}
            </p>
          ))}
          {section.list && (
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              {section.list.map((item, lIdx) => (
                <li key={lIdx}>{renderInlineLinks(item)}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {content.faqs?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{renderInlineLinks(faq.answer)}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SeoContentSection;
