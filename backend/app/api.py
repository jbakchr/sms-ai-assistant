from fastapi import APIRouter

from .models import SuggestReplyRequest, SuggestReplyResponse
from .ollama_client import generate_reply

router = APIRouter()

def build_prompt(message: str) -> str:
    return f"""
Du er en hjælpsom assistent, der foreslår korte SMS-svar.

Regler:
- Svar udelukkende på dansk
- Hold svarene korte og naturlige
- Maksimalt 1-2 sætninger
- Brug en venlig, uformel tone

Modtaget SMS:
"{message}"

Foreslå et passende SMS-svar:
""".strip()

@router.post("/suggest-reply", response_model=SuggestReplyResponse)
def suggest_reply(request: SuggestReplyRequest):
    prompt = build_prompt(request.message)
    reply = generate_reply(prompt)

    return SuggestReplyResponse(
        suggestions=[reply]
    )