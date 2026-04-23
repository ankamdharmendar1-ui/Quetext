const levelClass = {
  high: "bg-red-200/80 ring-1 ring-red-300",
  partial: "bg-yellow-200/80 ring-1 ring-yellow-300",
  low: ""
};

function findAllRanges(haystack, needle) {
  if (!needle) return [];
  const ranges = [];
  let start = 0;
  while (true) {
    const idx = haystack.indexOf(needle, start);
    if (idx === -1) break;
    ranges.push([idx, idx + needle.length]);
    start = idx + needle.length;
  }
  return ranges;
}

function mergeRanges(ranges) {
  const sorted = [...ranges].sort((a, b) => a.start - b.start || b.end - a.end);
  const out = [];
  for (const r of sorted) {
    const last = out[out.length - 1];
    if (!last || r.start > last.end) out.push({ ...r });
    else if (r.end > last.end) last.end = r.end;
  }
  return out;
}

export default function HighlightedText({ text, matches }) {
  const annotated = [];
  for (const m of matches || []) {
    const ranges = findAllRanges(text, m.sentence);
    for (const [start, end] of ranges) {
      annotated.push({ start, end, level: m.level });
    }
  }

  const merged = mergeRanges(annotated);
  if (merged.length === 0) {
    return <div className="whitespace-pre-wrap rounded-xl border bg-white p-4 leading-7 text-slate-900">{text}</div>;
  }

  const parts = [];
  let cursor = 0;
  for (const r of merged) {
    if (cursor < r.start) parts.push({ text: text.slice(cursor, r.start), level: "low" });
    parts.push({ text: text.slice(r.start, r.end), level: r.level });
    cursor = r.end;
  }
  if (cursor < text.length) parts.push({ text: text.slice(cursor), level: "low" });

  return (
    <div className="whitespace-pre-wrap rounded-xl border bg-white p-4 leading-7 text-slate-900">
      {parts.map((p, idx) =>
        p.level === "low" ? (
          <span key={idx}>{p.text}</span>
        ) : (
          <mark key={idx} className={`rounded px-1 py-0.5 ${levelClass[p.level]}`}>
            {p.text}
          </mark>
        )
      )}
    </div>
  );
}
