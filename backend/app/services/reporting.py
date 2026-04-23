from io import BytesIO

from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas


def build_pdf_report(result: dict) -> bytes:
    buffer = BytesIO()
    p = canvas.Canvas(buffer, pagesize=A4)
    p.setTitle("VeriWrite Plagiarism Report")
    p.drawString(40, 800, f"Overall Score: {result['score']}% ({result['category']})")
    p.drawString(40, 780, "Matched Segments:")

    y = 760
    for idx, match in enumerate(result.get("matches", []), start=1):
        line = f"{idx}. [{match['level']}] {match['sentence'][:80]}..."
        p.drawString(40, y, line)
        y -= 18
        p.drawString(60, y, f"Source: {match['source_url']}")
        y -= 24
        if y < 80:
            p.showPage()
            y = 800

    p.save()
    buffer.seek(0)
    return buffer.read()
