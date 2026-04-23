import hashlib
from collections import Counter

from app.services.text_processing import tokenize


def generate_ngrams(tokens: list[str], n: int) -> list[str]:
    if len(tokens) < n:
        return []
    return [" ".join(tokens[i : i + n]) for i in range(len(tokens) - n + 1)]


def fingerprint_text(text: str) -> dict:
    tokens = tokenize(text)
    grams = []
    for n in (3, 4, 5):
        grams.extend(generate_ngrams(tokens, n))
    freqs = Counter(grams)
    # Keep top grams for efficient matching.
    top = dict(freqs.most_common(150))
    digest = hashlib.sha256(text.encode("utf-8")).hexdigest()
    return {"hash": digest, "fingerprints": top}


def exact_overlap_score(fp_a: dict, fp_b: dict) -> float:
    set_a = set(fp_a.keys())
    set_b = set(fp_b.keys())
    if not set_a or not set_b:
        return 0.0
    overlap = len(set_a.intersection(set_b))
    return overlap / max(len(set_a), 1)
