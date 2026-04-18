def build_sms_reply_prompt(message: str) -> str:
    return f"""
Du er modtageren af en SMS.

Skriv ét kort, naturligt SMS-svar på dansk.

Regler:
- Maksimalt én sætning
- Naturligt talesprog
- Ikke formelt
- Ingen forklaringer
- Ingen spørgsmål

Modtaget SMS:
{message}

SMS-svar:
""".strip()