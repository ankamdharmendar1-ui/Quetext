// scripts/addSeoProps.js
// This script adds `datePublished` and `image` props to every <SEO /> component
// in blog page JSX files under src/pages.

const fs = require('fs');
const path = require('path');

const pagesDir = path.resolve(__dirname, '..', 'src', 'pages');
const targetFiles = fs.readdirSync(pagesDir).filter(f => f.startsWith('Blog') && f.endsWith('.jsx'));

const datePublished = '2026-06-30';
const imageUrl = 'https://www.quetext.in/assets/og-image.jpg';

targetFiles.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  // Regex to find the opening <SEO .../> tag (self‑closing)
  const seoRegex = /<SEO([\s\S]*?)\/>(?=\s*<)/; // looks ahead to next tag to avoid matching others
  const match = content.match(seoRegex);
  if (match) {
    let props = match[1].trim();
    // If datePublished or image already present, skip (prevent duplicates)
    if (!/datePublished=/.test(props)) {
      props += `\n      datePublished=\"${datePublished}\"`;
    }
    if (!/image=/.test(props)) {
      props += `\n      image=\"${imageUrl}\"`;
    }
    const newTag = `<SEO${props ? '\n' + props : ''}\n    />`;
    content = content.replace(seoRegex, newTag);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.warn(`No <SEO/> tag found in ${file}`);
  }
});

console.log('All blog pages processed.');
