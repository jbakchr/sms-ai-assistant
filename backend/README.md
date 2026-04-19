# sms-ai-assistant – Backend

This directory contains the **backend service** used by `sms-ai-assistant`.

The backend runs locally and exposes a small HTTP API that generates SMS reply suggestions using **Ollama Cloud models**.  
It is designed to be simple, stateless, and easy to understand.

---

## 🎯 Purpose

The backend acts as a lightweight orchestration layer between:

- the Chrome Extension (UI)
- the Ollama model (AI inference)

Its responsibilities are intentionally limited to:

- receiving SMS text
- building prompts
- calling Ollama
- cleaning and returning suggestions

---

## 🧠 High-level behavior

1. The Chrome extension sends the latest incoming SMS to the backend
2. The backend constructs a prompt optimized for Danish SMS replies
3. Ollama Cloud generates a reply suggestion
4. The backend post-processes the text
5. A suggestion is returned as JSON

The backend **does not** store data or send messages automatically.

---

## 🏗️ Project structure

```

backend/
├── app/
│   ├── api.py              # HTTP endpoints
│   ├── main.py             # FastAPI application
│   ├── models.py           # Request/response models
│   ├── ollama\_client.py    # Ollama integration
│   ├── prompts/            # Prompt construction
│   └── utils/              # Text post-processing helpers
│
├── requirements.txt
└── README.md

```

---

## 🚀 Getting Started

These steps assume you have already cloned the repository.

### 1. Requirements

You will need:

- **Python 3.10+**
- **Ollama** installed: https://ollama.com
- An **Ollama account** (for cloud model access)
- Internet access

---

### 2. Install dependencies

From the `backend/` directory:

```bash
pip install -r requirements.txt
```

---

### 3. Sign in to Ollama (one-time)

Cloud models require authentication:

```bash
ollama signin
```

This links your local Ollama installation to your account.

---

### 4. Start the backend

```bash
uvicorn app.main:app --reload
```

If successful, you should see output indicating the server is running.

The API will be available at:

    http://localhost:8000

Interactive API docs:

    http://localhost:8000/docs

---

## 🔌 API

### `POST /suggest-reply`

Generate a reply suggestion for an incoming SMS.

**Request body:**

```json
{
  "message": "Hej, jeg bliver 10 minutter forsinket"
}
```

**Response body:**

```json
{
  "suggestions": ["Det er helt fint, vi ses bare lidt senere."]
}
```

Currently, one suggestion is returned.

---

## ☁️ Model usage

The backend uses an **Ollama Cloud model** by default:

- `gpt-oss:120b-cloud`

This model was chosen because smaller local models did not produce reliable Danish SMS-style replies.

The model can be changed in `app/ollama_client.py`.

The architecture allows future support for:

- different cloud models
- local-only models
- hybrid setups

---

## ⚠️ Data handling

- SMS text is sent from the browser to the local backend
- The backend forwards prompts to Ollama Cloud
- No data is stored by the backend
- No messages are sent automatically

The backend is stateless.

---

## 🧪 Project status

The backend is part of a **working proof-of-concept**.

Current focus:

- correctness of reply suggestions
- stability of the API
- simplicity of the codebase

Error handling, configuration, and optimization are intentionally minimal.

---

## 🔮 Possible future improvements

- Multiple suggestions per request
- Configurable tone or verbosity
- Local model fallback
- More robust error handling
- Environment-based configuration

See the root `ROADMAP.md` for more context.

---

## 🤝 Contributing

If you want to experiment or improve the backend:

- keep changes small and readable
- avoid unnecessary abstractions
- document behavioral changes clearly

Pull requests and feedback are welcome.
