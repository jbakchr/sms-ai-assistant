# Roadmap

This document outlines the **intended direction and scope** of the `sms-ai-assistant` project.

The roadmap is intentionally lightweight and flexible.  
It reflects current priorities and learning goals—not fixed promises.

---

## 🧭 Project status

- Current version: **v0.2.0**
- Phase: **First usable prototype**
- Target audience: Developers and experimenters

The project now works end-to-end and can be used by others following the documentation.

---

## ✅ v0.2.0 – First usable prototype (completed)

**Goal:**  
Deliver a working, end-to-end AI-assisted SMS reply flow inside Google Messages (web).

### Delivered features

- Chrome extension integration with Google Messages (web)
- UI button to request reply suggestions
- Automatic insertion of AI-generated replies into the message input field
- Local FastAPI backend
- Integration with Ollama Cloud models
- Clear project documentation and setup guides

This release establishes a solid technical foundation without focusing on polish or configurability.

---

## 🔜 v0.3.x – Iteration & quality improvements

Likely next steps focus on **incremental improvements**, not new product scope.

Possible areas:

- Better UX feedback (loading state, disabled button while generating)
- Multiple reply suggestions per request
- Improved error handling and resilience
- Minor UI refinements
- Internal refactoring and cleanup

Exact scope will be driven by usage and feedback.

---

## 🔮 v0.4.x – Exploration phase

Ideas that _may_ be explored later if the project continues:

- Optional tone or style variations
- Hybrid model setup (cloud primary, local fallback)
- Limited conversation context
- Simple configuration options
- Improved cross-language support

There is **no commitment** to implement these features.

---

## 🟢 v1.0.0 – Stable release (future, optional)

A v1.0.0 release may be considered if:

- The core UX feels stable
- The extension ↔ backend interface stops changing
- The project sees sustained interest or usage
- Configuration and robustness improve

There is **no timeline** or guarantee for this milestone.

---

## 🧠 Project philosophy

- Solve concrete, everyday problems
- Prefer simple, readable solutions over abstraction
- Treat AI as a helper—not an automator
- Stay honest about trade-offs and limitations
- Keep scope small and intentional

The roadmap may change as the project and its usage evolve.
