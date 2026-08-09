import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SITE_NAME } from '../lib/siteConfig';
import { CONSENT_KEY, notifyConsentChange } from '../lib/adConsent';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) setIsVisible(true);
  }, []);

  const saveConsent = (value) => {
    localStorage.setItem(CONSENT_KEY, value);
    notifyConsentChange();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 text-white p-3 md:p-4 z-50 shadow-2xl border-t border-gray-700/50" role="dialog" aria-label="Cookie consent">
      <div className="container mx-auto px-2 md:px-4 max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
        <p className="text-xs md:text-sm text-gray-300 leading-relaxed md:leading-normal">
          {SITE_NAME} uses cookies to improve your experience, analyze traffic, and show relevant ads through{' '}
          <strong className="text-white">Google AdSense</strong>. By clicking &quot;Accept&quot;, you consent to our use of cookies as described in our{' '}
          <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300 hover:underline transition">Privacy Policy</Link> and{' '}
          <Link to="/cookie-policy" className="text-blue-400 hover:text-blue-300 hover:underline transition">Cookie Policy</Link>.
        </p>
        <div className="flex flex-row w-full md:w-auto gap-2 shrink-0">
          <button
            type="button"
            onClick={() => saveConsent('accepted')}
            className="flex-1 md:flex-initial px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-xs md:text-sm transition-all whitespace-nowrap text-center shadow-lg shadow-blue-600/25"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={() => saveConsent('essential-only')}
            className="flex-1 md:flex-initial px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium rounded-lg text-xs md:text-sm transition-all whitespace-nowrap text-center border border-gray-700/50"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
