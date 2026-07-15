import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_NAME, SUPPORT_EMAIL } from '../lib/siteConfig';

const toolLinks = [
  { to: '/plagiarism-checker', label: 'Plagiarism Checker' },
  { to: '/ai-content-detector', label: 'AI Content Detector' },
  { to: '/grammar-checker', label: 'Grammar Checker' },
  { to: '/paraphrasing-tool', label: 'Paraphrasing Tool' },
  { to: '/sentence-rewriter', label: 'Sentence Rewriter' },
  { to: '/word-counter', label: 'Word Counter' },
  { to: '/youtube-handle-generator', label: 'YouTube Handle Generator' },
];

const legalLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
  { to: '/disclaimer', label: 'Disclaimer' },
  { to: '/cookie-policy', label: 'Cookie Policy' },
];

export default function Footer() {
  return (
    <footer className="gp-footer">
      <div className="gp-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="gp-footer-widget">
            <h3>{SITE_NAME}</h3>
            <p className="mb-4">
              Free online writing tools for students, bloggers, and professionals — plagiarism checking,
              AI detection, grammar, and more. Supported by Google AdSense.
            </p>
            <p className="text-sm">
              Contact for any query or deal
              <br />
              Email:{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`}>
                {SUPPORT_EMAIL}
              </a>
            </p>
          </div>

          <div className="gp-footer-widget">
            <h3>Writing Tools</h3>
            <ul className="space-y-2">
              {toolLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/tools" className="hover:text-white transition-colors">
                  All Tools
                </Link>
              </li>
            </ul>
          </div>

          <div className="gp-footer-widget">
            <h3>Legal &amp; Company</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
