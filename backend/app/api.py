from fastapi import APIRouter

from .models import SuggestReplyRequest, SuggestReplyResponse
from .ollama_client import clean_reply, generate_reply

router = APIRouter()

def build_prompt(message: str) -> str:
    return f"""
Du er modtageren af en SMS.

Skriv ét kort, naturligt SMS-svar på dansk.

Regler:
- Maksimalt én sætning
- Naturligt talesprog
- Ikke formelt
- Ingen forklaringer
- Ingen spørgsmål

Modtaget SMS:
{message}

SMS-svar:
""".strip()


@router.post("/suggest-reply", response_model=SuggestReplyResponse)
def suggest_reply(request: SuggestReplyRequest):
    prompt = build_prompt(request.message)
    
    raw_reply = generate_reply(prompt)
    reply = clean_reply(raw_reply)

    return SuggestReplyResponse(
        suggestions=[reply]
    )