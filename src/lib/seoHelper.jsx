import { Helmet } from 'react-helmet';
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from './siteConfig';

// Default SEO values
const DEFAULT_TITLE_SUFFIX = ' | Quetext';
const DEFAULT_KEYWORDS = 'quetext, free plagiarism checker, AI content detector, grammar checker, paraphrasing tool, sentence rewriter, word counter, essay checker, plagiarism detection, AI detection';

/**
 * SEO component with optional structured data.
 * Props:
 *   title – page title (string)
 *   description – meta description (string)
 *   keywords – meta keywords (string)
 *   url – path portion (e.g. "/blog/my-article")
 *   image – absolute URL to a featured image (optional)
 *   datePublished – ISO date string (optional)
 *   authorName – author name (optional, defaults to site name)
 *   customSchema – array of additional JSON‑LD objects (optional)
 */
const SEO = ({
  title,
  description,
  keywords,
  url = '/',
  image,
  datePublished,
  authorName = SITE_NAME,
  customSchema = []
}) => {
  // Build title ensuring brand name appears
  const fullTitle = title?.includes('Quetext') ? title : `${title || SITE_NAME}${DEFAULT_TITLE_SUFFIX}`;
  const fullDescription = description || `Free online writing tools by ${SITE_NAME}: plagiarism checker, AI detector, grammar checker, paraphrasing, and more.`;
  const fullKeywords = keywords || DEFAULT_KEYWORDS;
  const canonical = `${SITE_URL}${url}`;

  // Organization & Website schema
  const orgLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        email: SUPPORT_EMAIL,
        description: 'Free online writing tools including plagiarism checker, AI detector, and grammar checker.',
        sameAs: [
          'https://twitter.com/quetext',
          'https://www.facebook.com/quetext',
          'https://instagram.com/quetext'
        ]
      },
      {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/tools?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  };

  // Breadcrumb schema – simple Home > Current page
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title || 'Page',
        item: canonical
      }
    ]
  };

  // Article schema – added only when we have enough article data
  const articleLd = (
    title && datePublished
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description: fullDescription,
          image: image ? [image] : undefined,
          author: {
            '@type': 'Person',
            name: authorName
          },
          publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            logo: {
              '@type': 'ImageObject',
              url: `${SITE_URL}/logo.png`
            }
          },
          datePublished,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonical
          }
        }
      : null
  );

  // Assemble all schema blocks, filter out any null values
  const schemaBlocks = [orgLd, breadcrumbLd, articleLd, ...customSchema].filter(Boolean);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {fullKeywords && <meta name="keywords" content={fullKeywords} />}
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={SITE_NAME} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      {image && <meta name="twitter:image" content={image} />}

      {/* Structured Data */}
      {schemaBlocks.map((schema, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
