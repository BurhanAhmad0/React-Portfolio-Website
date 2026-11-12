export default function TypingIndicator() {
  return (
    <div className="assistant-msg flex justify-start" role="status">
      <span className="sr-only">The assistant is typing</span>
      <div aria-hidden="true" className="flex items-center gap-1.5 rounded-lg rounded-bl-sm border border-line bg-white/90 px-4 py-3.5">
        <span className="assistant-dot" />
        <span className="assistant-dot" style={{ animationDelay: ".15s" }} />
        <span className="assistant-dot" style={{ animationDelay: ".3s" }} />
      </div>
    </div>
  );
}
