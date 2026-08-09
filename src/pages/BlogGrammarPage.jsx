import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../lib/seoHelper';
import BlogFaqSection from '../components/BlogFaqSection';
import { getBlogFaqSchema } from '../content/seo/blogFaqs';

const BlogGrammarPage = () => (
  <>
    <SEO
title="10 Grammar Mistakes That Hurt Your Professional Image | Quetext"
      description="These are the grammar errors that make readers cringe and editors reject work. Learn the 10 most common mistakes and exactly how to fix each one."
      keywords="grammar mistakes, common grammar errors, professional writing grammar, grammar tips, grammar checker"
      url="/blog/top-grammar-mistakes"
      datePublished="2026-06-30"
      image="https://www.quetext.in/assets/og-image.jpg"
      customSchema={[getBlogFaqSchema('top-grammar-mistakes')].filter(Boolean)}

    />
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <Link to="/blog" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium mb-4 inline-block">
        ← Back to Blog
      </Link>
      <article className="prose prose-indigo prose-lg max-w-none">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">10 Grammar Mistakes That Make You Look Unprofessional (And How to Fix Them)</h1>
        <p>Even the most creative ideas can be undermined by sloppy grammar. In a world where content is king, a single typo can damage credibility, turn off readers, and raise red flags for editors or hiring managers. Below we break down ten of the most frequent grammar errors, explain why they matter, and give you concrete fixes you can apply immediately.</p>
        <h2>1. Your vs. You’re (and It’s vs. Its)</h2>
        <p><strong>Your</strong> is a possessive pronoun (e.g., "your strategy"); <strong>you’re</strong> is a contraction for "you are". Likewise, <strong>its</strong> is possessive, while <strong>it’s</strong> means "it is". The mistake often slips in because the contracted form sounds natural. The quick test: replace the word with "you are" or "it is" – if the sentence still makes sense, you need the contraction.</p>
        <h2>2. Using Affect and Effect Incorrectly</h2>
        <p><strong>Affect</strong> is a verb meaning "to influence"; <strong>effect</strong> is a noun meaning "result". Remember the mnemonic: <em>A</em>ffect <em>A</em>ction, <em>E</em>ffect <em>E</em>nd result. Example: "The new policy will affect employee morale" vs. "The effect of the new policy was noticeable".</p>
        <h2>3. Run‑On Sentences</h2>
        <p>A run‑on stitches two independent clauses together without proper punctuation. Fix them by using a period, semicolon, or a coordinating conjunction (for, and, nor, but, or, yet, so). Example: "She finished the report she sent it to the manager" → "She finished the report, and she sent it to the manager."</p>
        <h2>4. Dangling Modifiers</h2>
        <p>A dangling modifier is a descriptive phrase that doesn’t clearly refer to the intended noun. It creates confusion. Example: "While reviewing the manuscript, the coffee spilled" → "While reviewing the manuscript, I spilled the coffee." Always place the modifier next to the word it modifies.</p>
        <h2>5. Passive Voice Overuse</h2>
        <p>Passive voice can make sentences vague and longer. Active voice is clearer. Change "The report was written by the team" to "The team wrote the report". Use passive sparingly, mainly when the actor is unknown or irrelevant.</p>
        <h2>6. Comma Splices</h2>
        <p>A comma splice joins two independent clauses with just a comma. Fix it by using a period, semicolon, or adding a conjunction. Example: "The data is accurate, it needs verification" → "The data is accurate; it needs verification".</p>
        <h2>7. Apostrophe Abuse</h2>
        <p>Apostrophes show possession or form contractions. Do not use them for plurals. Correct: "The company's policy" (possessive) vs. "The companies' policies" (plural possessive). For plural nouns ending in s, place the apostrophe after the s.</p>
        <h2>8. Subject‑Verb Agreement Errors</h2>
        <p>The verb must agree in number with its subject. Be careful with collective nouns (team, group) and intervening phrases. Example: "The list of items are on the table" → "The list of items is on the table".</p>
        <h2>9. Then vs. Than Confusion</h2>
        <p><strong>Then</strong> relates to time; <strong>than</strong> is used for comparisons. Swap them when mismatched: "Better then yesterday" → "Better than yesterday".</p>
        <h2>10. Ending Sentences with Prepositions (and When It Is OK)</h2>
        <p>Traditional grammar advises avoiding preposition‑ending sentences, but modern usage accepts them when they sound natural. Example: "Where are you at?" can be improved to "Where are you?" However, in formal writing, re‑phrase when possible.</p>
        <h2>How to Train Yourself to Write Better Grammar</h2>
        <ul>
          <li>Read aloud – awkward phrasing often reveals errors.</li>
          <li>Use a grammar checker like Quetext’s free tool for a second opinion.</li>
          <li>Maintain a personal list of recurring mistakes and review it weekly.</li>
          <li>Study a style guide (Chicago Manual, AP) to internalise rules.</li>
        </ul>
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-8 mt-12 text-center">
          <p className="text-lg font-medium text-indigo-800">
            Catch every grammar mistake before you publish with our free <Link to="/grammar-checker" className="text-indigo-600 hover:underline">Grammar Checker</Link>.
          </p>
        </div>
        <BlogFaqSection slug="top-grammar-mistakes" />
      </article>
    </div>
  </>
);

export default BlogGrammarPage;
