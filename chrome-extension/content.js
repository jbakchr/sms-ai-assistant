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

  try {
    const res = await fetch("http://localhost:8000/suggest-reply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    const suggestedReply = data.suggestions[0];

    console.log("Suggested reply:", suggestedReply);

    // ✅ INDSÆT I INPUTFELTET
    insertTextIntoInput(suggestedReply);
  } catch (error) {
    console.error("Failed to fetch AI reply:", error);
  }
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

function getMessageInputTextarea() {
  return document.querySelector("textarea[data-e2e-message-input-box]");
}

function insertTextIntoInput(text) {
  const textarea = getMessageInputTextarea();
  if (!textarea) {
    console.warn("Message input textarea not found");
    return;
  }

  // Sæt teksten
  textarea.value = text;

  // Fortæl Angular at inputtet er ændret
  textarea.dispatchEvent(new Event("input", { bubbles: true }));

  // Sæt cursor til slutningen (UX)
  textarea.focus();
  textarea.setSelectionRange(textarea.value.length, textarea.value.length);
}
``;
