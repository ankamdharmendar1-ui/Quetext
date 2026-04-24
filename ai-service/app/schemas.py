from datetime import datetime

from pydantic import BaseModel, EmailStr, Field


class RegisterIn(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8)


class LoginIn(RegisterIn):
    pass


class TokenOut(BaseModel):
    access_token: str
    token_type: str = "bearer"


class ScanRequest(BaseModel):
    text: str = Field(min_length=10, max_length=50000)
    language: str = "en"
    top_k_sources: int = Field(default=5, ge=1, le=10)


class MatchItem(BaseModel):
    sentence: str
    source_url: str
    exact_score: float
    semantic_score: float
    combined_score: float
    level: str


class ScanResponse(BaseModel):
    scan_id: str
    score: int
    category: str
    matches: list[MatchItem]
    checked_at: datetime


class BillingIntentOut(BaseModel):
    order_id: str
    amount: int
    currency: str = "INR"
