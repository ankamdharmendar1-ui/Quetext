import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');

// Define SEO metadata for specific routes here
const SITE_URL = 'https://www.quetext.in';

const routes = {
  '/youtube-handle-generator': {
    title: 'Free YouTube Handle Generator - Free AI Tool | Quetext.in',
    description: 'Generate unique and catchy YouTube handles for your channel with our free YouTube Handle Generator. Find the perfect @name for your brand.',
    keywords: 'youtube handle generator, youtube name generator, youtube username generator, youtube handle ideas, youtube channel name generator, ai youtube handle generator'
  },
  '/rent-split-calculator': {
    title: 'Rent Split Calculator With Rooms - Split Rent by Room Size | Quetext.in',
    description: 'Free rent split calculator with rooms. Split rent by room size, utilities, private-room adjustments, and roommates in seconds.',
    keywords: 'rent split calculator with rooms, split rent by room size, roommate rent calculator, room rent split calculator, fair rent calculator'
  },
  '/bulk-youtube-video-downloader': {
    title: 'Bulk YouTube Video Downloader - Clean & Export Video Links | Quetext.in',
    description: 'Free bulk YouTube video downloader utility. Validate, clean, deduplicate, and export YouTube video links for videos you own or can archive.',
    keywords: 'bulk youtube video downloader, youtube bulk downloader, youtube video link organizer, youtube url extractor, batch youtube downloader'
  },
  '/bulk-thumbnail-downloader': {
    title: 'Bulk YouTube Thumbnail Downloader - HD & Max Resolution | Quetext.in',
    description: 'Free bulk YouTube thumbnail downloader. Paste video URLs, Shorts links, or IDs and download HD, max resolution, medium, or default thumbnails.',
    keywords: 'bulk youtube thumbnail downloader, youtube thumbnail downloader, download youtube thumbnail, youtube thumbnail grabber, maxresdefault downloader'
  },
  '/free-flash-video-downloader': {
    title: 'Free Flash Video Downloader - FLV, MP4, WEBM Direct Links | Quetext.in',
    description: 'Free Flash video downloader for direct FLV, MP4, WEBM, MOV, and M4V links. Paste public video file URLs and create preview/download links.',
    keywords: 'free flash video downloader, flv downloader, flash video downloader, mp4 video downloader, direct video downloader, webm downloader'
  },

  // ── Blog: Core tools ──────────────────────────────────────────────────────
  '/blog': {
    title: 'Blog | Writing Tips, SEO & Career Guides – Quetext.in',
    description: 'Explore expert articles on plagiarism, AI writing tools, SEO strategies, and career development on the Quetext.in blog.',
    keywords: 'quetext blog, writing tips, plagiarism guide, AI tools, SEO tips'
  },
  '/blog/guide-to-avoiding-plagiarism': {
    title: 'Complete Guide to Avoiding Plagiarism | Quetext.in',
    description: 'Learn how to avoid plagiarism in essays, research papers, and academic writing with practical strategies and free tools.',
    keywords: 'how to avoid plagiarism, plagiarism guide, plagiarism checker, academic integrity'
  },
  '/blog/how-ai-detectors-work': {
    title: 'How AI Content Detectors Work – Explained | Quetext.in',
    description: 'Understand the science behind AI content detectors and how tools like Quetext identify AI-generated text accurately.',
    keywords: 'how AI detectors work, AI content detection, GPT detector, AI writing detection'
  },
  '/blog/top-grammar-mistakes': {
    title: 'Top Grammar Mistakes & How to Fix Them | Quetext.in',
    description: 'Discover the most common grammar mistakes in English writing and learn how to fix them with practical examples and tips.',
    keywords: 'common grammar mistakes, grammar tips, improve English writing, grammar checker'
  },
  '/blog/art-of-paraphrasing': {
    title: 'The Art of Paraphrasing – A Complete Guide | Quetext.in',
    description: 'Master the skill of paraphrasing with our step-by-step guide. Learn to rewrite content clearly while preserving meaning.',
    keywords: 'paraphrasing guide, how to paraphrase, paraphrasing tool, rewrite content'
  },
  '/blog/why-word-count-matters': {
    title: 'Why Word Count Matters in Writing | Quetext.in',
    description: 'Discover why word count is crucial for SEO, academic submissions, and professional writing — and how to hit your targets.',
    keywords: 'why word count matters, word count SEO, writing word count, content length guide'
  },

  // ── Blog: SEO articles ────────────────────────────────────────────────────
  '/blog/content-calendar': {
    title: 'How to Build a Content Calendar That Works | Quetext.in',
    description: 'Create a content calendar that keeps your blog consistent and growing. Step-by-step planning guide for bloggers and marketers.',
    keywords: 'content calendar, blog planning, content strategy, editorial calendar'
  },
  '/blog/keyword-research': {
    title: 'Keyword Research Guide for Beginners 2026 | Quetext.in',
    description: 'Learn how to find the right keywords for your content with our beginner-friendly keyword research guide for 2026.',
    keywords: 'keyword research guide, SEO keywords, find keywords, keyword strategy 2026'
  },
  '/blog/meta-description': {
    title: 'How to Write the Perfect Meta Description | Quetext.in',
    description: 'Learn how to write compelling meta descriptions that boost click-through rates and improve your search engine rankings.',
    keywords: 'meta description guide, how to write meta description, SEO meta tags, CTR optimization'
  },
  '/blog/e-e-a-t-guide': {
    title: 'Google E-E-A-T Guide: What It Is & How to Improve It | Quetext.in',
    description: 'Understand Google\'s E-E-A-T (Experience, Expertise, Authoritativeness, Trust) and learn how to improve your site\'s rankings.',
    keywords: 'google EEAT guide, E-E-A-T SEO, expertise authority trust, google ranking factors'
  },

  // ── Blog: New ranking articles ────────────────────────────────────────────
  '/blog/fifa-world-cup-2026-guide': {
    title: 'FIFA World Cup 2026: Complete Fan Guide | Quetext.in',
    description: 'Everything you need to know about the FIFA World Cup 2026 — schedule, host cities, teams, tickets, and predictions.',
    keywords: 'FIFA World Cup 2026, world cup guide, world cup schedule, world cup teams 2026'
  },
  '/blog/ai-tools-for-students-2026': {
    title: 'Best AI Tools for Students in 2026 | Quetext.in',
    description: 'Discover the best AI tools that help students study smarter, write better, and save time in 2026.',
    keywords: 'AI tools for students 2026, best AI for students, student productivity tools, AI study tools'
  },
  '/blog/side-hustles-that-pay-daily-india-2026': {
    title: 'Side Hustles That Pay Daily in India 2026 | Quetext.in',
    description: 'Looking to earn extra income every day? Here are the best side hustles in India for 2026 that actually pay daily.',
    keywords: 'side hustles India 2026, daily income side hustle, earn money daily India, online side hustles India'
  },
  '/blog/how-to-save-money-college-student-india': {
    title: 'How to Save Money as a College Student in India 2026 | Quetext.in',
    description: 'Broke at the end of every month? This is the real, practical guide to saving money as a college student in India in 2026 — no fluff, just strategies that actually work.',
    keywords: 'save money college student India, student budget India 2026, how to save money student India, college student finance tips India'
  },
  '/blog/cold-plunge-benefits-beginners': {
    title: 'Cold Plunge Benefits for Beginners: What to Expect | Quetext.in',
    description: 'New to cold plunging? Discover the science-backed benefits of cold water immersion and how to safely start as a beginner.',
    keywords: 'cold plunge benefits, cold water immersion beginners, cold plunge guide, ice bath benefits'
  },
  '/blog/ai-tools-for-email-marketing': {
    title: 'Best AI Tools for Email Marketing in 2026 | Quetext.in',
    description: 'Boost your email open rates and conversions with the best AI-powered email marketing tools available in 2026.',
    keywords: 'AI email marketing tools, best email marketing AI, AI for newsletters, email marketing 2026'
  },
  '/blog/home-office-setup-for-adhd': {
    title: 'The Best Home Office Setup for ADHD Productivity | Quetext.in',
    description: 'Design a home office that helps you focus with ADHD. Practical setup tips, tools, and strategies that actually work.',
    keywords: 'home office ADHD, ADHD productivity setup, work from home ADHD tips, ADHD workspace'
  },
  '/blog/magnesium-glycinate-vs-citrate': {
    title: 'Magnesium Glycinate vs Citrate: Which Is Better? | Quetext.in',
    description: 'Compare magnesium glycinate and magnesium citrate — absorption, benefits, side effects, and which form is right for you.',
    keywords: 'magnesium glycinate vs citrate, best magnesium supplement, magnesium comparison, magnesium benefits'
  },
  '/blog/pickleball-rules-for-beginners': {
    title: 'Pickleball Rules for Beginners: Complete 2026 Guide | Quetext.in',
    description: 'New to pickleball? Learn all the basic rules, scoring, and tips you need to start playing pickleball confidently in 2026.',
    keywords: 'pickleball rules beginners, how to play pickleball, pickleball guide 2026, pickleball scoring'
  },
  '/blog/credit-card-mistakes-beginners-india': {
    title: 'Credit Card Mistakes Beginners Make in India | Quetext.in',
    description: 'Avoid the most common credit card mistakes that first-time users in India make — and learn what to do instead.',
    keywords: 'credit card mistakes India, credit card tips beginners India, first credit card India, avoid credit card debt India'
  },
  '/blog/ai-tools-for-local-businesses-india': {
    title: 'Best AI Tools for Local Businesses in India 2026 | Quetext.in',
    description: 'Grow your local business in India with the best AI tools for marketing, customer service, and operations in 2026.',
    keywords: 'AI tools local business India, AI for small business India, best AI tools India 2026, local business growth AI'
  },
  '/blog/how-to-convert-youtube-to-mp3-safely': {
    title: 'How to Convert YouTube to MP3 Safely in 2026 | Quetext.in',
    description: 'A practical guide to converting YouTube videos to MP3 — quality settings, legal boundaries, malware risks, and how to pick a fast browser-based converter.',
    keywords: 'youtube to mp3, convert youtube to mp3 safely, youtube mp3 converter 2026, yt2mp3 guide, download youtube audio'
  },
};

