import { buildFaqSchema } from '../../lib/faqSchema';

const app = (name, description, url) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name,
  operatingSystem: 'Any',
  applicationCategory: 'UtilitiesApplication',
  description,
  url: `https://www.quetext.in${url}`,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
});

export const toolSeoContent = {
  '/plagiarism-checker': {
    sections: [
      {
        title: 'What Is a Plagiarism Checker and Why Does It Matter?',
        paragraphs: [
          'A plagiarism checker compares your writing against billions of web pages, academic papers, and published documents to find overlapping text. Whether you are a student submitting an essay, a blogger publishing articles, or a business creating marketing copy, originality protects your reputation and helps you rank on Google.',
          'Search engines penalize duplicate content. Universities use plagiarism detection to enforce academic integrity. Employers expect clean, authentic writing in reports and proposals. Our free plagiarism checker on Quetext.in gives you instant feedback so you can fix issues before submission.',
        ],
      },
      {
        title: 'How to Use Our Free Plagiarism Checker',
        paragraphs: [
          'Using our tool takes less than a minute. Paste your text into the editor, click Check Plagiarism, and review the similarity score along with highlighted matches. Each match links to the original source so you can add proper citations or rewrite flagged sections.',
          'For best results, check your work after paraphrasing and before final submission. Pair this tool with our [Grammar Checker](/grammar-checker) for polished prose and our [Paraphrasing Tool](/paraphrasing-tool) if you need to rewrite matched passages while keeping the original meaning intact.',
        ],
        list: [
          'Paste text directly — no account required for basic checks',
          'Review the plagiarism percentage and highlighted matches',
          'Visit source links to verify context and add citations',
          'Rewrite or cite flagged sections, then re-scan for confirmation',
        ],
      },
      {
        title: 'Who Should Use a Plagiarism Checker?',
        paragraphs: [
          'Students use plagiarism checkers before turning in assignments, theses, and research papers. Content marketers scan blog drafts to avoid accidental duplication from competitor articles. Journalists verify that quotes and passages are properly attributed. SEO professionals ensure every landing page is unique enough to index and rank.',
          'Even careful writers accidentally reuse phrases from sources they read hours earlier. A quick scan catches those overlaps before they become problems. If you work with AI-assisted drafts, also run your text through our [AI Content Detector](/ai-content-detector) to confirm authenticity.',
        ],
      },
      {
        title: 'Tips for Passing Plagiarism Checks',
        paragraphs: [
          'Always cite direct quotes with the correct format (APA, MLA, or Chicago). Paraphrase thoroughly — changing a few words is not enough. Use your own analysis and examples rather than copying structure from source material.',
          'Keep a running bibliography as you research so citations are accurate. After rewriting, use our [Word Counter](/word-counter) to confirm you meet assignment length requirements, then run one final plagiarism scan before submitting.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is this plagiarism checker really free?',
        answer: 'Yes. Quetext.in offers a free plagiarism checker with no signup required for basic scans. Premium options are available for higher word limits and advanced reporting.',
      },
      {
        question: 'How do I interpret the plagiarism score?',
        answer: 'The score shows the percentage of your text that matches external sources. Many institutions accept scores under 10–15%, but you should always aim for maximum originality. Review each highlighted match individually — some may be common phrases or properly cited quotes.',
      },
      {
        question: 'Does my text get saved to a database?',
        answer: 'We respect your privacy. Your submitted text is not added to a public database, so future scans by other users will not flag your work as copied.',
      },
      {
        question: 'Can it detect paraphrased plagiarism?',
        answer: 'Our checker identifies text that closely matches published sources, including lightly paraphrased content. For deeper rewriting, use our Paraphrasing Tool and then re-scan.',
      },
      {
        question: 'Should I check AI-generated content for plagiarism too?',
        answer: 'Yes. AI tools can reproduce phrases from their training data. Run AI drafts through both our plagiarism checker and AI content detector before publishing.',
      },
    ],
  },

  '/ai-content-detector': {
    sections: [
      {
        title: 'What Is an AI Content Detector?',
        paragraphs: [
          'An AI content detector analyzes writing patterns to estimate whether text was created by a human or generated by tools like ChatGPT, GPT-4, Claude, or Gemini. As AI writing becomes mainstream, educators, publishers, and search engines increasingly care about content authenticity.',
          'Our free AI content detector on Quetext.in examines perplexity, burstiness, and statistical patterns in your text. Human writing tends to vary in sentence length and word choice; AI output often follows predictable rhythms. The result is a probability score that helps you assess authenticity.',
        ],
      },
      {
        title: 'How AI Detection Works',
        paragraphs: [
          'Modern detectors use machine learning models trained on millions of human-written and AI-generated samples. They look for telltale signs: uniform sentence structures, overuse of transition phrases, lack of personal anecdotes, and vocabulary that feels polished but generic.',
          'Paste your text, click Detect AI Content, and review the probability score plus a detailed report. Scores above 70% suggest strong AI signals; lower scores indicate likely human authorship. No detector is 100% accurate — use results as guidance, not absolute proof.',
        ],
      },
      {
        title: 'Why Detect AI-Generated Text?',
        paragraphs: [
          'Schools enforce policies on AI-assisted assignments. Google\'s helpful content guidelines favor original, people-first writing. Brands lose trust when AI copy sounds robotic or factually unreliable. Journalists and editors need to verify that submitted work meets editorial standards.',
          'If your human-written text triggers a false positive, try rewriting flagged sections with our [Paraphrasing Tool](/paraphrasing-tool). Adding personal examples, varied sentence lengths, and conversational phrasing usually reduces AI probability scores.',
        ],
        list: [
          'Verify student essays and research submissions',
          'Audit marketing copy before publishing',
          'Check freelance deliverables for authenticity',
          'Ensure blog content meets Google E-E-A-T standards',
        ],
      },
      {
        title: 'Best Practices for AI Detection',
        paragraphs: [
          'Test longer passages (at least 150 words) for more reliable results. Short snippets may produce inconsistent scores. Combine AI detection with a [Plagiarism Checker](/plagiarism-checker) scan since AI text can also contain copied phrases from training data.',
          'If you legitimately use AI as a drafting assistant, always edit heavily, add your own voice, and verify facts independently. Run the final version through our [Grammar Checker](/grammar-checker) for a polished, natural finish.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can it detect text from GPT-4 and ChatGPT?',
        answer: 'Yes. Our detector is trained on outputs from major AI models including GPT-4, ChatGPT, Claude, and Gemini. Newer models may occasionally evade detection, so treat scores as estimates.',
      },
      {
        question: 'Are AI detection results 100% accurate?',
        answer: 'No AI detector is perfect. Technical or highly formal human writing can trigger false positives, while heavily edited AI text may score as human. Use results alongside context and other checks.',
      },
      {
        question: 'Is there a word limit for analysis?',
        answer: 'The free version supports generous word counts for typical essays and articles. For very long documents, check length with our Word Counter and scan in sections if needed.',
      },
      {
        question: 'Why should I use a free AI detector?',
        answer: 'Authenticity matters for SEO rankings, academic integrity, and reader trust. A quick scan takes seconds and helps you publish content you can stand behind.',
      },
      {
        question: 'How do I make AI-assisted text sound more human?',
        answer: 'Add personal stories, vary sentence length, use contractions where appropriate, and replace generic phrases with specific details. Then re-scan with this detector to confirm improvement.',
      },
    ],
  },

  '/grammar-checker': {
    sections: [
      {
        title: 'Free Online Grammar Checker for Clear, Professional Writing',
        paragraphs: [
          'Good grammar builds credibility. Whether you are emailing a client, submitting a college essay, or publishing a blog post, grammar mistakes undermine your message. Our free grammar checker catches errors that basic spell-checkers miss — from subject-verb agreement to comma splices and awkward phrasing.',
          'Quetext.in\'s grammar checker uses advanced language processing to scan your text in real time. It highlights issues, explains why they matter, and suggests corrections so you learn as you edit. The tool works for American and British English conventions.',
        ],
      },
      {
        title: 'Common Grammar Mistakes This Tool Catches',
        paragraphs: [
          'Subject-verb disagreement ("The team are" vs. "The team is"), misplaced modifiers, run-on sentences, and incorrect apostrophe usage are among the most frequent errors. Our checker also flags wordy phrases, passive voice overuse, and punctuation problems that make writing harder to read.',
          'Non-native English speakers benefit especially from instant feedback. Instead of guessing whether a sentence sounds natural, you get clear suggestions backed by grammar rules. Read our guide on [top grammar mistakes](/blog/top-grammar-mistakes) for deeper explanations.',
        ],
        list: [
          'Spelling and typo detection beyond basic autocorrect',
          'Punctuation fixes for commas, semicolons, and apostrophes',
          'Style suggestions for clarity and conciseness',
          'Real-time scanning as you paste or type text',
        ],
      },
      {
        title: 'How to Use the Grammar Checker',
        paragraphs: [
          'Paste your text into the editor and click Check Grammar. Review each suggestion — you decide whether to accept or ignore it. For academic work, run a final [Plagiarism Checker](/plagiarism-checker) scan after grammar fixes. For marketing copy, pair with our [AI Content Detector](/ai-content-detector) if the text was AI-assisted.',
          'Use our [Word Counter](/word-counter) alongside grammar checks to hit essay length requirements. For sentences that still sound awkward after corrections, try our [Paraphrasing Tool](/paraphrasing-tool) to restructure them completely.',
        ],
      },
      {
        title: 'Who Benefits from Grammar Checking?',
        paragraphs: [
          'Students polishing essays and applications get cleaner submissions. Professionals writing reports, proposals, and emails project competence. Bloggers and SEO writers improve readability scores, which correlates with better engagement and rankings. ESL learners build confidence with every corrected draft.',
          'Even experienced writers miss errors in their own work because the brain auto-corrects while reading. A fresh grammar scan catches what your eyes skip over.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can it detect spelling errors too?',
        answer: 'Yes. The grammar checker catches both spelling mistakes and grammar issues in a single scan. For heavily rewritten text, also run our Paraphrasing Tool to improve flow.',
      },
      {
        question: 'Is the grammar checker free to use?',
        answer: 'Yes, basic grammar checking is completely free on Quetext.in. No account is required for standard scans.',
      },
      {
        question: 'How do I use the suggestions?',
        answer: 'Each suggestion includes an explanation and a recommended fix. Review them manually and edit your text accordingly — you stay in control of the final wording.',
      },
      {
        question: 'Does it work for non-native English speakers?',
        answer: 'Absolutely. The tool is designed to help ESL writers sound natural and professional. It explains errors clearly so you improve over time.',
      },
      {
        question: 'Should I grammar-check before or after paraphrasing?',
        answer: 'Check grammar after paraphrasing or rewriting. That way you catch errors introduced during editing and ensure the final draft is polished.',
      },
    ],
  },

  '/paraphrasing-tool': {
    sections: [
      {
        title: 'What Is a Paraphrasing Tool?',
        paragraphs: [
          'A paraphrasing tool rewrites text while preserving the original meaning. Also called a sentence rewriter or content rephraser, it helps students, bloggers, and professionals express ideas more clearly without copying source material word for word.',
          'Unlike simple synonym spinners, Quetext.in\'s paraphrasing tool understands context. It restructures sentences, adjusts tone, and produces natural-sounding output. Choose from Standard, Formal, Casual, Creative, or Academic styles to match your audience.',
        ],
      },
      {
        title: 'How to Use Our Free Paraphrasing Tool',
        paragraphs: [
          'Paste your text into the editor, select a writing style, and click Paraphrase Text. The AI rewrites your content in seconds. Review the output, make manual tweaks if needed, then run a [Plagiarism Checker](/plagiarism-checker) scan to confirm originality.',
          'For single sentences, start with our [Sentence Rewriter](/sentence-rewriter) page and open the paraphrasing tool with your draft pre-loaded. Track length changes with the [Word Counter](/word-counter) if you have strict limits.',
        ],
        list: [
          'Paste source text into the original text box',
          'Choose a style: Standard, Formal, Casual, Creative, or Academic',
          'Click Paraphrase and review the rewritten output',
          'Edit manually, then verify with plagiarism and AI detection scans',
        ],
      },
      {
        title: 'Why Use an Online Paraphrasing Tool?',
        paragraphs: [
          'Paraphrasing helps you avoid plagiarism when citing research. It simplifies complex passages for broader audiences. It refreshes outdated blog content for SEO updates. It improves readability by removing redundancy and awkward phrasing.',
          'Academic writers use the Academic style for scholarly tone. Content marketers choose Creative or Casual for engaging blog posts. Always cite original sources even after paraphrasing — rewriting does not eliminate the need for attribution.',
        ],
      },
      {
        title: 'Paraphrasing vs. Plagiarism: What You Need to Know',
        paragraphs: [
          'Proper paraphrasing changes both words and sentence structure while crediting the original author. Patchwriting — swapping a few synonyms — still counts as plagiarism. Our tool restructures content fundamentally to help you create genuinely unique text.',
          'After paraphrasing, verify originality with our plagiarism checker and check that the output sounds human with our [AI Content Detector](/ai-content-detector). Polish grammar with our [Grammar Checker](/grammar-checker) before publishing.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is paraphrasing the same as plagiarism?',
        answer: 'No, when done correctly. True paraphrasing rewrites content in your own words and includes proper citations. Patchwriting or failing to cite sources is still plagiarism.',
      },
      {
        question: 'How many writing styles are available?',
        answer: 'Five styles: Standard, Formal, Casual, Creative, and Academic. Each adjusts tone and vocabulary to suit different contexts.',
      },
      {
        question: 'Is the paraphrased text unique?',
        answer: 'Yes, the tool generates substantially different sentence structures. Always verify with a plagiarism scan before submitting academic or professional work.',
      },
      {
        question: 'Can I use this for academic writing?',
        answer: 'Yes. Select the Academic style for scholarly tone. Remember to cite original sources and check your institution\'s policy on AI-assisted writing.',
      },
      {
        question: 'Will paraphrased text pass AI detection?',
        answer: 'Heavily edited paraphrased text generally scores lower on AI detectors. Review output manually and add personal voice for best results.',
      },
    ],
  },

  '/sentence-rewriter': {
    sections: [
      {
        title: 'Rewrite Sentences for Clarity and Originality',
        paragraphs: [
          'A sentence rewriter helps you improve individual sentences without rewriting entire documents. Whether a sentence feels clunky, repetitive, or too similar to a source, rephrasing it improves readability and reduces plagiarism risk.',
          'Quetext.in\'s sentence rewriter connects you to our AI-powered paraphrasing engine. Draft your sentence here, then open the full paraphrasing tool for complete rewrites in your preferred style.',
        ],
      },
      {
        title: 'When to Use a Sentence Rewriter',
        paragraphs: [
          'Use a sentence rewriter when one specific sentence sounds awkward but the rest of your paragraph is fine. It is ideal for tightening wordy sentences, changing tone from formal to casual, eliminating passive voice, and creating unique phrasing for SEO content.',
          'Students rewriting quoted material benefit from sentence-level tools because they can focus on one problematic passage at a time. Marketers A/B test headline and CTA variations by rewriting single sentences quickly.',
        ],
        list: [
          'Fix awkward or unclear individual sentences',
          'Reduce repetition in essays and articles',
          'Adjust tone for different audiences',
          'Create unique phrasing for meta descriptions and ad copy',
        ],
      },
      {
        title: 'How to Rewrite Sentences Effectively',
        paragraphs: [
          'Paste your sentence or short paragraph into the editor, then click through to the [Paraphrasing Tool](/paraphrasing-tool) for AI-powered rewrites. Compare the original and rewritten versions side by side. Choose the version that best preserves your meaning while sounding natural.',
          'After rewriting, run a [Plagiarism Checker](/plagiarism-checker) scan on the full document. Check grammar with our [Grammar Checker](/grammar-checker) and verify word count with the [Word Counter](/word-counter) if you have length constraints.',
        ],
      },
      {
        title: 'Sentence Rewriting for SEO and Content Marketing',
        paragraphs: [
          'Search engines reward unique content. Rewriting duplicate product descriptions, boilerplate paragraphs, and template text helps pages rank independently. Sentence-level rewriting is faster than rewriting entire articles when only sections overlap with competitors.',
          'Combine sentence rewriting with our [AI Content Detector](/ai-content-detector) to ensure rewritten text maintains a natural human voice — important for Google\'s helpful content guidelines.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is the sentence rewriter free?',
        answer: 'Yes. Quetext.in offers free writing tools including the sentence rewriter and full paraphrasing tool.',
      },
      {
        question: 'Will rewritten sentences pass plagiarism checks?',
        answer: 'Properly rewritten sentences with changed structure and vocabulary typically show lower similarity scores. Always scan the full document with our plagiarism checker before submitting.',
      },
      {
        question: 'Can I rewrite entire paragraphs?',
        answer: 'Yes. Paste a full paragraph and use the paraphrasing tool for comprehensive rewrites. This page is optimized for quick single-sentence drafts.',
      },
      {
        question: 'Does rewriting change the meaning of my text?',
        answer: 'Our AI aims to preserve original meaning while changing wording and structure. Always review output to confirm accuracy, especially for technical or legal content.',
      },
      {
        question: 'How is this different from the paraphrasing tool?',
        answer: 'This page is a lightweight entry point for sentence-level edits. The paraphrasing tool offers full paragraph rewriting with multiple style options.',
      },
    ],
  },

  '/word-counter': {
    sections: [
      {
        title: 'Free Word Counter for Essays, Blogs, and Social Media',
        paragraphs: [
          'A word counter calculates words, characters, sentences, paragraphs, and estimated reading time in real time. Meeting word limits is essential for academic assignments, SEO content, social media captions, and professional proposals.',
          'Quetext.in\'s free word counter updates instantly as you type or paste text. No signup, no uploads — just accurate counts in your browser. Read why word count matters for SEO in our [dedicated guide](/blog/why-word-count-matters).',
        ],
      },
      {
        title: 'What Our Word Counter Measures',
        paragraphs: [
          'Words: total word count using standard whitespace splitting. Characters: total characters including spaces. Characters without spaces: useful for platforms with strict character limits like Twitter/X. Sentences: split by punctuation marks. Paragraphs: separated by blank lines. Reading time: estimated at 200 words per minute for online content.',
          'These metrics help students hit essay requirements (e.g., "write 1,500 words"), bloggers optimize article length for SEO, and social media managers stay within platform limits.',
        ],
        list: [
          'Live word and character counts as you type',
          'Sentence and paragraph breakdowns',
          'Estimated reading time for audience planning',
          'Works entirely in your browser — text is not stored',
        ],
      },
      {
        title: 'Why Word Count Matters for SEO',
        paragraphs: [
          'Google tends to favor comprehensive content for competitive keywords, but quality beats quantity. Use word count to ensure your articles are thorough enough to answer user queries without padding with fluff. Most ranking blog posts fall between 1,200 and 2,500 words for informational queries.',
          'After hitting your target length, polish with our [Grammar Checker](/grammar-checker), verify originality with the [Plagiarism Checker](/plagiarism-checker), and check AI authenticity with our [AI Content Detector](/ai-content-detector).',
        ],
      },
      {
        title: 'Word Count Guidelines by Content Type',
        paragraphs: [
          'Academic essays: follow your instructor\'s exact requirements. Blog posts: 1,000–2,500 words for competitive SEO topics. Meta descriptions: 150–160 characters. Social captions: 125–150 words for Instagram, under 280 characters for Twitter/X. Email subject lines: 40–60 characters for mobile visibility.',
          'Use our word counter throughout the writing process — not just at the end — to pace your content and avoid last-minute padding or cutting.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How is reading time calculated?',
        answer: 'We estimate reading time at 200 words per minute, which is the average speed for online articles. Adjust mentally for technical or dense content.',
      },
      {
        question: 'Is my text stored on your servers?',
        answer: 'No. The word counter processes text locally in your browser session. Nothing is saved or transmitted.',
      },
      {
        question: 'Does it count hyphenated words as one word?',
        answer: 'Yes. Hyphenated words like "well-known" count as a single word, matching standard word processor behavior.',
      },
      {
        question: 'Can I use this for Twitter character limits?',
        answer: 'Yes. Check the character count (with or without spaces) to stay within platform limits.',
      },
      {
        question: 'What is the ideal word count for SEO blog posts?',
        answer: 'There is no universal ideal, but 1,200–2,500 words works well for competitive informational topics. Focus on fully answering the reader\'s question rather than hitting an arbitrary number.',
      },
    ],
  },

  '/index-checker': {
    sections: [
      {
        title: 'What Is a Google Index Checker?',
        paragraphs: [
          'An index checker verifies whether Google has crawled and indexed a specific URL. If a page is not indexed, it will not appear in search results — no matter how good the content is. This free tool opens a Google site: search for your URL so you can confirm indexing status instantly.',
          'SEO professionals, bloggers, and webmasters use index checkers daily to monitor new pages, troubleshoot ranking issues, and verify that Google can access their content after site migrations or redesigns.',
        ],
      },
      {
        title: 'How to Check If a Page Is Indexed on Google',
        paragraphs: [
          'Enter the full URL (including https://) into the tool and click Check Index. We open a Google search using the site: operator for your exact URL. If Google returns results showing your page, it is indexed. If Google shows "No results found," the page is not indexed yet.',
          'For broader site checks, search site:yourdomain.com in Google directly to see all indexed pages. Use Google Search Console for the most authoritative indexing data over time.',
        ],
        list: [
          'Enter the complete URL with https:// prefix',
          'Click Check Index to open the Google site: query',
          'Review results — indexed pages appear in the SERP',
          'Fix issues and request indexing via Search Console if needed',
        ],
      },
      {
        title: 'Why Is My Page Not Indexed?',
        paragraphs: [
          'New pages take time — Google may need days or weeks to crawl and index them. Common blockers include noindex meta tags, robots.txt disallow rules, duplicate or thin content, slow page speed, and missing internal links.',
          'Ensure your content is high quality and unique. Run it through our [Grammar Checker](/grammar-checker) and [Plagiarism Checker](/plagiarism-checker). Avoid AI-generated filler — use our [AI Content Detector](/ai-content-detector) to verify authenticity. Build internal links from already-indexed pages on your site.',
        ],
      },
      {
        title: 'Index Checking for SEO Strategy',
        paragraphs: [
          'After publishing a new blog post, check indexing within a week. If not indexed, submit the URL in Google Search Console and share the link on social media to attract crawlers. Monitor competitor pages with our tool to understand how quickly Google indexes content in your niche.',
          'Combine index checking with content quality tools on Quetext.in to ensure every indexed page delivers value to readers and meets search engine quality guidelines.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How does the Index Checker work?',
        answer: 'It performs a Google site:URL search and opens the results in a new tab. If your page appears, Google has indexed it.',
      },
      {
        question: 'Why is my page not indexed?',
        answer: 'Common reasons include the page being new, noindex tags, robots.txt blocks, duplicate content, or quality issues. Check Search Console for specific errors.',
      },
      {
        question: 'Is the Index Checker completely free?',
        answer: 'Yes. Check as many URLs as you need at no cost.',
      },
      {
        question: 'Can I check multiple URLs at once?',
        answer: 'Currently you check one URL at a time for precise results. For bulk checks, use Google Search Console\'s coverage report.',
      },
      {
        question: 'Does being indexed guarantee rankings?',
        answer: 'No. Indexing means Google knows your page exists. Rankings depend on content quality, backlinks, relevance, and hundreds of other factors.',
      },
    ],
  },

  '/youtube-subscribe-link-generator': {
    sections: [
      {
        title: 'Free YouTube Subscribe Link Generator',
        paragraphs: [
          'A YouTube subscribe link sends viewers directly to a subscription confirmation for your channel. Instead of hoping visitors find the subscribe button, you give them a one-click path to become a subscriber. This boosts conversion rates in video descriptions, social media bios, email signatures, and website CTAs.',
          'Quetext.in\'s free subscribe link generator creates the correct URL format instantly. Enter your channel ID or custom URL, copy the link, and paste it anywhere you promote your channel.',
        ],
      },
      {
        title: 'How to Create a YouTube Subscribe Link',
        paragraphs: [
          'Find your YouTube channel ID in YouTube Studio under Settings > Advanced settings, or use your custom handle URL. Paste it into the generator, click Generate, and copy the subscribe link. The link uses YouTube\'s official sub_confirmation parameter so viewers see a subscription prompt immediately.',
          'Place subscribe links in every video description, pinned comments, channel banner links, Instagram bio, Twitter profile, and newsletter footer. The easier you make subscribing, the faster your channel grows.',
        ],
        list: [
          'Enter your channel ID or @handle',
          'Generate the sub_confirmation subscribe URL',
          'Copy and paste into video descriptions and social profiles',
          'Track subscriber growth after adding links to key touchpoints',
        ],
      },
      {
        title: 'Why Subscribe Links Matter for Channel Growth',
        paragraphs: [
          'Most viewers watch a video and leave without subscribing. A direct subscribe link removes friction — one click instead of navigating to your channel page and finding the button. Creators who add subscribe links to descriptions consistently report higher subscription rates.',
          'Pair this tool with our [YouTube Handle Generator](/youtube-handle-generator) to establish a memorable brand identity before driving subscriptions. Use the [Bulk Thumbnail Downloader](/bulk-thumbnail-downloader) to optimize your video thumbnails for higher click-through rates.',
        ],
      },
      {
        title: 'Best Practices for YouTube Subscribe CTAs',
        paragraphs: [
          'Ask viewers to subscribe verbally in your video AND include a subscribe link in the description. Use clear CTA text like "Subscribe here" rather than raw URLs. Test link placement — top of description gets more clicks than bottom.',
          'For end screens and cards, YouTube provides native subscribe buttons. External subscribe links complement those features on platforms outside YouTube where native buttons are unavailable.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is a YouTube subscribe link?',
        answer: 'It is a special URL with sub_confirmation=1 that prompts viewers to subscribe to your channel when clicked.',
      },
      {
        question: 'Where do I find my channel ID?',
        answer: 'Go to YouTube Studio > Settings > Advanced settings. Your channel ID starts with "UC". You can also use your @handle if you have one.',
      },
      {
        question: 'Can I use this link on Instagram and Twitter?',
        answer: 'Yes. Subscribe links work on any platform that accepts URLs — social bios, email signatures, websites, and messaging apps.',
      },
      {
        question: 'Is this tool free?',
        answer: 'Yes. Generate unlimited subscribe links at no cost on Quetext.in.',
      },
      {
        question: 'Do subscribe links work on mobile?',
        answer: 'Yes. The sub_confirmation parameter works on mobile and desktop YouTube apps and browsers.',
      },
    ],
  },

  '/youtube-handle-generator': {
    sections: [
      {
        title: 'YouTube Handle Generator — Find Your Perfect @Name',
        paragraphs: [
          'Your YouTube handle is your unique identity on the platform — the @name viewers use to find, mention, and subscribe to your channel. Since YouTube rolled out handles, they appear on Shorts, comments, community posts, and your custom URL (youtube.com/@yourhandle). A memorable handle is essential for brand recognition and growth.',
          'Our free YouTube Handle Generator creates dozens of catchy, professional handle ideas based on your name, brand, or keyword. Enter a base word and instantly get variations with popular suffixes and prefixes used by successful creators.',
        ],
      },
      {
        title: 'How to Choose the Perfect YouTube Handle',
        paragraphs: [
          'Keep it relevant to your niche — a tech channel should sound techy, a cooking channel should sound culinary. Keep it short and memorable; avoid excessive numbers or confusing characters. Check availability on YouTube Studio before committing.',
          'Also verify the handle is available on Instagram, Twitter, and TikTok for consistent cross-platform branding. Use our [YouTube Subscribe Link Generator](/youtube-subscribe-link-generator) once your handle is set up to drive subscriptions.',
        ],
        list: [
          'Match your handle to your channel name and niche',
          'Keep it under 20 characters when possible',
          'Avoid numbers unless they are part of your brand',
          'Check availability on YouTube and other social platforms',
        ],
      },
      {
        title: 'Why YouTube Handles Matter for SEO and Discovery',
        paragraphs: [
          'Handles appear in YouTube search results, Shorts feeds, and comment mentions. A searchable handle with relevant keywords (e.g., @TechReviewsDaily) helps viewers find your channel organically. Your handle also forms your custom URL, which you share across marketing channels.',
          'Gaming channels, vloggers, faceless creators, and business channels all benefit from strategic handle selection. Our generator covers aesthetic, cool, professional, and niche-specific naming patterns.',
        ],
      },
      {
        title: 'YouTube Handle Ideas by Channel Type',
        paragraphs: [
          'Gaming: combine your gamertag with words like "Plays," "GG," or "Squad." Tech: use "Lab," "Byte," "Hub," or "Daily." Vlogs: add "Vlogs," "Life," or "Diaries." Education: try "Learn," "Academy," or "Explained." Faceless channels: use descriptive niche words like "Facts," "Stories," or "Motivation."',
          'Generate multiple batches, shortlist your favorites, and test them with friends or your audience before committing. Changing handles later is possible but confuses existing subscribers.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is a YouTube handle?',
        answer: 'A YouTube handle is a unique @identifier for your channel, used in URLs, mentions, and Shorts. Each handle can only belong to one channel.',
      },
      {
        question: 'How does this generator work?',
        answer: 'Enter a name, brand, or keyword. We generate variations by adding popular prefixes and suffixes that creators commonly use.',
      },
      {
        question: 'Are generated handles guaranteed to be available?',
        answer: 'No. The tool generates ideas. You must check availability in YouTube Studio before claiming a handle.',
      },
      {
        question: 'Can I change my handle later?',
        answer: 'Yes, YouTube allows handle changes, but frequent changes confuse subscribers and break existing links. Choose carefully.',
      },
      {
        question: 'Should my handle match my channel name?',
        answer: 'Ideally yes, or at least be closely related. Consistency helps viewers recognize and remember your brand.',
      },
    ],
  },

  '/roblox-rp-names': {
    sections: [
      {
        title: 'Roblox RP Name Generator — 1000+ Roleplay Username Ideas',
        paragraphs: [
          'Finding the perfect Roblox roleplay name sets the tone for your character in Brookhaven, Bloxburg, MeepCity, and other RP games. A great username is memorable, fits your character\'s personality, and stands out in a crowded server without violating Roblox naming guidelines.',
          'Quetext.in\'s Roblox RP name generator creates unlimited username ideas across aesthetic, cool, dark, funny, and anime styles. Click Generate for fresh names, or browse our pre-built list of 1000+ roleplay names ready to copy.',
        ],
      },
      {
        title: 'How to Choose a Roblox Roleplay Name',
        paragraphs: [
          'Match the name to your character\'s role — a mafia boss needs a different vibe than a soft aesthetic cottagecore character. Avoid numbers and random characters that make names hard to remember or type. Keep it appropriate for Roblox community standards to avoid moderation issues.',
          'Use our style filter to generate names by category: Aesthetic & Cute for soft personas, Cool & Epic for action characters, Dark & Emo for edgy roles, Funny & Meme for comedy RP, and Anime & Kawaii for Japanese-inspired characters.',
        ],
        list: [
          'Select a name style that matches your RP character',
          'Click Generate for 12 fresh username ideas',
          'Click any name to copy it to your clipboard',
          'Browse 1000+ pre-generated names below for more inspiration',
        ],
      },
      {
        title: 'Popular Roblox RP Games and Naming Trends',
        paragraphs: [
          'Brookhaven RP favors realistic first-and-last names or aesthetic single-word usernames. Bloxburg players often use preppy, valley-girl, or professional names matching their character\'s job. MeepCity and similar social games trend toward cute, colorful names with emojis in display names (not usernames).',
          'Anime-style names with Japanese-inspired words remain popular across all RP games. Dark/edgy names suit horror or crime roleplay scenarios. Funny names work best in casual, comedy-focused servers.',
        ],
      },
      {
        title: 'Roblox Username Rules and Tips',
        paragraphs: [
          'Roblox usernames can be 3–20 characters, letters and numbers only (no spaces or special characters in the username itself). Display names allow spaces, emojis, and special characters for extra personalization. You can change display names freely but username changes cost Robux.',
          'Generate multiple options with our tool, then check availability in Roblox before settling. If your favorite name is taken, try adding a subtle suffix or browse our massive list for alternatives.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Are these Roblox names free to use?',
        answer: 'Yes. All generated and listed names are free ideas. Check availability in Roblox before creating your account or changing your username.',
      },
      {
        question: 'Can I use special characters in Roblox usernames?',
        answer: 'Roblox usernames allow letters and numbers only. Use display names for spaces, emojis, and special characters.',
      },
      {
        question: 'How many names can I generate?',
        answer: 'Unlimited. Click Generate as many times as you want for fresh batches of 12 names.',
      },
      {
        question: 'What RP games work with these names?',
        answer: 'Any Roblox roleplay game — Brookhaven, Bloxburg, MeepCity, Royale High, and more. Choose a style that fits your game and character.',
      },
      {
        question: 'What if my chosen name is already taken?',
        answer: 'Try generating a new batch, browse the 1000+ name list, or add a subtle variation like a middle initial or alternate spelling.',
      },
    ],
  },

  '/rent-split-calculator': {
    sections: [
      {
        title: 'Fair Rent Split Calculator for Roommates',
        paragraphs: [
          'Splitting rent fairly among roommates is one of the most common sources of household conflict. When bedrooms differ in size and amenities, equal splits feel unfair. When utilities vary by usage, someone always overpays. Our rent split calculator solves this with weighted room sizes and per-person utility division.',
          'Enter your total rent, utility costs, and each room\'s details. The calculator assigns rent by weighted room size and splits utilities by headcount. Adjustments let you account for perks like private bathrooms, balconies, or parking spots.',
        ],
      },
      {
        title: 'How This Rent Split Calculator Works',
        paragraphs: [
          'Rent is divided proportionally by each room\'s weighted size. Add the room\'s square footage plus any adjustment points for premium features. Utilities are split equally by the number of people in each room — so a couple sharing a room pays utilities for two people.',
          'The result shows each room\'s rent share, utility share, total cost, and per-person amount. Share the breakdown with roommates before signing the lease to prevent disputes later.',
        ],
        list: [
          'Enter total monthly rent and utility costs',
          'Add each room with size, occupants, and adjustments',
          'Use adjustments for private bath (+20–30), balcony, parking, etc.',
          'Review the per-room and per-person breakdown instantly',
        ],
      },
      {
        title: 'Rent Splitting Methods Compared',
        paragraphs: [
          'Equal split: everyone pays the same regardless of room size. Simple but unfair when rooms differ significantly. By square footage: rent proportional to room size, utilities split by people. Most fair for most households. By income: some roommates agree to pay based on earnings — this calculator focuses on size-based fairness.',
          'For couples sharing a room, set people count to 2. The room rent stays based on size, but utilities divide correctly. Add adjustments if one room has significantly better features.',
        ],
      },
      {
        title: 'Tips for Roommate Rent Agreements',
        paragraphs: [
          'Agree on the split method before move-in and document it in writing. Review the split when rent increases or roommates change. Include utilities like WiFi, water, electricity, and trash in your total utility input.',
          'Use this calculator monthly when utility bills fluctuate. A transparent, math-based split prevents the resentment that ends roommate friendships.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should rent be split equally or by room size?',
        answer: 'Equal splitting works when rooms are similar. Size-based splitting is fairer when bedrooms differ significantly in square footage or amenities.',
      },
      {
        question: 'How should a couple in one room split rent?',
        answer: 'Set the room\'s people count to 2. Rent is still based on room size, but utilities divide by total people in the household.',
      },
      {
        question: 'What are adjustment points?',
        answer: 'Adjustments add virtual square footage for premium features. Add 20–30 points for a private bathroom, or points for parking, balcony, or closet space.',
      },
      {
        question: 'Does this include security deposit splitting?',
        answer: 'This calculator focuses on monthly rent and utilities. Split deposits proportionally using the same room size weights.',
      },
      {
        question: 'Is this rent calculator free?',
        answer: 'Yes. Use it as many times as you need on Quetext.in at no cost.',
      },
    ],
  },

  '/bulk-youtube-video-downloader': {
    sections: [
      {
        title: 'Bulk YouTube Video Link Organizer',
        paragraphs: [
          'Managing dozens of YouTube video URLs is tedious when links come in mixed formats — watch URLs, youtu.be short links, Shorts URLs, and embed links. Our bulk YouTube video tool cleans, validates, deduplicates, and exports a standardized list you can copy instantly.',
          'This is a link organizer for creators and teams — not a tool that bypasses YouTube\'s terms of service. It helps you prepare clean URL lists for authorized archiving, content audits, and production workflows.',
        ],
      },
      {
        title: 'How to Use the Bulk YouTube Link Tool',
        paragraphs: [
          'Paste one YouTube URL per line into the text area. The tool validates each link, normalizes formats, removes duplicates, and displays a clean list. Confirm you own the videos or have permission, then copy the bulk list for your workflow.',
          'Supported formats include standard watch URLs, youtu.be short links, YouTube Shorts URLs, and embed links. Invalid URLs are filtered out automatically.',
        ],
        list: [
          'Paste URLs one per line in any supported format',
          'Review validated and deduplicated results',
          'Confirm ownership or download permission',
          'Copy the clean URL list for your workflow',
        ],
      },
      {
        title: 'Who Needs Bulk YouTube URL Management?',
        paragraphs: [
          'Content creators auditing their own video library use this to build clean URL inventories. Video editors preparing batch projects need normalized links without duplicates. Marketing teams tracking campaign videos across channels benefit from organized exports.',
          'Pair with our [Bulk Thumbnail Downloader](/bulk-thumbnail-downloader) to grab thumbnails for the same video set, and our [YouTube Subscribe Link Generator](/youtube-subscribe-link-generator) to add subscription CTAs to your organized content.',
        ],
      },
      {
        title: 'Compliance and Best Practices',
        paragraphs: [
          'Only organize and download videos you own or have explicit permission to archive. YouTube\'s Terms of Service protect creator content. This tool does not circumvent platform protections or download restricted media.',
          'Use organized URL lists for internal content management, SEO audits, and authorized backup workflows. Always respect copyright and platform guidelines.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does this tool download YouTube videos?',
        answer: 'No. It validates, cleans, and organizes YouTube URLs. It does not download video files or bypass YouTube restrictions.',
      },
      {
        question: 'What URL formats are supported?',
        answer: 'Standard watch URLs, youtu.be links, YouTube Shorts URLs, and embed links are all normalized automatically.',
      },
      {
        question: 'Are duplicate URLs removed?',
        answer: 'Yes. Duplicate video IDs are detected and removed so your export list contains only unique videos.',
      },
      {
        question: 'Is this tool free?',
        answer: 'Yes. Organize unlimited YouTube URL lists at no cost on Quetext.in.',
      },
      {
        question: 'Can I use this for playlists?',
        answer: 'Paste individual video URLs from a playlist. Full playlist URL parsing may be added in future updates.',
      },
    ],
  },

  '/bulk-thumbnail-downloader': {
    sections: [
      {
        title: 'Bulk YouTube Thumbnail Downloader — HD and Max Resolution',
        paragraphs: [
          'YouTube thumbnails drive click-through rates. Creators often need to download their own thumbnails for A/B testing, portfolio archives, social media repurposing, or design reference. Our bulk thumbnail downloader extracts HD, max resolution, medium, and default thumbnails from any public video URL.',
          'Paste video URLs, Shorts links, or video IDs and download thumbnails instantly. Process multiple videos at once instead of manually right-clicking each thumbnail on YouTube.',
        ],
      },
      {
        title: 'How to Download YouTube Thumbnails in Bulk',
        paragraphs: [
          'Paste one YouTube URL or video ID per line. Select your preferred resolution: maxresdefault (1280x720), hqdefault (480x360), mqdefault (320x180), or sddefault. Click to download each thumbnail or grab them individually from the results grid.',
          'Max resolution works for most videos but may not exist for older uploads or Shorts. The tool falls back to the highest available quality automatically.',
        ],
        list: [
          'Paste YouTube URLs, Shorts links, or video IDs',
          'Choose thumbnail resolution quality',
          'Download individual thumbnails or process in bulk',
          'Use thumbnails for A/B testing, archives, and social media',
        ],
      },
      {
        title: 'YouTube Thumbnail Best Practices',
        paragraphs: [
          'High-contrast thumbnails with readable text outperform bland screenshots. Faces with expressive emotions increase clicks. Consistent branding (colors, fonts, layout) builds channel recognition across videos.',
          'Download your existing thumbnails to analyze what works. Compare CTR data from YouTube Studio with thumbnail designs. Use our [YouTube Handle Generator](/youtube-handle-generator) and [Subscribe Link Generator](/youtube-subscribe-link-generator) to complete your channel branding toolkit.',
        ],
      },
      {
        title: 'Thumbnail Sizes and Resolution Guide',
        paragraphs: [
          'YouTube recommends 1280x720 pixels (16:9 aspect ratio) for custom thumbnails. Minimum width is 640 pixels. Max file size is 2MB. Formats accepted: JPG, PNG, GIF, BMP. The maxresdefault URL provides the highest available quality for most videos.',
          'For Shorts, thumbnail dimensions differ. Use this tool to grab whatever resolution YouTube serves for your specific video format.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What thumbnail resolutions are available?',
        answer: 'Max (1280x720), HQ (480x360), MQ (320x180), and default quality. Max resolution depends on what YouTube has stored for each video.',
      },
      {
        question: 'Can I download thumbnails from Shorts?',
        answer: 'Yes. Paste Shorts URLs and the tool extracts available thumbnail resolutions.',
      },
      {
        question: 'Is bulk thumbnail downloading free?',
        answer: 'Yes. Download thumbnails from unlimited videos at no cost.',
      },
      {
        question: 'Can I download other creators\' thumbnails?',
        answer: 'You can download publicly visible thumbnails for reference and analysis. Respect copyright when reusing other creators\' designs.',
      },
      {
        question: 'Why does max resolution sometimes fail?',
        answer: 'Older videos or Shorts may not have maxresdefault available. The tool shows the highest resolution that exists for each video.',
      },
    ],
  },

  '/free-flash-video-downloader': {
    sections: [
      {
        title: 'Free Direct Video Link Downloader — FLV, MP4, WEBM',
        paragraphs: [
          'Sometimes you have a direct link to a video file — FLV, MP4, WEBM, MOV, or M4V — and need a simple way to preview or download it. Our free flash video downloader accepts public direct video URLs and creates preview and download links instantly.',
          'This tool works with direct file URLs, not streaming platform pages. It is designed for developers, archivists, and content managers working with publicly accessible video files they have permission to download.',
        ],
      },
      {
        title: 'How to Use the Direct Video Downloader',
        paragraphs: [
          'Paste a direct video file URL (ending in .mp4, .webm, .flv, .mov, or .m4v) into the input field. The tool validates the URL, generates a preview player, and provides a download link. Confirm you have permission to download the file before proceeding.',
          'This does not extract videos from YouTube, Vimeo, or other streaming platforms. It handles direct file links only — the kind you might find on CDNs, archive sites, or your own hosting.',
        ],
        list: [
          'Paste a direct public video file URL',
          'Preview the video in your browser',
          'Download the file using the generated link',
          'Supported formats: FLV, MP4, WEBM, MOV, M4V',
        ],
      },
      {
        title: 'Supported Video Formats Explained',
        paragraphs: [
          'MP4 (H.264): the most universal format, plays on virtually all devices and browsers. WEBM (VP9/AV1): open format favored by web platforms for efficiency. FLV (Flash Video): legacy format still found in older web archives. MOV: Apple\'s container format, common in professional workflows. M4V: iTunes-compatible MP4 variant.',
          'For YouTube content, use our [Bulk YouTube Video Link Organizer](/bulk-youtube-video-downloader) instead. For thumbnails, try the [Bulk Thumbnail Downloader](/bulk-thumbnail-downloader).',
        ],
      },
      {
        title: 'Legal and Ethical Use Guidelines',
        paragraphs: [
          'Only download video files you own or have explicit permission to access. Direct video URLs on public CDNs may still be protected by copyright. This tool does not circumvent DRM, paywalls, or access controls.',
          'Use this for your own hosted content, open-licensed media, authorized archives, and development/testing with permitted files. Respect content creators\' rights and platform terms of service.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does this download YouTube videos?',
        answer: 'No. This tool handles direct video file URLs only. For YouTube URL management, use our Bulk YouTube Video Link Organizer.',
      },
      {
        question: 'What video formats are supported?',
        answer: 'FLV, MP4, WEBM, MOV, and M4V direct file links.',
      },
      {
        question: 'Can I preview before downloading?',
        answer: 'Yes. The tool generates an in-browser preview player so you can verify the file before downloading.',
      },
      {
        question: 'Is this tool free?',
        answer: 'Yes. Preview and download public direct video links at no cost on Quetext.in.',
      },
      {
        question: 'Why is my URL not working?',
        answer: 'The URL must be a direct link to a video file, not a webpage URL. The file must be publicly accessible without authentication.',
      },
    ],
  },
};

/** Get SoftwareApplication + FAQPage schema for a tool path. */
export function getToolSchema(path) {
  const content = toolSeoContent[path];
  if (!content) return [];

  const names = {
    '/plagiarism-checker': ['Free Plagiarism Checker', 'Free online plagiarism checker that scans text against billions of web pages.'],
    '/ai-content-detector': ['Free AI Content Detector', 'Detect AI-generated text from ChatGPT, GPT-4, Claude, and Gemini.'],
    '/grammar-checker': ['Free Grammar Checker', 'Free online grammar checker for spelling, punctuation, and style.'],
    '/paraphrasing-tool': ['Free Paraphrasing Tool', 'AI-powered paraphrasing tool that rewrites text while preserving meaning.'],
    '/sentence-rewriter': ['Free Sentence Rewriter', 'Rewrite sentences for clarity and originality online.'],
    '/word-counter': ['Free Word Counter', 'Count words, characters, sentences, and reading time instantly.'],
    '/index-checker': ['Free Index Checker', 'Check if a URL is indexed by Google instantly.'],
    '/youtube-subscribe-link-generator': ['YouTube Subscribe Link Generator', 'Generate one-click YouTube subscribe links for your channel.'],
    '/youtube-handle-generator': ['YouTube Handle Generator', 'Generate unique YouTube handle ideas for your channel.'],
    '/roblox-rp-names': ['Roblox RP Name Generator', 'Generate creative Roblox roleplay username ideas.'],
    '/rent-split-calculator': ['Rent Split Calculator', 'Split rent fairly among roommates by room size and utilities.'],
    '/bulk-youtube-video-downloader': ['Bulk YouTube Video Link Organizer', 'Clean, validate, and export bulk YouTube video URLs.'],
    '/bulk-thumbnail-downloader': ['Bulk YouTube Thumbnail Downloader', 'Download HD YouTube thumbnails in bulk.'],
    '/free-flash-video-downloader': ['Free Flash Video Downloader', 'Preview and download direct FLV, MP4, WEBM video links.'],
  };

  const [name, desc] = names[path] || ['Quetext Tool', 'Free online tool by Quetext.in'];
  const schemas = [app(name, desc, path)];
  const faqSchema = buildFaqSchema(content.faqs);
  if (faqSchema) schemas.push(faqSchema);
  return schemas;
}
