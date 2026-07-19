# ACE AI Gateway

Version: 1.0.0

Status: Designing

---

## Purpose

The AI Gateway is responsible for communicating with AI models.

No engine should call an AI model directly.

Instead, every engine communicates through the AI Gateway.

---

## Responsibilities

- Send prompts
- Receive responses
- Switch AI providers
- Handle API errors
- Log requests
- Track token usage

---

## Future Providers

- Claude
- OpenAI GPT
- Google Gemini
- Local LLMs
