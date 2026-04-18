# Roadmap

This document outlines the **intended direction and milestones** for the `sms-ai-assistant` project.

The roadmap is intentionally lightweight and pragmatic.  
It reflects current goals and learnings, not fixed promises.

---

## 🧭 Project status

- Current version: **v0.1.0**
- Phase: **Early development / proof of concept**
- Distribution model: **Local backend with Ollama (cloud models)**

The immediate goal is to reach a first **working end-to-end prototype** (`v0.2.0`) with high-quality SMS reply suggestions.

---

## 🎯 v0.2.0 – First working prototype

**Primary goal:**

> A working assistant that can suggest high-quality SMS replies in Danish while using Google Messages (web).

This release focuses on **quality and correctness over polish**.

### Backend

- Local HTTP backend (e.g. FastAPI or Express)
- Integration with Ollama using **cloud-hosted models**
- Single, stable API endpoint for suggesting SMS replies
- Prompt logic optimized for Danish SMS-style language
- Simple request/response format

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

- Multiple reply suggestions per message
- Tone control (e.g. informal / neutral / professional)
- Improved prompt tuning and response filtering
- Better UI feedback (loading, errors)
- More robust DOM handling in Google Messages

Scope will be adjusted based on usage and feedback.

---

## 🔮 v0.4.x and beyond – Exploration phase

Ideas that may be explored later:

- Hybrid model setup (cloud primary, local fallback)
- Message classification (e.g. work vs personal)
- Limited conversation context
- Keyboard shortcuts
- Extension settings page
- Improved cross-language support

No commitment is made for these features.

---

## 🟢 v1.0.0 – Stable release (future)

A `v1.0.0` release may be considered when:

- The core architecture feels stable
- The extension ↔ backend interface is unlikely to change
- The assistant can be used without frequent breaking changes
- Documentation includes a clear “Getting Started” guide

There is **no fixed timeline** for this milestone.

---

## 🧠 Philosophy

- Focus on **quality of suggestions**, especially for Danish
- Be pragmatic about model choice (local vs cloud)
- Prefer simplicity and transparency over feature count
- Releases represent **meaningful milestones**, not perfection
- The roadmap may change as the project evolves

---

## 🤝 Feedback

Ideas, suggestions, and discussions are welcome.

Please open an issue if you would like to propose changes to this roadmap.
