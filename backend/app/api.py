from fastapi import APIRouter
from .models import SuggestReplyRequest, SuggestReplyResponse

router = APIRouter()

@router.post("/suggest-reply", response_model=SuggestReplyResponse)
def suggest_reply(request: SuggestReplyRequest):
    # Fase 1: hardcoded svar (ingen AI endnu)
    return SuggestReplyResponse(
        suggestions=[
            "Det er helt fint 😊"
        ]
    )