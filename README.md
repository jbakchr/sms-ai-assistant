⚠️ _**This project is in early development. Expect breaking changes.**_

# sms-ai-assistant

`sms-ai-assistant` is a Chrome-based AI assistant that suggests replies to incoming SMS messages while you are using **Google Messages (web)**.

It works by injecting a small UI element into Google Messages and calling a local backend service, which uses **Ollama Cloud models** (currently `gpt-oss:120b-cloud`) to generate high-quality SMS reply suggestions in Danish.

---

## ✨ What does it do?

When you receive an SMS in Google Messages (web):

1. You click the 💡 **Suggest reply** button next to the send button
2. The assistant reads the latest incoming message
3. An AI model generates a short, context-aware reply
4. The suggested reply is inserted into the message input field
5. You can edit the text and send it manually

Nothing is sent automatically.

---

## 🎯 Project goals

- ✅ Work directly inside **Google Messages (web)**
- ✅ Generate **high-quality SMS reply suggestions**
- ✅ Focus on **Danish language support**
- ✅ Be simple, transparent, and developer-friendly
- ✅ Keep full control in the user’s hands

---

## 🧠 Architecture overview

This repository is structured as a small **monorepo**:

```

sms-ai-assistant/
├── chrome-extension/   # Chrome extension injected into Google Messages
├── backend/            # Local HTTP service (FastAPI + Ollama)
└── README.md

```

### Chrome Extension

- Injects a 💡 button into the Google Messages UI
- Detects the latest incoming SMS
- Calls the local backend
- Inserts the suggested reply into the input field

### Backend

- Runs locally (FastAPI)
- Builds prompts and post-processes model output
- Calls Ollama (cloud model by default)
- Returns one or more reply suggestions

---

## 🚀 Getting Started

These steps should get you from **clone** to **working AI replies** in 10–15 minutes.

### 1. Prerequisites

You will need:

- **Google Chrome** (Chromium-based browser)
- **Ollama** installed: https://ollama.com
- An **Ollama account** (for cloud models)
- **Python 3.10+**
- Access to **Google Messages (web)**

---

### 2. Clone the repository

```bash
git clone https://github.com/jbakchr/sms-ai-assistant.git
cd sms-ai-assistant
```

---

### 3. Set up and start the backend

```bash
cd backend
pip install -r requirements.txt
```

Sign in to Ollama (one-time):

```bash
ollama signin
```

Start the backend:

```bash
uvicorn app.main:app --reload
```

The backend should now be running at:

    http://localhost:8000

You can verify it by opening:

    http://localhost:8000/docs

---

### 4. Load the Chrome extension

1.  Open Chrome and go to:
    chrome://extensions
2.  Enable **Developer Mode**
3.  Click **Load unpacked**
4.  Select the `chrome-extension/` folder from this repo

---

### 5. Use the assistant

1.  Open Google Messages (web):
    https://messages.google.com/web
2.  Open a conversation with an incoming message
3.  Look for the 💡 button next to the send button
4.  Click it
5.  The suggested reply will appear in the input field

---

## ☁️ Model usage

By default, the backend uses an **Ollama Cloud model**:

- `gpt-oss:120b-cloud`

This model is used because smaller local models were not reliable enough for natural Danish SMS replies.

The architecture allows switching to:

- other cloud models
- local models (future)
- hybrid setups (future)

---

## ⚠️ Limitations (current scope)

- One reply suggestion at a time
- No configuration UI
- No tone selection
- No automatic sending
- Chrome only (no Firefox/Safari)
- Google Messages (web) only

These are intentional trade-offs in this early version.

---

## 🧪 Project status

This project is currently a **working proof-of-concept**.

It is intended for:

- experimentation
- learning
- developer-driven use

The core functionality works end-to-end, but polish and configurability are still limited.

---

## 🤝 Contributing

Ideas, feedback, and pull requests are very welcome.

If you run into issues:

- please check the README first
- then open an issue with details about your setup

---

## 📜 License

License to be determined.
