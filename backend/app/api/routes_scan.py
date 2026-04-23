from datetime import datetime
from io import BytesIO
from tempfile import NamedTemporaryFile
from uuid import uuid4

import pdfplumber
from docx import Document
from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from fastapi.responses import StreamingResponse

from app.schemas import ScanRequest, ScanResponse
from app.services.plagiarism import run_hybrid_scan
from app.services.reporting import build_pdf_report
from app.services.translation import translate_to_english

router = APIRouter(prefix="/scan", tags=["scan"])
report_cache: dict[str, dict] = {}


def _extract_text_from_file(content: bytes, filename: str) -> str:
    name = filename.lower()
    if name.endswith(".txt"):
        return content.decode("utf-8", errors="ignore")
    if name.endswith(".pdf"):
        with NamedTemporaryFile(suffix=".pdf") as tmp:
            tmp.write(content)
            tmp.flush()
            with pdfplumber.open(tmp.name) as pdf:
                return " ".join((page.extract_text() or "") for page in pdf.pages)
    if name.endswith(".docx"):
        with NamedTemporaryFile(suffix=".docx") as tmp:
            tmp.write(content)
            tmp.flush()
            doc = Document(tmp.name)
            return " ".join(p.text for p in doc.paragraphs if p.text.strip())
    raise HTTPException(status_code=400, detail="Unsupported file format")


@router.post("/text", response_model=ScanResponse)
async def scan_text(payload: ScanRequest):
    normalized_text = translate_to_english(payload.text, payload.language)
    result = await run_hybrid_scan(normalized_text, top_k_sources=payload.top_k_sources)
    scan_id = uuid4().hex
    report_cache[scan_id] = result
    return ScanResponse(scan_id=scan_id, **result)


@router.post("/file", response_model=ScanResponse)
async def scan_file(file: UploadFile = File(...)):
    text = _extract_text_from_file(await file.read(), file.filename or "")
    result = await scan_text(ScanRequest(text=text, language="en"))
    return result


@router.get("/report/{scan_id}")
def download_report(scan_id: str):
    result = report_cache.get(scan_id)
    if not result:
        raise HTTPException(status_code=404, detail="Scan not found")
    pdf = build_pdf_report(result)
    return StreamingResponse(BytesIO(pdf), media_type="application/pdf", headers={"Content-Disposition": "attachment; filename=report.pdf"})
