# VeriWrite - Hybrid Plagiarism Detection SaaS MVP

Production-style MVP inspired by Quetext, with hybrid detection:
- Fingerprint matching (`3-5` word n-grams)
- Semantic matching (`all-MiniLM-L6-v2` embeddings + cosine similarity)
- Web source search (Google Custom Search API)
- Match highlighting + source mapping
- JWT auth, free daily quota, premium billing hook, report download

## Folder Structure

```text
Quetext/
  backend/
    app/
      api/
      core/
      db/
      services/
      main.py
    requirements.txt
    .env.example
  frontend/
    src/
      components/
      lib/
      App.jsx
      main.jsx
    package.json
  docker-compose.yml
  README.md
  docs/deployment.md
```

## Backend Setup (FastAPI)

1. Create environment and install:
   - `cd backend`
   - `python -m venv .venv`
   - Windows: `.venv\Scripts\activate`
   - `pip install -r requirements.txt`
2. Create `.env` from `.env.example` and set:
   - `DATABASE_URL`
   - `REDIS_URL`
   - `GOOGLE_CSE_API_KEY`, `GOOGLE_CSE_ID`
   - `SECRET_KEY`
3. Run API:
   - `uvicorn app.main:app --reload`

API base: `http://localhost:8000`

## Frontend Setup (React + Tailwind)

1. Install and run:
   - `cd frontend`
   - `npm install`
   - `npm run dev`
2. Optional `.env`:
   - `VITE_API_URL=http://localhost:8000`

Frontend: `http://localhost:5173`

## Hybrid Detection Flow

1. Input text (or file upload via API)
2. Normalize + sentence/phrase split
3. Generate fingerprint n-grams (`3,4,5`)
4. Search top web sources (Google CSE)
5. Scrape + clean source content
6. Compute sentence embeddings
7. Exact and semantic similarity scoring
8. Weighted score + highlight labels
9. Overall plagiarism percentage + category

## API Endpoints

- `POST /auth/register`
- `POST /auth/login`
- `POST /scan/text`
- `POST /scan/file`
- `GET /scan/report/{scan_id}`
- `POST /billing/create-order`
- `GET /health`

## SaaS Features Included

- JWT login/register
- Free plan cap (`FREE_WORD_LIMIT_PER_DAY`, default 1000 words/day)
- Premium-ready billing order API stub (Razorpay integration point)
- Scan persistence in PostgreSQL
- Usage tracking in Redis

## Notes for Accuracy Tuning

- Raise source pool to 10 results for stronger recall.
- Add chunk-level semantic comparisons rather than only sentence-level.
- Maintain a dedicated fingerprint index table for previously crawled sources.
- Add domain reputation weighting and duplicate source collapsing.

## One-command Local Run (Docker)

At repo root:
- `docker compose up --build`

Services:
- frontend: `http://localhost:5173`
- backend: `http://localhost:8000`
- postgres: `localhost:5432`
- redis: `localhost:6379`
