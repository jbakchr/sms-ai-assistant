# sms-ai-assistant – Chrome Extension

This directory contains the **Chrome extension** part of `sms-ai-assistant`.

The extension integrates directly into **Google Messages (web)** and adds a small UI button that lets you request an AI-generated reply for the latest incoming SMS.

---

## 🎯 Purpose

The Chrome extension is responsible for all **browser-side interaction**:

- Injecting UI elements into Google Messages
- Reading the latest incoming SMS from the DOM
- Sending the message text to the local backend
- Inserting the suggested reply into the message input field

The extension does **not** generate replies itself and does **not** send messages automatically.

---

## 🧠 How it works

When Google Messages (web) is open:

1. The extension injects a 💡 **Suggest reply** button next to the message composer toolbar
2. When clicked:
   - the latest incoming SMS is extracted from the page
   - a request is sent to the local backend
3. The backend returns a suggested reply
4. The extension inserts the reply into the message input field
5. You can edit and send the message manually

---

## 🚀 Getting Started

These steps assume the backend is already running locally.

### 1. Open Chrome extensions page

In Chrome, navigate to:

```

chrome://extensions

```

---

### 2. Enable Developer Mode

Enable **Developer mode** using the toggle in the top-right corner.

---

### 3. Load the extension

1. Click **Load unpacked**
2. Select the `chrome-extension/` directory from this repository

If successful, you should see **“SMS AI Assistant”** listed among your installed extensions.

---

### 4. Verify it works

1. Open: <https://messages.google.com/web>
2. Open a conversation with an incoming message
3. Look for the 💡 button next to the message input area
4. Click the button
5. A suggested reply should appear in the input field

If nothing happens:

- open Chrome DevTools
- check the Console tab for logs or errors

---

## ⚠️ Notes & limitations

- The extension only works on **Google Messages (web)**
- Chrome (or Chromium-based browsers) only
- Requires the backend to be running on `http://localhost:8000`
- UI is intentionally minimal in this early version
- DOM selectors may break if Google changes the Messages web UI

---

## 🔒 Privacy

- The extension does **not** send messages automatically
- SMS content is sent only to the local backend
- AI inference is currently performed via Ollama Cloud (see main README)
- The extension does not store any data

---

## 🧪 Development status

This extension is part of a **working proof-of-concept**.

The focus is on:

- correct DOM integration
- stable end-to-end flow
- minimal, readable code

Polish and configurability may be added later.

---

## 🤝 Contributing

If you want to experiment with the extension:

- keep DOM-related changes small and well-scoped
- expect Google Messages DOM changes over time
- test changes against real conversations

Pull requests and suggestions are welcome.
