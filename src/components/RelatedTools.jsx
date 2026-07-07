import React from 'react';
import { Link } from 'react-router-dom';

const ALL_TOOLS = [
  { 
    id: 'plagiarism', 
    name: 'Free Plagiarism Checker', 
    path: '/plagiarism-checker', 
    icon: '📝', 
    description: 'Check your text for plagiarism instantly and ensure originality.' 
  },
  { 
    id: 'ai-detector', 
    name: 'AI Content Detector', 
    path: '/ai-content-detector', 
    icon: '🤖', 
    description: 'Detect AI-generated content with high accuracy using advanced models.' 
  },
  { 
    id: 'paraphrase', 
    name: 'Paraphrasing Tool', 
    path: '/paraphrasing-tool', 
    icon: '🔄', 
    description: 'Rewrite sentences and paragraphs easily for better flow and uniqueness.' 
  },
  { 
    id: 'grammar', 
    name: 'Grammar Checker', 
    path: '/grammar-checker', 
    icon: '✅', 
    description: 'Find and fix grammar, spelling, and punctuation mistakes instantly.' 
  },
  { 
    id: 'sentence-rewriter', 
    name: 'Sentence Rewriter', 
    path: '/sentence-rewriter', 
    icon: '✍️', 
    description: 'Rephrase individual sentences for better clarity and engagement.' 
  },
  { 
    id: 'word-counter', 
    name: 'Word Counter', 
    path: '/word-counter', 
    icon: '📊', 
    description: 'Count words, characters, and reading time in real-time.' 
  },
  { 
    id: 'youtube-handle', 
    name: 'YouTube Handle Generator', 
    path: '/youtube-handle-generator', 
    icon: '🎥', 
    description: 'Find the perfect @name and handle for your YouTube channel.' 
  },
  { 
    id: 'youtube-subscribe', 
    name: 'YouTube Subscribe Link', 
    path: '/youtube-subscribe-link-generator', 
    icon: '🔗', 
    description: 'Create auto-subscribe links to grow your YouTube channel faster.' 
  },
  { 
    id: 'index-checker', 
    name: 'Google Index Checker', 
    path: '/index-checker', 
    icon: '🔍', 
    description: 'Check if your URLs are indexed by Google search engines.' 
  },
  { 
    id: 'roblox', 
    name: 'Roblox RP Names', 
    path: '/roblox-rp-names', 
    icon: '🎮', 
    description: 'Generate cool and unique names for your Roblox roleplays.' 
  },
  {
    id: 'rent-split',
    name: 'Rent Split Calculator',
    path: '/rent-split-calculator',
    icon: '🏠',
    description: 'Split rent fairly by room size, utilities, and roommates.'
  },
  {
    id: 'bulk-youtube-video',
    name: 'Bulk YouTube Video Downloader',
    path: '/bulk-youtube-video-downloader',
    icon: '📥',
    description: 'Validate and organize YouTube video links in bulk.'
  },
  {
    id: 'bulk-thumbnail',
    name: 'Bulk Thumbnail Downloader',
    path: '/bulk-thumbnail-downloader',
    icon: '🖼️',
    description: 'Download thumbnails from many YouTube videos at once.'
  },
  {
    id: 'flash-video',
    name: 'Free Flash Video Downloader',
    path: '/free-flash-video-downloader',
    icon: '🎞️',
    description: 'Create download links for direct video file URLs.'
  }
];

const RelatedTools = ({ currentPath }) => {
  // Filter out the current tool and randomly select 3
  const availableTools = ALL_TOOLS.filter(tool => tool.path !== currentPath);
  
  // Deterministic shuffle based on path so it doesn't flicker on hydration
  const seed = currentPath.length;
  const sortedTools = [...availableTools].sort((a, b) => {
      const valA = (a.name.length * seed) % 10;
      const valB = (b.name.length * seed) % 10;
      return valA - valB;
  });

  const selectedTools = sortedTools.slice(0, 3);

  return (
    <div className="mt-16 mb-8 border-t border-gray-200 pt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Check Out Our Other Free Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {selectedTools.map((tool) => (
          <Link 
            key={tool.id} 
            to={tool.path}
            className="group block bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 hover:border-indigo-100 transition-all duration-300"
          >
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
              {tool.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
              {tool.name}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedTools;
