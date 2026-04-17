from fastapi import FastAPI
from .api import router

app = FastAPI(
    title="sms-ai-assistant backend",
    version="0.1.0",
    description="Local backend for suggesting SMS replies using AI"
)

app.include_router(router)