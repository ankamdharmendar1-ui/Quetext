import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');

// Define SEO metadata for specific routes here
const routes = {
  '/youtube-handle-generator': {
    title: 'free YouTube Handle Generator-Free AI Tool',
    description: 'Generate unique and catchy YouTube handles for your channel with our free YouTube Handle Generator. Find the perfect @name for your brand.',
    keywords: 'youtube handle generator, youtube name generator, youtube username generator, youtube handle ideas, youtube channel name generator, ai youtube handle generator'
  },
  // You can easily add more routes here to fix their SEO too!
  // '/plagiarism-checker': { title: '...', description: '...' }
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
  
  // Replace the default title
  let modifiedHtml = defaultHtml.replace(
    /<title>.*?<\/title>/, 
    `<title>${seo.title}</title>`
  );

  // Replace description
  modifiedHtml = modifiedHtml.replace(
    /<meta name="description" content=".*?"\s*\/>/,
    `<meta name="description" content="${seo.description}" />`
  );

  // Replace keywords if they exist in the new seo object
  if (seo.keywords) {
    modifiedHtml = modifiedHtml.replace(
      /<meta name="keywords" content=".*?"\s*\/>/,
      `<meta name="keywords" content="${seo.keywords}" />`
    );
  }

  // Update OG tags (optional but good for social sharing)
  modifiedHtml = modifiedHtml.replace(
    /<meta property="og:title" content=".*?"\s*\/>/,
    `<meta property="og:title" content="${seo.title}" />`
  );
  modifiedHtml = modifiedHtml.replace(
    /<meta property="og:description" content=".*?"\s*\/>/,
    `<meta property="og:description" content="${seo.description}" />`
  );

  fs.writeFileSync(routeHtmlPath, modifiedHtml);
  console.log(`Generated SEO static page for: ${route}`);
}

console.log('SEO Prerendering complete!');
