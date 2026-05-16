from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.ai_logic import (
    heuristic_ai_detect,
    heuristic_summarize,
    heuristic_paraphrase,
    heuristic_grammar
)

router = APIRouter(prefix="/ai", tags=["ai"])

class TextRequest(BaseModel):
    text: str

class SummarizeRequest(BaseModel):
    text: str
    options: dict = {}

class ParaphraseRequest(BaseModel):
    text: str
    style: str = "standard"

@router.post("/detect")
async def detect_ai(payload: TextRequest):
    if not payload.text:
        raise HTTPException(status_code=400, detail="Text is required")
    return heuristic_ai_detect(payload.text)

@router.post("/summarize")
async def summarize(payload: SummarizeRequest):
    if not payload.text:
        raise HTTPException(status_code=400, detail="Text is required")
    summary = heuristic_summarize(payload.text, payload.options)
    return {"summary": summary}

@router.post("/paraphrase")
async def paraphrase(payload: ParaphraseRequest):
    if not payload.text:
        raise HTTPException(status_code=400, detail="Text is required")
    paraphrased = heuristic_paraphrase(payload.text, payload.style)
    return {"paraphrased": paraphrased}

@router.post("/grammar")
async def check_grammar(payload: TextRequest):
    if not payload.text:
        raise HTTPException(status_code=400, detail="Text is required")
    return heuristic_grammar(payload.text)

@router.post("/humanize")
async def humanize(payload: TextRequest):
    if not payload.text:
        raise HTTPException(status_code=400, detail="Text is required")
    # For now we use the paraphrase heuristic for humanize too
    humanized = heuristic_paraphrase(payload.text, "humanize")
    return {"humanized": humanized}
