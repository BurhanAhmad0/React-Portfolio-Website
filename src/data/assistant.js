// Copy and settings for the AI Portfolio Assistant. Edit freely.
// What the assistant KNOWS comes from src/data/profile.js (see scripts/generate-assistant-knowledge.mjs).

export const ASSISTANT_NAME = "Portfolio Assistant";

export const WELCOME =
  "Hey! 👋 I'm your AI Portfolio Assistant. Ask me anything about my developer, skills, projects, or experience!";

export const QUICK_QUESTIONS = [
  "Who is the developer?",
  "What are your skills?",
  "Show me your projects.",
  "What technologies do you use?",
  "How can I contact you?",
];

export const MAX_INPUT_CHARS = 500; // must match MAX_USER_CHARS in netlify/functions/chat.mjs
export const MAX_HISTORY = 8; // turns sent with each request

export const ERROR_COPY = {
  rate: "You're asking a lot of questions quickly. Please wait a few minutes and try again.",
  unavailable: "The assistant isn't available right now.",
  network: "I couldn't reach the assistant. Please check your connection and try again.",
  generic: "Something went wrong on my side.",
  contactHint: "You can reach Burhan directly:",
};
