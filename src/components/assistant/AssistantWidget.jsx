import { useCallback, useEffect, useId, useRef, useState } from "react";
import { HiOutlineChatBubbleLeftEllipsis, HiSparkles, HiXMark } from "react-icons/hi2";
import ChatWindow from "./ChatWindow.jsx";
import { useAssistantChat } from "./useAssistantChat.js";
import "./assistant.css";

/** Floating AI chat button + chat window. Loaded lazily by AssistantLauncher. */
export default function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const windowId = `assistant-${useId().replace(/:/g, "")}`;
  const { messages, loading, send } = useAssistantChat();

  const close = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <ChatWindow open={open} messages={messages} loading={loading} onSend={send} onClose={close} windowId={windowId} />
      {/* bottom-20 keeps it clear of the existing scroll-to-top button, which sits at bottom-4 */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-controls={windowId}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        className={`assistant-fab fixed bottom-20 right-4 z-50 size-14 place-items-center rounded-full bg-ink text-paper hover:bg-accent hover:text-ink ${open ? "hidden sm:grid" : "grid"}`}
      >
        <span aria-hidden="true" className={`assistant-fab-icon ${open ? "is-open" : ""}`}>
          <HiOutlineChatBubbleLeftEllipsis size={26} className="assistant-fab-chat" />
          <HiXMark size={26} className="assistant-fab-x" />
        </span>
        {!open && <HiSparkles aria-hidden="true" size={15} className="absolute right-2.5 top-2.5 text-accent" />}
      </button>
    </>
  );
}
