⚠️ _**This project is in early development. Expect breaking changes.**_

# sms-ai-assistant

`sms-ai-assistant` is an AI-powered assistant that suggests replies to incoming SMS messages while you are using **Google Messages in your browser**.

The assistant integrates directly into the Google Messages web UI via a Chrome extension and uses a **language model accessed through Ollama** to generate short, context-aware reply suggestions.

At the moment, the project uses **Ollama Cloud models** to achieve higher-quality language output, especially for Danish.

---

## ✨ What does it do?

When you receive an SMS in Google Messages (web):

- You click a button (e.g. **“Suggest reply”**) inside the Google Messages UI
- The assistant reads the latest incoming message
- An AI model generates a short, context-aware reply suggestion
- The suggested reply is shown or inserted into the reply field

You always stay in control — **nothing is sent automatically**, and you decide whether to send, edit, or discard the suggestion.

---

## 🎯 Goals of the project

- ✅ Work directly inside **Google Messages (web)**
- ✅ Generate **high-quality SMS reply suggestions**
- ✅ Support **Danish** (primary focus)
- ✅ Keep the solution simple, hackable, and developer-friendly
- ✅ Use Ollama’s local and/or cloud models with minimal code changes

---

## 🧠 Architecture overview

This repository is structured as a **monorepo**, containing all components needed to run the system:

```

sms-ai-assistant/
├── chrome-extension/   # Chrome extension injected into Google Messages
├── backend/            # Local HTTP service (prompt logic + Ollama integration)
└── README.md

```

### Chrome Extension
- Injects UI elements into Google Messages (e.g. a “Suggest reply” button)
- Reads the latest incoming SMS from the DOM
- Sends the message text to the local backend
- Displays or inserts the suggested reply

### Backend
- Runs as a small local HTTP service (e.g. FastAPI or Express)
- Builds prompts and controls tone/length
- Calls an Ollama model (local or cloud)
- Returns one or more reply suggestions

### Ollama
- Provides a unified interface for both **local models** and **cloud-hosted models**
- Makes it possible to switch models without changing the overall architecture

---

## ☁️ Model usage & data handling

The project currently uses **Ollama Cloud models** (for example `gpt-oss:120b-cloud`) to achieve significantly better results for Danish SMS-style language.

This means:

- SMS content is sent to Ollama’s cloud infrastructure for inference
- No SMS replies are sent automatically
- The backend acts as a thin orchestration layer

Future versions may support:
- Local-only models
- Hybrid setups (local fallback / cloud primary)
- User-configurable model selection

---

## 🚧 Project status

This project is currently in **early development / proof-of-concept**.

Current focus:
- End-to-end functionality
- High-quality reply suggestions
- Minimal, understandable architecture

Planned next steps:
- Chrome extension polish
- Better prompt tuning
- Multiple reply suggestions
- Optional configuration (tone, verbosity)

---

## 🛠 Requirements

- **macOS / Linux / Windows**
- **Chrome** (or Chromium-based browser)
- https://ollama.com installed
- An Ollama account (for cloud models)

---

## 💡 Why an AI assistant for SMS?

Many existing “smart reply” systems are:
- tightly coupled to specific platforms
- difficult to customize
- opaque in how replies are generated

`sms-ai-assistant` explores a more transparent and developer-friendly approach:

> **Bring AI-assisted replies directly into your existing messaging workflow, with full control over how suggestions are generated.**

---

## 🤝 Contributing

Ideas, feedback, and contributions are very welcome.

This project is intentionally kept simple and easy to experiment with.  
Feel free to open issues or submit pull requests.

---

## 📜 License

License to be determined.