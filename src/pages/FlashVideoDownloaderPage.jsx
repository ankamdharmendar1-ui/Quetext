import React, { useMemo, useState } from 'react';
import SEO from '../lib/seoHelper';
import RelatedTools from '../components/RelatedTools';

const supportedExtensions = ['mp4', 'webm', 'mov', 'm4v', 'flv'];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Free Flash Video Downloader',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    description: 'Free direct video downloader for public MP4, WEBM, MOV, M4V, and FLV file URLs.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What video formats does this downloader support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It supports direct file URLs ending in MP4, WEBM, MOV, M4V, or FLV.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does a video link sometimes not download?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Some websites block direct downloads, require login, or stream video in protected segments. This tool only works with direct public file URLs.',
        },
      },
    ],
  },
];

function isVideoUrl(value) {
  try {
    const url = new URL(value.trim());
    return supportedExtensions.some((extension) => url.pathname.toLowerCase().endsWith(`.${extension}`));
  } catch {
    return false;
  }
}

const FlashVideoDownloaderPage = () => {
  const [input, setInput] = useState('');

  const links = useMemo(() => {
    const seen = new Set();
    return input
      .split(/\n+/)
      .map((line) => line.trim())
      .filter((line) => {
        if (!isVideoUrl(line) || seen.has(line)) return false;
        seen.add(line);
        return true;
      });
  }, [input]);

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Free Flash Video Downloader - FLV, MP4, WEBM Direct Links"
        description="Free Flash video downloader for direct FLV, MP4, WEBM, MOV, and M4V links. Paste public video file URLs and create preview/download links."
        keywords="free flash video downloader, flv downloader, flash video downloader, mp4 video downloader, direct video downloader, webm downloader"
        url="/free-flash-video-downloader"
        customSchema={schema}
      />

      <h1 className="text-3xl font-bold mb-3">Free Flash Video Downloader</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Paste direct video file URLs ending in MP4, WEBM, MOV, M4V, or FLV. The tool creates download links
        for public files you own or have permission to save.
      </p>

      <section className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
        <label htmlFor="video-file-links" className="block text-sm font-bold text-gray-700 mb-2">
          Direct video file URLs
        </label>
        <textarea
          id="video-file-links"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={9}
          placeholder="https://example.com/video.mp4"
          className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <p className="mt-3 text-sm text-gray-500">
          Browser downloads depend on the source website allowing direct file access.
        </p>
      </section>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <article key={link} className="bg-white border border-gray-100 rounded-xl shadow-sm p-5">
            <div className="text-sm font-semibold text-gray-500 mb-1">Video {index + 1}</div>
            <div className="font-mono text-sm text-gray-700 break-all mb-4">{link}</div>
            <div className="flex gap-3">
              <a href={link} target="_blank" rel="noreferrer" className="flex-1 text-center border border-gray-200 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50">
                Preview
              </a>
              <a href={link} download className="flex-1 text-center bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700">
                Download
              </a>
            </div>
          </article>
        ))}
      </section>

      {links.length === 0 && (
        <div className="mt-8 bg-gray-50 border border-gray-100 rounded-xl p-6 text-gray-600">
          Valid direct video file links will appear here.
        </div>
      )}

      <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article className="lg:col-span-2 bg-white border border-gray-100 rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Download direct Flash and video file links</h2>
          <p className="text-gray-700 mb-4">
            Older Flash video downloaders focused on FLV files, but many modern sites now use MP4,
            WEBM, MOV, and M4V. This tool checks for direct video file URLs and creates clean preview
            and download actions without installing desktop software.
          </p>
          <p className="text-gray-700">
            It works best when you already have a direct file link that ends with a supported extension.
            It will not extract protected streams, private videos, or segmented media that requires a
            site-specific player.
          </p>
        </article>

        <aside className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3 text-indigo-950">Supported formats</h2>
          <ul className="space-y-2 text-indigo-900">
            <li>FLV and F4V-style direct files</li>
            <li>MP4 and M4V files</li>
            <li>WEBM videos</li>
            <li>MOV video files</li>
          </ul>
        </aside>
      </section>

      <RelatedTools currentPath="/free-flash-video-downloader" />
    </div>
  );
};

export default FlashVideoDownloaderPage;
