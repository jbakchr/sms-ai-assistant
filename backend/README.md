# sms-ai-assistant – Backend

This directory contains the **backend service** for the `sms-ai-assistant` project.

The backend is responsible for receiving SMS text, generating reply suggestions using an AI language model accessed via **Ollama**, and returning those suggestions to the Chrome extension.

The backend runs locally, while inference is currently performed using **Ollama Cloud models** for higher language quality.

---

## 🎯 Purpose

The backend acts as a lightweight **AI orchestration layer** between the browser and the language model:

- Exposes a simple local HTTP API
- Builds prompts and enforces response constraints
- Calls an Ollama model (cloud-hosted)
- Normalizes and returns reply suggestions to the UI

The backend is intentionally minimal and designed for rapid iteration.

---

## 🧠 Responsibilities

- Accept incoming SMS text
- Generate one or more suggested replies
- Control tone, length, and style of responses
- Remove unwanted artifacts (quotes, explanations, questions)
- Return structured JSON responses

The backend is **stateless** by design.

---

## 🏗️ Project structure
```

backend/
├── app/
│ ├── main.py # FastAPI application entrypoint
│ ├── api.py # HTTP API endpoints
│ ├── models.py # Request/response schemas
│ └── ollama_client.py # Ollama integration (local or cloud)
│
├── requirements.txt
└── README.md

```

---

## 🚀 Getting started (development)

### Requirements

- Python 3.10+
- `pip` (or equivalent)
- Ollama installed and configured
- An Ollama account (for cloud model access)

---

### Install dependencies

From the `backend/` directory:

```bash
pip install -r requirements.txt
````

---

### Authenticate with Ollama Cloud

You must sign in once to enable cloud models:

```bash
ollama signin
```

This links your local Ollama client to your Ollama account.

---

### Run the backend locally

```bash
uvicorn app.main:app --reload
```

The backend will be available at:

- API: <http://localhost:8000>
- API docs: <http://localhost:8000/docs>

---

## 🔌 API overview

### `POST /suggest-reply`

Generate one or more SMS reply suggestions.

**Request body:**

```json
{
  "message": "Hej, jeg bliver ca. 10 minutter forsinket"
}
```

**Response body:**

```json
{
  "suggestions": ["Det er helt fint, vi ses bare lidt senere."]
}
```

The quality and style of responses depend on the selected Ollama model and prompt logic.

---

## ☁️ Model usage

The backend currently uses **Ollama Cloud models**, for example:

- `gpt-oss:120b-cloud` (default)

Cloud models are used because they provide **significantly better results for Danish SMS-style language** than smaller local models.

The architecture allows switching between:

- Cloud models
- Local models
- Hybrid setups (future)

without changing the API or Chrome extension.

---

## ⚠️ Data handling

- SMS text is sent from the browser to the local backend
- The backend forwards the prompt to Ollama (cloud-hosted model)
- Responses are returned to the browser
- No data is stored by the backend

Inference is performed remotely when using cloud models.

---

## 🚧 Project status

The backend is in **early development**.

- API shape may change
- Prompt logic is experimental
- Error handling is minimal by design

The focus is on correctness of replies and clarity of the architecture.

---

## 🔮 Planned improvements

- Multiple reply suggestions
- Improved prompt tuning
- Optional tone selection
- Optional local/cloud model switching
- Better error handling and timeouts

See the root `ROADMAP.md` for details.

---

## 🤝 Contributing

The backend is intentionally simple and easy to modify.

Ideas, improvements, and refactoring suggestions are welcome via issues or pull requests.
