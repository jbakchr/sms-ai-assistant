from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .api import router


app = FastAPI(
    title="sms-ai-assistant backend",
    version="0.1.0",
    description="Backend for AI-generated SMS replies"
)

# ✅ CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://messages.google.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)