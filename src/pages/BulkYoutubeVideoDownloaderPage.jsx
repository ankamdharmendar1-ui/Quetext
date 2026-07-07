import React, { useMemo, useState } from 'react';
import SEO from '../lib/seoHelper';
import RelatedTools from '../components/RelatedTools';

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Bulk YouTube Video Downloader',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    description: 'Free browser tool to clean, validate, and organize YouTube video links in bulk for videos you own or have permission to save.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does this tool download YouTube videos directly?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. This browser tool validates and organizes bulk YouTube video links. It does not bypass YouTube restrictions or download protected video streams.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should I use a bulk YouTube video downloader?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use it to prepare clean link lists for your own videos, public-domain videos, or videos you have explicit permission to archive.',
        },
      },
    ],
  },
];

function extractVideoId(input) {
  const value = input.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(value)) return value;

  const match = value.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : '';
}

const BulkYoutubeVideoDownloaderPage = () => {
  const [input, setInput] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const videos = useMemo(() => {
    const seen = new Set();
    return input
      .split(/\n+/)
      .map((line) => {
        const id = extractVideoId(line);
        return id ? { id, url: `https://www.youtube.com/watch?v=${id}` } : null;
      })
      .filter((video) => {
        if (!video || seen.has(video.id)) return false;
        seen.add(video.id);
        return true;
      });
  }, [input]);

  const listText = videos.map((video) => video.url).join('\n');

  const copyLinks = async () => {
    await navigator.clipboard.writeText(listText);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Bulk YouTube Video Downloader - Clean & Export Video Links"
        description="Free bulk YouTube video downloader utility. Validate, clean, deduplicate, and export YouTube video links for videos you own or can archive."
        keywords="bulk youtube video downloader, youtube bulk downloader, youtube video link organizer, youtube url extractor, batch youtube downloader"
        url="/bulk-youtube-video-downloader"
        customSchema={schema}
      />

      <h1 className="text-3xl font-bold mb-3">Bulk YouTube Video Downloader</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Paste YouTube links to clean, validate, and export a bulk list. This browser tool does not bypass
        platform restrictions; use it only for videos you own or have permission to download.
      </p>

      <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
        <label htmlFor="youtube-links" className="block text-sm font-bold text-gray-700 mb-2">
          YouTube video URLs
        </label>
        <textarea
          id="youtube-links"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={10}
          placeholder="Paste one YouTube URL per line"
          className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label className="mt-5 flex items-start gap-3 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(event) => setConfirmed(event.target.checked)}
            className="mt-1"
          />
          <span>I confirm I own these videos or have permission to download or archive them.</span>
        </label>
      </div>

      <section className="mt-8 bg-white border border-gray-100 rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-xl font-bold">Validated Videos</h2>
            <p className="text-gray-500 text-sm">{videos.length} valid YouTube links found</p>
          </div>
          <button
            type="button"
            disabled={!confirmed || videos.length === 0}
            onClick={copyLinks}
            className="bg-indigo-600 disabled:bg-gray-300 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Copy Bulk List
          </button>
        </div>

        <div className="space-y-3">
          {videos.map((video, index) => (
            <div key={video.id} className="flex flex-col md:flex-row md:items-center justify-between gap-3 border border-gray-100 rounded-lg p-4">
              <div>
                <div className="font-semibold">Video {index + 1}</div>
                <div className="font-mono text-sm text-gray-600 break-all">{video.url}</div>
              </div>
              <a href={video.url} target="_blank" rel="noreferrer" className="text-center border border-gray-200 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50">
                Open
              </a>
            </div>
          ))}
          {videos.length === 0 && <p className="text-gray-500">Your validated video links will appear here.</p>}
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article className="lg:col-span-2 bg-white border border-gray-100 rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Bulk YouTube video link organizer</h2>
          <p className="text-gray-700 mb-4">
            Many competing YouTube downloader pages focus on desktop apps, conversion formats, and playlist
            downloads. This page is intentionally lighter: it helps you clean a batch of YouTube URLs,
            remove duplicates, normalize Shorts and youtu.be links, and copy a ready-to-use list.
          </p>
          <p className="text-gray-700">
            For compliance, this tool does not break platform protections or download restricted media.
            It is best for creators managing their own uploads, teams preparing approved archive lists,
            and editors who need a clean set of video URLs before using an authorized workflow.
          </p>
        </article>

        <aside className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3 text-indigo-950">What it handles</h2>
          <ul className="space-y-2 text-indigo-900">
            <li>Bulk pasted YouTube URLs</li>
            <li>Shorts and embed links</li>
            <li>Duplicate video removal</li>
            <li>Copyable clean URL export</li>
          </ul>
        </aside>
      </section>

      <RelatedTools currentPath="/bulk-youtube-video-downloader" />
    </div>
  );
};

export default BulkYoutubeVideoDownloaderPage;
