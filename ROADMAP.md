# Roadmap

This document outlines the **intended direction and milestones** for the `sms-ai-assistant` project.

The roadmap is intentionally lightweight and pragmatic.  
It reflects the current goals of the project, not fixed promises.

---

## 🧭 Project status

- Current version: **v0.1.0**
- Phase: **Early development / proof of concept**
- Distribution model: **Local, developer-driven setup**

The immediate goal is to reach a first **working end-to-end prototype** (`v0.2.0`).

---

## 🎯 v0.2.0 – First working prototype

**Primary goal:**

> A local, privacy-first assistant that can suggest an SMS reply via AI when using Google Messages (web).

This release focuses on **functionality over polish**.

### Backend

- Local HTTP backend (e.g. FastAPI or Express)
- Integration with Ollama for local LLM inference
- Single API endpoint for suggesting SMS replies
- Danish language support (model-dependent)
- Simple, stable request/response format

### Chrome Extension

- Minimal Chrome extension injected into Google Messages (web)
- Ability to read the latest incoming SMS from the DOM
- Manual action (e.g. button) to trigger reply suggestion
- Display or insert the suggested reply

### Explicitly out of scope

- UI polish or theming
- Configuration UI
- Authentication or persistence
- Advanced error handling
- Automated replies

---

## 🔜 v0.3.x – Refinement & usability

Potential improvements after `v0.2.0`:

- Multiple reply suggestions
- Tone control (e.g. informal / neutral / professional)
- Improved prompt engineering
- Better UI feedback (loading, errors)
- More robust DOM handling

Scope will be adjusted based on real usage and feedback.

---

## 🔮 v0.4.x and beyond – Exploration phase

Ideas that may be explored later:

- Message classification (work vs personal)
- Conversation context (limited history)
- Keyboard shortcuts
- Extension settings page
- Improved cross-language support

No commitment is made for these features.

---

## 🟢 v1.0.0 – Stable release (future)

A `v1.0.0` release may be considered when:

- The core architecture feels stable
- The extension ↔ backend interface is unlikely to change
- The project can be used without frequent breaking changes
- Documentation includes a clear “Getting Started” guide

There is **no fixed timeline** for this milestone.

---

## 🧠 Philosophy

- Focus on **local-first, privacy-first** design
- Releases represent **meaningful milestones**, not perfection
- Simplicity and transparency are preferred over feature count
- The roadmap may change as the project evolves

---

## 🤝 Feedback

Ideas, suggestions, and discussions are welcome.  
Please open an issue if you would like to propose changes to this roadmap.
