# sms-ai-assistant

`sms-ai-assistant` is a **local, privacy-friendly AI assistant** that suggests replies to incoming SMS messages while you are using **Google Messages in your browser**.

The assistant integrates directly into the Google Messages web UI via a Chrome extension and uses a **locally running language model** (via https://ollama.com) to generate reply suggestions — all on your own machine.

No cloud AI. No external APIs. Full control.

---

## ✨ What does it do?

When you receive an SMS in Google Messages (web):

1. You click a button (e.g. **“Suggest reply”**) inside the Google Messages UI
2. The assistant reads the latest incoming message
3. A local AI model generates a short, context-aware reply suggestion
4. The suggested reply is shown or inserted into the reply field

You always stay in control — **nothing is sent automatically, and nothing leaves your machine**.

---

## 🎯 Goals of the project

- ✅ Work directly inside **Google Messages (web)**
- ✅ Run **entirely locally**
- ✅ Support **Danish** (and other languages supported by the model)
- ✅ Be privacy-first and transparent
- ✅ Keep the solution simple, hackable, and developer-friendly

---

## 🧠 Architecture overview

This repository is structured as a **monorepo**, containing all components needed to run the system locally:
```

sms-ai-assistant/
├── chrome-extension/ # Chrome extension injected into Google Messages
├── backend/ # Local HTTP service (prompt logic + Ollama)
└── README.md

```

### Chrome Extension
- Injects UI elements into Google Messages (e.g. a “Suggest reply” button)
- Reads the latest incoming SMS from the DOM
- Sends the message text to the local backend
- Displays or inserts the suggested reply

### Local Backend
- Runs as a small local HTTP service (e.g. FastAPI or Express)
- Builds prompts and controls tone/length
- Calls a local Ollama model
- Returns one or more reply suggestions

### Ollama (external dependency)
- Runs the language model locally
- No cloud services involved

---

## 🔐 Privacy & data handling

Privacy is a **core design principle** of this project:

- 🔒 SMS content is never sent to third-party services
- 🖥️ All processing happens locally on your machine
- 🌍 No cloud AI, tracking, or analytics
- ✅ Suitable for both personal and professional use

---

## 🚧 Project status

This project is currently in **early development / proof-of-concept**.

Planned initial scope:
- [ ] Chrome extension skeleton
- [ ] Local backend with Ollama integration
- [ ] Button to generate reply suggestions
- [ ] Danish language support

---

## 🛠 Requirements (planned)

- **macOS / Linux / Windows**
- **Chrome** (or Chromium-based browser)
- **[Ollama](https://ollama.com)** installed locally
- A _supported language model_ (e.g. `llama3`, `mistral`)

---

## 💡 Why a local AI assistant for SMS?

Many existing “smart reply” systems:

- require cloud access
- send message content to third parties
- offer limited transparency and control

`sms-ai-assistant` explores an alternative approach:

> **Local AI, fully under your control, integrated directly into your daily workflow.**

---

## 🤝 Contributing

Ideas, feedback, and contributions are very welcome.

This project is intentionally kept simple and easy to experiment with.
Feel free to open issues or submit pull requests.

---

## 📜 License

License to be determined.