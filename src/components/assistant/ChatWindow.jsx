import { useEffect, useRef, useState } from "react";
import { HiPaperAirplane, HiSparkles, HiXMark } from "react-icons/hi2";
import { ASSISTANT_NAME, MAX_INPUT_CHARS, QUICK_QUESTIONS } from "../../data/assistant.js";
import MessageBubble from "./MessageBubble.jsx";
import TypingIndicator from "./TypingIndicator.jsx";

function QuickQuestions({ onPick, disabled, compact }) {
  return (
    <ul
      aria-label="Quick questions"
      className={compact ? "flex gap-2 overflow-x-auto px-4 pb-2 pt-1 [scrollbar-width:none]" : "mt-1 flex flex-wrap gap-2"}
    >
      {QUICK_QUESTIONS.map((q) => (
        <li key={q} className="shrink-0">
          <button
            type="button"
            disabled={disabled}
            onClick={() => onPick(q)}
            className="min-h-9 rounded-full border border-line-strong bg-white/70 px-3.5 py-1.5 text-[0.8125rem] font-medium text-ink transition-colors hover:border-ink hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {q}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default function ChatWindow({ open, messages, loading, onSend, onClose, windowId }) {
  const [draft, setDraft] = useState("");
  const inputRef = useRef(null);
  const endRef = useRef(null);
  const fresh = messages.length === 1; // only the welcome message so far

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 120);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    endRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "end" });
  }, [messages, loading]);

  const submit = (e) => {
    e.preventDefault();
    if (!draft.trim() || loading) return;
    onSend(draft);
    setDraft("");
  };

  return (
    <div
      id={windowId}
      role="dialog"
      aria-label={`${ASSISTANT_NAME} chat`}
      data-state={open ? "open" : "closed"}
      inert={!open}
      className="assistant-window assistant-glass fixed inset-x-3 bottom-3 z-50 flex h-[min(78dvh,640px)] flex-col overflow-hidden rounded-xl sm:inset-x-auto sm:bottom-36 sm:right-4 sm:h-[min(620px,calc(100dvh-14rem))] sm:w-[400px]"
    >
      <div className="flex items-center justify-between gap-3 border-b border-line/80 px-4 py-3">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="grid size-9 place-items-center rounded-full bg-ink text-accent"><HiSparkles size={18} /></span>
          <div>
            <p className="text-[0.9375rem] font-semibold leading-tight tracking-[-0.02em]">{ASSISTANT_NAME}</p>
            <p className="assistant-muted text-xs">Answers from Burhan&rsquo;s portfolio</p>
          </div>
        </div>
        <button type="button" onClick={onClose} aria-label="Close chat" className="inline-flex size-10 items-center justify-center rounded-full hover:bg-ink/5">
          <HiXMark size={22} aria-hidden="true" />
        </button>
      </div>

      <div role="log" aria-live="polite" aria-relevant="additions" aria-label="Conversation" className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((m) => <MessageBubble key={m.id} message={m} />)}
        {fresh && <QuickQuestions onPick={onSend} disabled={loading} />}
        {loading && <TypingIndicator />}
        <div ref={endRef} />
      </div>

      {!fresh && <QuickQuestions compact onPick={onSend} disabled={loading} />}

      <form onSubmit={submit} className="border-t border-line/80 px-3 pb-3 pt-3">
        <div className="flex items-center gap-2">
          <label htmlFor={`${windowId}-input`} className="sr-only">Your question</label>
          <input
            id={`${windowId}-input`}
            ref={inputRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            maxLength={MAX_INPUT_CHARS}
            autoComplete="off"
            placeholder="Ask about skills, projects, contact…"
            className="min-h-11 flex-1 rounded-lg border border-line-strong bg-white/90 px-3.5 text-[0.9375rem] placeholder:text-[#6b6b6b] focus-visible:border-ink"
          />
          <button
            type="submit"
            disabled={loading || !draft.trim()}
            aria-label="Send message"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-ink transition-colors hover:bg-ink hover:text-paper disabled:cursor-not-allowed disabled:opacity-50"
          >
            <HiPaperAirplane size={18} aria-hidden="true" />
          </button>
        </div>
        <p className="assistant-muted mt-2 px-1 text-[0.6875rem] leading-snug">
          AI answers can be wrong. Messages are sent to an AI service to generate replies, so please don&rsquo;t share personal details.
        </p>
      </form>
    </div>
  );
}
