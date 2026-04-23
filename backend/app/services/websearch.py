import asyncio
from urllib.parse import quote_plus

import httpx
from bs4 import BeautifulSoup
from googleapiclient.discovery import build
from readability import Document

from app.core.config import settings


def google_search(query: str, num_results: int = 5) -> list[str]:
    if not settings.google_cse_api_key or not settings.google_cse_id:
        # Fallback for local development when API keys are not configured.
        return [f"https://duckduckgo.com/?q={quote_plus(query)}"]

    service = build("customsearch", "v1", developerKey=settings.google_cse_api_key)
    response = service.cse().list(q=query, cx=settings.google_cse_id, num=num_results).execute()
    return [item["link"] for item in response.get("items", [])]


async def fetch_clean_text(url: str, timeout: int = 12) -> str:
    try:
        async with httpx.AsyncClient(timeout=timeout, follow_redirects=True) as client:
            response = await client.get(url)
            response.raise_for_status()
        doc = Document(response.text)
        html = doc.summary()
        soup = BeautifulSoup(html, "html.parser")
        return soup.get_text(separator=" ", strip=True)
    except Exception:
        return ""


async def fetch_many(urls: list[str]) -> dict[str, str]:
    tasks = [fetch_clean_text(url) for url in urls]
    pages = await asyncio.gather(*tasks)
    return {u: t for u, t in zip(urls, pages, strict=False)}
