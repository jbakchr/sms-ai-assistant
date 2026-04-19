console.log("sms-ai-assistant loaded");

function getLastIncomingMessageText() {
  const wrapper = document.querySelector(
    'mws-message-wrapper[is-last="true"][is-outgoing="false"]',
  );
  if (!wrapper) return null;

  const textEl = wrapper.querySelector(".text-msg-content");
  if (!textEl) return null;

  return textEl.innerText.trim();
}

async function suggestReply() {
  const message = getLastIncomingMessageText();
  if (!message) {
    console.warn("No incoming message found");
    return;
  }

  const res = await fetch("http://localhost:8000/suggest-reply", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();
  console.log("Suggested reply:", data.suggestions[0]);
}

function getButtonToolbar() {
  return document.querySelector(
    "mws-message-compose-picker-buttons.inline-compose-buttons",
  );
}

function createSuggestReplyButton() {
  const button = document.createElement("button");
  button.id = "sms-ai-suggest-button";
  button.textContent = "💡";

  button.className =
    "mdc-icon-button mat-mdc-icon-button mat-mdc-button-base picker-button";

  button.style.cursor = "pointer";

  button.addEventListener("click", suggestReply);
  return button;
}

function insertButtonIfNeeded() {
  const toolbar = getButtonToolbar();
  if (!toolbar) return;

  if (document.getElementById("sms-ai-suggest-button")) return;

  const button = createSuggestReplyButton();
  toolbar.prepend(button);

  console.log("✅ Suggest reply button inserted (toolbar)");
}

/* 👉 KALD DEN MED DET SAMME */
insertButtonIfNeeded();

/* 👉 OBSERVÉR EFTERÆNDINGER */
new MutationObserver(insertButtonIfNeeded).observe(document.body, {
  childList: true,
  subtree: true,
});
