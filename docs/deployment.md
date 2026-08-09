# Deployment Guide

## 1) Backend Deployment (Render/Railway/AWS ECS)

- Build image from `backend/Dockerfile`.
- Set env vars from `.env.example`.
- Ensure persistent PostgreSQL + Redis are attached.
- Expose port `8000`.
- Startup command:
  - `uvicorn app.main:app --host 0.0.0.0 --port 8000`

## 2) Frontend Deployment (Vercel/Netlify/CloudFront)

- Build command: `npm run build`
- Output: `dist`
- Set `VITE_API_URL` to your backend URL.

## 3) Database and Cache

- PostgreSQL: enable daily backups.
- Redis: use managed service for production.

## 4) Security Checklist

- Rotate `SECRET_KEY` and API keys.
- Restrict CORS to frontend domain.
- Add rate limiting middleware.
- Add webhook signature verification for Razorpay.

## 5) Scaling

- Run multiple backend replicas behind load balancer.
- Move heavy crawling/embedding to async workers (Celery/RQ).
- Cache source page extracts and sentence embeddings.
- Batch embedding calls for better throughput.

## 6) Monitoring

- Track API latency for `/scan/text`.
- Log source fetch failures and quota errors.
- Add Sentry + Prometheus/Grafana for runtime visibility.
