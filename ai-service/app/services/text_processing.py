import re


def clean_text(text: str) -> str:
    text = re.sub(r"\s+", " ", text.strip())
    return text


def split_sentences(text: str) -> list[str]:
    chunks = re.split(r"(?<=[.!?])\s+", clean_text(text))
    return [c for c in chunks if c]


def split_phrases(text: str) -> list[str]:
    text = clean_text(text)
    phrases = re.split(r"[,;:()\[\]\-]\s*|\.\s+", text)
    return [p.strip() for p in phrases if p.strip()]


def tokenize(text: str) -> list[str]:
    return re.findall(r"[a-zA-Z0-9']+", text.lower())
