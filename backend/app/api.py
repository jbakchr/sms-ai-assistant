from fastapi import APIRouter

from .models import SuggestReplyRequest, SuggestReplyResponse
from .ollama_client import generate_reply
from .prompts.sms_reply import build_sms_reply_prompt
from .utils.text_cleaning import clean_reply

router = APIRouter()

@router.post("/suggest-reply", response_model=SuggestReplyResponse)
def suggest_reply(request: SuggestReplyRequest):
    prompt = build_sms_reply_prompt(request.message)

    raw_reply = generate_reply(prompt)
    reply = clean_reply(raw_reply)

    return SuggestReplyResponse(
        suggestions=[reply]
    )