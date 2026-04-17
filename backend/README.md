# sms-ai-assistant – Backend

This directory contains the **local backend service** for the `sms-ai-assistant` project.

The backend is responsible for receiving SMS text, generating reply suggestions using a local language model (via Ollama), and returning those suggestions to the Chrome extension.

All processing happens **locally** on the user's machine.

---

## 🎯 Purpose

The backend serves as a lightweight **AI orchestration layer**:

- Exposes a simple HTTP API
- Handles prompt construction and response formatting
- Communicates with a locally running Ollama instance
- Keeps browser logic and AI logic cleanly separated

The backend is intentionally minimal and designed for easy iteration.

---

## 🧠 High-level responsibilities

- Receive SMS text as input
- Generate one or more reply suggestions
- Enforce basic constraints (language, tone, length)
- Return structured JSON responses

The backend is **stateless** by design.

---

## 🏗️ Project structure

```

backend/
├── app/
│ ├── main.py # FastAPI application entrypoint
│ ├── api.py # HTTP API endpoints
│ └── models.py # Request/response schemas
│
├── requirements.txt
└── README.md

```

---

## 🚀 Getting started (development)

### Requirements

- Python 3.10+
- `pip` or equivalent package manager

### Install dependencies

From the `backend/` directory:

```bash
pip install -r requirements.txt
```

### Run the backend locally

```bash
uvicorn app.main:app --reload
```

The backend will be available at:

- API: <http://localhost:8000>
- API docs (Swagger UI): <http://localhost:8000/docs>

---

## 🔌 API overview

### `POST /suggest-reply`

Suggests one or more SMS replies based on an incoming message.

**Request body:**

```json
{
  "message": "Hej, jeg bliver lidt forsinket i dag"
}
```

**Response body:**

```json
{
  "suggestions": ["Det er helt fint 😊 Vi ses bare lidt senere."]
}
```

The exact behavior and response quality depend on the configured language model and prompt logic.

---

## 🔐 Privacy & data handling

- No data is stored
- No external services are contacted
- The backend communicates only with:
  - the local browser (Chrome extension)
  - the local Ollama service

SMS content never leaves the machine.

---

## 🚧 Project status

The backend is currently in **early development**.

- APIs may change
- Prompt logic is experimental
- Error handling is intentionally minimal

Stability and configurability will improve over time.

---

## 🔮 Planned improvements

- Ollama integration for local inference
- Improved prompt engineering
- Multiple reply suggestions
- Better validation and error handling

See the root `ROADMAP.md` for details.

---

## 🤝 Contributing

The backend is intentionally simple and hackable.

Feedback, ideas, and improvements are welcome via issues or pull requests.
