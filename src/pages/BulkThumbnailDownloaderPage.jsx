import React, { useMemo, useState } from 'react';
import SEO from '../lib/seoHelper';
import RelatedTools from '../components/RelatedTools';

function extractVideoId(input) {
  const value = input.trim();
  if (!value) return '';

  const directId = value.match(/^[a-zA-Z0-9_-]{11}$/);
  if (directId) return value;

  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?[^#]*v=([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = value.match(pattern);
    if (match) return match[1];
  }

  return '';
}

const thumbnailSizes = [
  { label: 'Max Resolution', key: 'maxresdefault.jpg' },
  { label: 'HD', key: 'hqdefault.jpg' },
  { label: 'Medium', key: 'mqdefault.jpg' },
  { label: 'Default', key: 'default.jpg' },
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Bulk YouTube Thumbnail Downloader',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    description: 'Free bulk YouTube thumbnail downloader for video URLs, Shorts URLs, embed links, and YouTube video IDs.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can I download YouTube thumbnails in bulk?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Paste one YouTube video URL or video ID per line and the tool creates thumbnail previews and download links for each valid video.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which YouTube thumbnail sizes are supported?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The tool supports max resolution, HD, medium, and default YouTube thumbnail image sizes.',
        },
      },
    ],
  },
];

const BulkThumbnailDownloaderPage = () => {
  const [input, setInput] = useState('');
  const [size, setSize] = useState(thumbnailSizes[0].key);

  const videos = useMemo(() => {
    const seen = new Set();
    return input
      .split(/\n+/)
      .map((line) => ({ source: line.trim(), id: extractVideoId(line) }))
      .filter((video) => {
        if (!video.id || seen.has(video.id)) return false;
        seen.add(video.id);
        return true;
      });
  }, [input]);

  const makeUrl = (id) => `https://img.youtube.com/vi/${id}/${size}`;

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Bulk YouTube Thumbnail Downloader - HD & Max Resolution"
        description="Free bulk YouTube thumbnail downloader. Paste video URLs, Shorts links, or IDs and download HD, max resolution, medium, or default thumbnails."
        keywords="bulk youtube thumbnail downloader, youtube thumbnail downloader, download youtube thumbnail, youtube thumbnail grabber, maxresdefault downloader"
        url="/bulk-thumbnail-downloader"
        customSchema={schema}
      />

      <h1 className="text-3xl font-bold mb-3">Bulk YouTube Thumbnail Downloader</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Paste YouTube video links or IDs, choose a thumbnail size, then open or download each image.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 bg-white border border-gray-100 rounded-xl shadow-sm p-6">
          <label htmlFor="thumbnail-links" className="block text-sm font-bold text-gray-700 mb-2">
            YouTube URLs or video IDs
          </label>
          <textarea
            id="thumbnail-links"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            rows={10}
            placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </section>

        <aside className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Options</h2>
          <select
            value={size}
            onChange={(event) => setSize(event.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {thumbnailSizes.map((item) => (
              <option key={item.key} value={item.key}>{item.label}</option>
            ))}
          </select>
          <div className="mt-5 rounded-lg bg-indigo-50 p-4 text-indigo-900">
            <div className="text-2xl font-bold">{videos.length}</div>
            <div className="text-sm">valid thumbnails found</div>
          </div>
        </aside>
      </div>

      {videos.length > 0 && (
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <article key={video.id} className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
              <img src={makeUrl(video.id)} alt={`YouTube thumbnail ${video.id}`} className="w-full aspect-video object-cover bg-gray-100" />
              <div className="p-4">
                <div className="font-mono text-sm text-gray-600 mb-3 break-all">{video.id}</div>
                <div className="flex gap-3">
                  <a href={makeUrl(video.id)} target="_blank" rel="noreferrer" className="flex-1 text-center bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700">
                    Open
                  </a>
                  <a href={makeUrl(video.id)} download={`${video.id}-${size}`} className="flex-1 text-center border border-gray-200 font-semibold px-4 py-2 rounded-lg hover:bg-gray-50">
                    Download
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}

      <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article className="lg:col-span-2 bg-white border border-gray-100 rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Download YouTube thumbnails from many videos</h2>
          <p className="text-gray-700 mb-4">
            This bulk YouTube thumbnail downloader is built for creators, bloggers, editors, and SEO
            teams who need thumbnail images quickly. It accepts normal YouTube watch URLs, Shorts URLs,
            embed links, youtu.be links, and raw 11-character video IDs.
          </p>
          <p className="text-gray-700">
            Choose max resolution for the largest available image, HD for reliable previews, or smaller
            sizes when you need lightweight images for drafts, spreadsheets, or content planning.
          </p>
        </article>

        <aside className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3 text-indigo-950">Supported inputs</h2>
          <ul className="space-y-2 text-indigo-900">
            <li>YouTube watch URLs</li>
            <li>YouTube Shorts URLs</li>
            <li>youtu.be short links</li>
            <li>Embed URLs and video IDs</li>
          </ul>
        </aside>
      </section>

      <RelatedTools currentPath="/bulk-thumbnail-downloader" />
    </div>
  );
};

export default BulkThumbnailDownloaderPage;
