def clean_reply(text: str) -> str:
    text = text.strip()

    # Fjern citationstegn i start/slut
    if text.startswith('"') and text.endswith('"'):
        text = text[1:-1].strip()

    return text