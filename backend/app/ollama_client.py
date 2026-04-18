import requests

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL_NAME = "gpt-oss:120b-cloud"

def generate_reply(prompt: str) -> str:
    response = requests.post(
        OLLAMA_URL,
        json={
            "model": MODEL_NAME,
            "prompt": prompt,
            "stream": False,
            "options": {
                "temperature": 0.15,
                "top_p": 0.85,
                "repeat_penalty": 1.1
            }
        },
        timeout=60,
    )

    response.raise_for_status()

    data = response.json()
    return data["response"].strip()