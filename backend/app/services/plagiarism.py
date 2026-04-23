from datetime import datetime

from app.services.fingerprinting import exact_overlap_score, fingerprint_text
from app.services.semantic import cosine_similarity, embed_texts
from app.services.text_processing import split_sentences
from app.services.websearch import fetch_many, google_search


def _score_to_level(score: float) -> str:
    if score >= 0.75:
        return "high"
    if score >= 0.45:
        return "partial"
    return "low"


def _category(total_score: int) -> str:
    if total_score <= 20:
        return "Low"
    if total_score <= 50:
        return "Medium"
    return "High"


async def run_hybrid_scan(text: str, top_k_sources: int = 5) -> dict:
    sentences = split_sentences(text)
    if not sentences:
        return {"score": 0, "category": "Low", "matches": [], "checked_at": datetime.utcnow()}

    # Query web using dense phrase chunks.
    query = " ".join(sentences[:2])[:220]
    urls = google_search(query, num_results=top_k_sources)
    source_map = await fetch_many(urls)

    source_texts = [source_map[u] for u in urls if source_map.get(u)]
    source_embeddings = embed_texts(source_texts)

    matches = []
    sentence_embeddings = embed_texts(sentences)
    for i, sentence in enumerate(sentences):
        user_fp = fingerprint_text(sentence)["fingerprints"]
        best = {"score": 0.0, "exact": 0.0, "semantic": 0.0, "url": ""}
        for j, source in enumerate(source_texts):
            source_fp = fingerprint_text(source)["fingerprints"]
            exact = exact_overlap_score(user_fp, source_fp)
            semantic = cosine_similarity(sentence_embeddings[i], source_embeddings[j]) if len(source_embeddings) else 0.0
            combined = (0.55 * semantic) + (0.45 * exact)
            if combined > best["score"]:
                source_url = next((u for u, t in source_map.items() if t == source), "")
                best = {"score": combined, "exact": exact, "semantic": semantic, "url": source_url}

        if best["score"] >= 0.35:
            matches.append(
                {
                    "sentence": sentence,
                    "source_url": best["url"],
                    "exact_score": round(best["exact"], 3),
                    "semantic_score": round(best["semantic"], 3),
                    "combined_score": round(best["score"], 3),
                    "level": _score_to_level(best["score"]),
                }
            )

    total_score = int(round((sum(m["combined_score"] for m in matches) / max(len(sentences), 1)) * 100))
    return {
        "score": total_score,
        "category": _category(total_score),
        "matches": matches,
        "checked_at": datetime.utcnow(),
    }
