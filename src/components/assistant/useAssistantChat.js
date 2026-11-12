import { useCallback, useEffect, useRef, useState } from "react";
import { ERROR_COPY, MAX_HISTORY, MAX_INPUT_CHARS, WELCOME } from "../../data/assistant.js";

let seq = 0;
const makeMessage = (role, content, extra = {}) => ({ id: ++seq, role, content, ...extra });

/** Chat state + the call to the /api/chat endpoint. UI-agnostic so it can be reused. */
export function useAssistantChat(endpoint = "/api/chat") {
  const [messages, setMessages] = useState(() => [makeMessage("assistant", WELCOME, { local: true })]);
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef(messages);
  const busy = useRef(false);
  const controller = useRef(null);
  const unmounted = useRef(false);

  useEffect(() => { messagesRef.current = messages; }, [messages]);
  useEffect(() => () => { unmounted.current = true; controller.current?.abort(); }, []);

  const send = useCallback(async (text) => {
    const content = text.trim().slice(0, MAX_INPUT_CHARS);
    if (!content || busy.current) return;
    busy.current = true;

    const userMessage = makeMessage("user", content);
    // Only real conversation turns go to the server (not the local welcome or error bubbles).
    const history = [...messagesRef.current, userMessage]
      .filter((m) => !m.local && !m.error)
      .slice(-MAX_HISTORY)
      .map(({ role, content: c }) => ({ role, content: c }));

    setMessages((m) => [...m, userMessage]);
    setLoading(true);

    const ctrl = new AbortController();
    controller.current = ctrl;
    const timer = setTimeout(() => ctrl.abort(), 15_000);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
        signal: ctrl.signal,
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && typeof data.reply === "string" && data.reply) {
        setMessages((m) => [...m, makeMessage("assistant", data.reply)]);
      } else {
        const copy = res.status === 429 ? ERROR_COPY.rate : [502, 503, 504].includes(res.status) || res.status === 404 ? ERROR_COPY.unavailable : ERROR_COPY.generic;
        setMessages((m) => [...m, makeMessage("assistant", copy, { error: true })]);
      }
    } catch {
      if (unmounted.current) return;
      setMessages((m) => [...m, makeMessage("assistant", ERROR_COPY.network, { error: true })]);
    } finally {
      clearTimeout(timer);
      busy.current = false;
      setLoading(false);
    }
  }, [endpoint]);

  return { messages, loading, send };
}
