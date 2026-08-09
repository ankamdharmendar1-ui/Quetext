import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));

const BlogPlagiarismPage = lazy(() => import('./pages/BlogPlagiarismPage'));
const BlogAIDetectorPage = lazy(() => import('./pages/BlogAIDetectorPage'));
const BlogGrammarPage = lazy(() => import('./pages/BlogGrammarPage'));
const BlogParaphrasingPage = lazy(() => import('./pages/BlogParaphrasingPage'));
const BlogWordCountPage = lazy(() => import('./pages/BlogWordCountPage'));
const BlogContentCalendarPage = lazy(() => import('./pages/BlogContentCalendarPage'));
const BlogKeywordResearchPage = lazy(() => import('./pages/BlogKeywordResearchPage'));
const BlogMetaDescriptionPage = lazy(() => import('./pages/BlogMetaDescriptionPage'));
const BlogEEATPage = lazy(() => import('./pages/BlogEEATPage'));
const BlogWorldCup2026Page = lazy(() => import('./pages/BlogWorldCup2026Page'));
const BlogAIToolsStudentsPage = lazy(() => import('./pages/BlogAIToolsStudentsPage'));
const BlogSideHustleIndiaPage = lazy(() => import('./pages/BlogSideHustleIndiaPage'));
const BlogSaveMoneyCollegeIndiaPage = lazy(() => import('./pages/BlogSaveMoneyCollegeIndiaPage'));
const BlogColdPlungeBeginnersPage = lazy(() => import('./pages/BlogColdPlungeBeginnersPage'));
const BlogAIEmailMarketingPage = lazy(() => import('./pages/BlogAIEmailMarketingPage'));
const BlogHomeOfficeADHDPage = lazy(() => import('./pages/BlogHomeOfficeADHDPage'));
const BlogMagnesiumGlycVsCitPage = lazy(() => import('./pages/BlogMagnesiumGlycVsCitPage'));
const BlogPickleballBeginnersPage = lazy(() => import('./pages/BlogPickleballBeginnersPage'));
const BlogCreditCardMistakesIndiaPage = lazy(() => import('./pages/BlogCreditCardMistakesIndiaPage'));
const BlogAILocalBusinessIndiaPage = lazy(() => import('./pages/BlogAILocalBusinessIndiaPage'));
const BlogYoutubeToMp3GuidePage = lazy(() => import('./pages/BlogYoutubeToMp3GuidePage'));

function AppContent() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <div className="flex-grow">
        <Suspense fallback={<div className="flex items-center justify-center h-64 text-gray-400">Loading...</div>}>
          <Routes>
            <Route path="/" element={<BlogIndexPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/blog/guide-to-avoiding-plagiarism" element={<BlogPlagiarismPage />} />
            <Route path="/blog/how-ai-detectors-work" element={<BlogAIDetectorPage />} />
            <Route path="/blog/top-grammar-mistakes" element={<BlogGrammarPage />} />
            <Route path="/blog/art-of-paraphrasing" element={<BlogParaphrasingPage />} />
            <Route path="/blog/why-word-count-matters" element={<BlogWordCountPage />} />
            <Route path="/blog/content-calendar" element={<BlogContentCalendarPage />} />
            <Route path="/blog/keyword-research" element={<BlogKeywordResearchPage />} />
            <Route path="/blog/meta-description" element={<BlogMetaDescriptionPage />} />
            <Route path="/blog/e-e-a-t-guide" element={<BlogEEATPage />} />
            <Route path="/blog/fifa-world-cup-2026-guide" element={<BlogWorldCup2026Page />} />
            <Route path="/blog/ai-tools-for-students-2026" element={<BlogAIToolsStudentsPage />} />
            <Route path="/blog/side-hustles-that-pay-daily-india-2026" element={<BlogSideHustleIndiaPage />} />
            <Route path="/blog/how-to-save-money-college-student-india" element={<BlogSaveMoneyCollegeIndiaPage />} />
            <Route path="/blog/cold-plunge-benefits-beginners" element={<BlogColdPlungeBeginnersPage />} />
            <Route path="/blog/ai-tools-for-email-marketing" element={<BlogAIEmailMarketingPage />} />
            <Route path="/blog/home-office-setup-for-adhd" element={<BlogHomeOfficeADHDPage />} />
            <Route path="/blog/magnesium-glycinate-vs-citrate" element={<BlogMagnesiumGlycVsCitPage />} />
            <Route path="/blog/pickleball-rules-for-beginners" element={<BlogPickleballBeginnersPage />} />
            <Route path="/blog/credit-card-mistakes-beginners-india" element={<BlogCreditCardMistakesIndiaPage />} />
            <Route path="/blog/ai-tools-for-local-businesses-india" element={<BlogAILocalBusinessIndiaPage />} />
            <Route path="/blog/how-to-convert-youtube-to-mp3-safely" element={<BlogYoutubeToMp3GuidePage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
