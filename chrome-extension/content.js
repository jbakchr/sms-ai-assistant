console.log("sms-ai-assistant content script loaded");

// Midlertidig helper: find seneste besked (meget simpelt)
function getLastIncomingMessageText() {
  const messageWrapper = document.querySelector(
    'mws-message-wrapper[is-last="true"][is-outgoing="false"]',
  );

  if (!messageWrapper) {
    console.warn("No last incoming message wrapper found");
    return null;
  }

  const textElement = messageWrapper.querySelector(".text-msg-content");

  if (!textElement) {
    console.warn("No text content found in message wrapper");
    return null;
  }

  // innerText bevarer linjeskift og emojis korrekt
  const text = textElement.innerText.trim();

  return text || null;
}

// Midlertidig handling: kald backend og log svaret
async function suggestReply() {
  const message = getLastIncomingMessageText();

  if (!message) {
    console.warn("No incoming message to reply to");
    return;
  }

  console.log("Last incoming message:", message);

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

// Midlertidig auto-trigger
setTimeout(suggestReply, 3000);
