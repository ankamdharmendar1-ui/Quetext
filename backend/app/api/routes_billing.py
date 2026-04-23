from fastapi import APIRouter, Depends

from app.api.deps import get_current_user
from app.schemas import BillingIntentOut

router = APIRouter(prefix="/billing", tags=["billing"])


@router.post("/create-order", response_model=BillingIntentOut)
def create_order(_: dict, user=Depends(get_current_user)):
    # Replace with Razorpay SDK create_order call in production.
    return BillingIntentOut(order_id=f"order_{user.id}_demo", amount=99900)
