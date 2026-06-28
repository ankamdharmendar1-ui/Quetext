import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.resolve(__dirname, '../src/pages');

const pagesToModify = [
  { file: 'PlagiarismPage.jsx', path: '/plagiarism-checker' },
  { file: 'AIDetectionPage.jsx', path: '/ai-content-detector' },
  { file: 'ParaphrasePage.jsx', path: '/paraphrasing-tool' },
  { file: 'GrammarPage.jsx', path: '/grammar-checker' },
  { file: 'SentenceRewriterPage.jsx', path: '/sentence-rewriter' },
  { file: 'WordCounterPage.jsx', path: '/word-counter' },
  { file: 'YoutubeHandleGeneratorPage.jsx', path: '/youtube-handle-generator' },
  { file: 'YoutubeSubscribeGeneratorPage.jsx', path: '/youtube-subscribe-link-generator' },
  { file: 'IndexCheckerPage.jsx', path: '/index-checker' },
  { file: 'RobloxRpNamesPage.jsx', path: '/roblox-rp-names' }
];

for (const { file, path: routePath } of pagesToModify) {
  const filePath = path.join(pagesDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Not found: ${file}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  if (content.includes('RelatedTools')) {
    console.log(`Skipping ${file}, already contains RelatedTools`);
    continue;
  }

  // 1. Add import statement near the top
  const lastImportIndex = content.lastIndexOf('import ');
  if (lastImportIndex !== -1) {
    const endOfLastImport = content.indexOf('\n', lastImportIndex);
    content = content.slice(0, endOfLastImport) + 
              `\nimport RelatedTools from '../components/RelatedTools';` + 
              content.slice(endOfLastImport);
  } else {
    content = `import RelatedTools from '../components/RelatedTools';\n` + content;
  }

  // 2. Add component before the final closing div of the return statement
  // We search backwards for '</div>'
  const lastDivIndex = content.lastIndexOf('</div>');
  if (lastDivIndex !== -1) {
    content = content.slice(0, lastDivIndex) + 
              `\n      <RelatedTools currentPath="${routePath}" />\n    ` + 
              content.slice(lastDivIndex);
  }

  fs.writeFileSync(filePath, content);
  console.log(`Successfully added interlinking to ${file}`);
}
