// scripts/fixSeoImport.cjs
// This script updates the SEO import path in all page components.
const fs = require('fs');
const path = require('path');

const pagesDir = path.resolve(__dirname, '..', 'src', 'pages');
const pageFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

pageFiles.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const oldImport = "import SEO from '../components/SEO';";
  const newImport = "import SEO from '../lib/seoHelper';";
  if (content.includes(oldImport)) {
    content = content.replace(oldImport, newImport);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
console.log('All SEO imports corrected.');
