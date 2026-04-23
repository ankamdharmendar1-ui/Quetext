import { useMemo, useState } from "react";

import HighlightedText from "./components/HighlightedText";
import { login, register, scanText, setToken } from "./lib/api";

const ToolTabs = ({ active, onChange }) => {
  const tabs = [
    { id: "plagiarism", label: "Plagiarism Checker" },
    { id: "ai", label: "AI Detector (stub)" },
    { id: "grammar", label: "Grammar (stub)" }
  ];
  return (
    <div className="flex flex-wrap gap-2 rounded-xl bg-slate-100 p-2">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={[
            "rounded-lg px-3 py-2 text-sm font-semibold transition",
            active === t.id ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
          ].join(" ")}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
};

function categoryClass(category) {
  if (category === "High") return "text-red-600";
  if (category === "Medium") return "text-yellow-600";
  return "text-green-600";
}

export default function App() {
  const [auth, setAuth] = useState({ email: "", password: "" });
  const [tool, setTool] = useState("plagiarism");
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const words = useMemo(() => text.trim().split(/\s+/).filter(Boolean).length, [text]);

  const handleAuth = async (mode) => {
    setError("");
    try {
      const action = mode === "register" ? register : login;
      const { data } = await action(auth.email, auth.password);
      setToken(data.access_token);
    } catch (e) {
      setError(e.response?.data?.detail || "Authentication failed.");
    }
  };

  const runScan = async () => {
    setError("");
    if (tool !== "plagiarism") {
      setError("Only the Plagiarism Checker is enabled in this MVP.");
      return;
    }
    setLoading(true);
    setProgress(10);
    const timer = setInterval(() => setProgress((p) => (p >= 90 ? 90 : p + 8)), 350);
    try {
      const { data } = await scanText(text, 7);
      setResult(data);
      setProgress(100);
    } catch (e) {
      setError(e.response?.data?.detail || "Scan failed.");
    } finally {
      clearInterval(timer);
      setLoading(false);
      setTimeout(() => setProgress(0), 800);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-600 text-white font-black">V</div>
            <div>
              <p className="text-sm font-semibold text-slate-900">VeriWrite</p>
              <p className="text-xs text-slate-500">DeepSearch™ plagiarism checker</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input className="hidden w-56 rounded-lg border px-3 py-2 text-sm md:block" placeholder="Email" value={auth.email} onChange={(e) => setAuth({ ...auth, email: e.target.value })} />
            <input className="hidden w-56 rounded-lg border px-3 py-2 text-sm md:block" type="password" placeholder="Password" value={auth.password} onChange={(e) => setAuth({ ...auth, password: e.target.value })} />
            <button className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white" onClick={() => handleAuth("login")}>
              Login
            </button>
            <button className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white" onClick={() => handleAuth("register")}>
              Sign up
            </button>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <section className="lg:col-span-8">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">Check plagiarism with DeepSearch</h1>
                  <p className="mt-1 text-sm text-slate-600">Exact matches + paraphrase detection using semantic similarity.</p>
                </div>
                <div className="hidden items-center gap-2 md:flex">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">ColorGrade</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Source matching</span>
                </div>
              </div>

              <div className="mt-5">
                <ToolTabs active={tool} onChange={setTool} />
              </div>

              <div className="mt-5 rounded-xl border bg-white">
                <textarea
                  className="h-72 w-full resize-none rounded-xl p-4 text-sm leading-6 outline-none"
                  placeholder="Paste your text here to begin scanning..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <div className="flex items-center justify-between border-t px-4 py-3">
                  <p className="text-xs font-semibold text-slate-500">{words.toLocaleString()} words</p>
                  <div className="flex items-center gap-2">
                    <button
                      disabled={loading || !text.trim()}
                      onClick={runScan}
                      className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
                    >
                      {loading ? "Scanning..." : "Check for Plagiarism"}
                    </button>
                  </div>
                </div>
                {progress > 0 && (
                  <div className="h-1 w-full bg-slate-100">
                    <div className="h-1 bg-indigo-600 transition-all" style={{ width: `${progress}%` }} />
                  </div>
                )}
              </div>

              {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

              {result && (
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-bold text-slate-900">Document highlights</h2>
                    <div className="text-xs text-slate-500">
                      Red: high match • Yellow: partial
                    </div>
                  </div>
                  <HighlightedText text={text} matches={result.matches} />
                </div>
              )}
            </div>
          </section>

          <aside className="lg:col-span-4">
            <div className="sticky top-6 space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <p className="text-xs font-semibold text-slate-500">Overall similarity</p>
                <div className="mt-2 flex items-end justify-between">
                  <p className="text-4xl font-black text-slate-900">{result ? result.score : 0}%</p>
                  <p className={`text-sm font-bold ${categoryClass(result?.category || "Low")}`}>{result ? result.category : "Low"}</p>
                </div>
                <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-indigo-600" style={{ width: `${result ? result.score : 0}%` }} />
                </div>
                <p className="mt-3 text-xs text-slate-600">
                  This is an MVP score based on hybrid exact + semantic similarity.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">Sources</h3>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                    {result ? result.matches.length : 0} matches
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {(result?.matches || []).map((m, idx) => (
                    <div key={`${m.source_url}-${idx}`} className="rounded-xl border p-3">
                      <p className="text-xs font-semibold text-slate-500">Match strength</p>
                      <p className="mt-1 text-sm font-bold text-slate-900">
                        {m.combined_score} <span className="text-xs font-semibold text-slate-500">({m.level})</span>
                      </p>
                      <a className="mt-2 block truncate text-sm font-semibold text-indigo-700 underline" href={m.source_url} target="_blank" rel="noreferrer">
                        {m.source_url || "Unknown source"}
                      </a>
                      <p className="mt-2 text-xs text-slate-600 line-clamp-3">{m.sentence}</p>
                    </div>
                  ))}
                  {!result && <p className="text-sm text-slate-600">Run a scan to see matched sources here.</p>}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
