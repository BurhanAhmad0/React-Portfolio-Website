import { FaWhatsapp } from "react-icons/fa6";
import { SITE, LINKS, mailtoUrl, whatsappUrl } from "../../data/profile.js";
import { ERROR_COPY } from "../../data/assistant.js";

// Only these hosts become clickable links; anything else the model writes stays plain text.
const LINKABLE = [/^(www\.)?github\.com$/, /^(www\.)?linkedin\.com$/, /^wa\.me$/, /^(www\.)?fiverr\.com$/, /^burhanahmad\.netlify\.app$/, /\.vercel\.app$/];
const TOKEN = /(https?:\/\/[^\s<>"')]+|[\w.+-]+@[\w-]+\.[\w.-]+)/g;

function linkify(text) {
  return text.split(TOKEN).map((part, i) => {
    if (i % 2 === 0) return part;
    if (part === SITE.email) return <a key={i} href={`mailto:${SITE.email}`} className="underline underline-offset-2 hover:text-accent-text">{part}</a>;
    try {
      const url = new URL(part.replace(/[.,;:!?]+$/, ""));
      if (url.protocol === "https:" && LINKABLE.some((re) => re.test(url.hostname))) {
        return <a key={i} href={url.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent-text">{part}</a>;
      }
    } catch { /* not a URL */ }
    return part;
  });
}

/** One chat bubble. Text is always rendered as text (never as HTML). */
export default function MessageBubble({ message }) {
  const isUser = message.role === "user";
  return (
    <div className={`assistant-msg flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] whitespace-pre-wrap rounded-lg px-4 py-2.5 text-[0.9375rem] leading-relaxed [overflow-wrap:anywhere] ${
          isUser ? "rounded-br-sm bg-ink text-paper" : "rounded-bl-sm border border-line bg-white/90 text-ink"
        } ${message.error ? "!border-[#b3261e]" : ""}`}
      >
        {isUser ? message.content : linkify(message.content)}
        {message.error && (
          <span className="mt-2 block text-sm">
            {ERROR_COPY.contactHint}{" "}
            <a className="underline underline-offset-2" href={mailtoUrl()}>Email</a>
            {" · "}
            <a className="inline-flex items-center gap-1 underline underline-offset-2" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp aria-hidden="true" size={13} />WhatsApp<span className="sr-only"> (opens in new tab)</span>
            </a>
            {" · "}
            <a className="underline underline-offset-2" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (opens in new tab)</span></a>
          </span>
        )}
      </div>
    </div>
  );
}
