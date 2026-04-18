console.log("sms-ai-assistant content script loaded");

// Midlertidig helper: find seneste besked (meget simpelt)
function getLastMessageText() {
  const messageElements = document.querySelectorAll(
    "span[data-elevate-message-text]",
  );

  if (!messageElements.length) {
    return null;
  }

  return messageElements[messageElements.length - 1].innerText;
}

// Midlertidig handling: kald backend og log svaret
async function suggestReply() {
  const message = getLastMessageText();

  if (!message) {
    console.warn("No message found");
    return;
  }

  console.log("Last message:", message);

  try {
    const response = await fetch("http://localhost:8000/suggest-reply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    console.log("Suggested reply:", data.suggestions[0]);
  } catch (error) {
    console.error("Error calling backend:", error);
  }
}

// Midlertidig trigger (for testing)
setTimeout(suggestReply, 3000);