if (!fs.existsSync(indexPath)) {
  console.error('Error: index.html not found in dist. Run this script after vite build.');
  process.exit(1);
}

const defaultHtml = fs.readFileSync(indexPath, 'utf-8');

for (const [route, seo] of Object.entries(routes)) {
  const routeDir = path.join(distDir, route.replace(/^\//, ''));
  
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  const routeHtmlPath = path.join(routeDir, 'index.html');
  
  const canonicalUrl = `${SITE_URL}${route}`;
  const isBlogPost = route.startsWith('/blog/') && route !== '/blog';

  // Replace the default title
  let modifiedHtml = defaultHtml.replace(
    /<title>.*?<\/title>/,
    `<title>${seo.title}</title>`
  );

  // Replace meta description
  modifiedHtml = modifiedHtml.replace(
    /<meta name="description" content=".*?"\s*\/?>/,
    `<meta name="description" content="${seo.description}" />`
  );

  // Replace meta keywords
  if (seo.keywords) {
    modifiedHtml = modifiedHtml.replace(
      /<meta name="keywords" content=".*?"\s*\/?>/,
      `<meta name="keywords" content="${seo.keywords}" />`
    );
  }

  // Replace canonical link
  modifiedHtml = modifiedHtml.replace(
    /<link rel="canonical" href=".*?"\s*\/?>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Replace OG tags
  modifiedHtml = modifiedHtml.replace(
    /<meta property="og:title" content=".*?"\s*\/?>/,
    `<meta property="og:title" content="${seo.title}" />`
  );
  modifiedHtml = modifiedHtml.replace(
    /<meta property="og:description" content=".*?"\s*\/?>/,
    `<meta property="og:description" content="${seo.description}" />`
  );
  modifiedHtml = modifiedHtml.replace(
    /<meta property="og:url" content=".*?"\s*\/?>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );
  if (isBlogPost) {
    modifiedHtml = modifiedHtml.replace(
      /<meta property="og:type" content=".*?"\s*\/?>/,
      `<meta property="og:type" content="article" />`
    );
  }

  // Replace Twitter card tags
  modifiedHtml = modifiedHtml.replace(
    /<meta name="twitter:title" content=".*?"\s*\/?>/,
    `<meta name="twitter:title" content="${seo.title}" />`
  );
  modifiedHtml = modifiedHtml.replace(
    /<meta name="twitter:description" content=".*?"\s*\/?>/,
    `<meta name="twitter:description" content="${seo.description}" />`
  );

  fs.writeFileSync(routeHtmlPath, modifiedHtml);
  console.log(`✓ SEO prerendered: ${route}`);
}

console.log('SEO Prerendering complete!');
