import { useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import { LINKS, SITE } from "../data/profile.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LIMITS = { name: 100, email: 254, message: 3000 };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address, like name@example.com.";
  if (!v.message.trim()) e.message = "Please write a message.";
  else if (v.message.trim().length < 10) e.message = "Your message is a little short, so please add a few more details.";
  return e;
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label} <span aria-hidden="true" className="text-secondary">*</span></label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-[#ff9e95]">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "", "bot-field": "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const formRef = useRef(null);
  const submitting = useRef(false); // synchronous guard against double submits

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));
  const aria = (k) => ({
    "aria-invalid": errors[k] ? "true" : undefined,
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
  });

  async function onSubmit(ev) {
    ev.preventDefault();
    if (submitting.current) return;

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      formRef.current.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
    // Honeypot: real people never see this field. Pretend success, send nothing.
    if (values["bot-field"]) { setStatus("success"); return; }

    submitting.current = true;
    setStatus("submitting");
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 15000);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          "bot-field": "",
        }).toString(),
        signal: ctrl.signal,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      setValues({ name: "", email: "", message: "", "bot-field": "" });
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timer);
      submitting.current = false;
    }
  }

  return (
    <section id="contact" className="section border-t border-line" aria-labelledby="contact-title">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="mt-3 text-3xl font-bold sm:text-4xl">Let&rsquo;s work together</h2>
          <p className="mt-4 text-muted">
            Have a project in mind, or want to talk about a role? Send a message and I&rsquo;ll get
            back to you by email.
          </p>
          <ul className="mt-8 space-y-4">
            <li>
              <a className="inline-flex items-center gap-3 hover:text-secondary" href={`mailto:${SITE.email}`}>
                <FaEnvelope aria-hidden="true" /> {SITE.email}
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-3 hover:text-secondary" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin aria-hidden="true" /> LinkedIn <span className="sr-only">(opens in new tab)</span>
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-3 hover:text-secondary" href={LINKS.github} target="_blank" rel="noopener noreferrer">
                <FaGithub aria-hidden="true" /> GitHub <span className="sr-only">(opens in new tab)</span>
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-3 hover:text-secondary" href={LINKS.fiverr} target="_blank" rel="noopener noreferrer">
                <SiFiverr aria-hidden="true" /> Hire me on Fiverr <span className="sr-only">(opens in new tab)</span>
              </a>
            </li>
          </ul>
        </div>

        {/* `data-netlify` makes Netlify Forms detect this form in the built HTML. */}
        <form ref={formRef} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field"
              onSubmit={onSubmit} noValidate className="card space-y-5 p-6">
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden" aria-hidden="true">
            <label>Leave this field empty
              <input name="bot-field" tabIndex={-1} autoComplete="off" value={values["bot-field"]} onChange={set("bot-field")} />
            </label>
          </p>

          <Field id="name" label="Name" error={errors.name}>
            <input id="name" name="name" type="text" autoComplete="name" maxLength={LIMITS.name}
                   className="field" value={values.name} onChange={set("name")} required {...aria("name")} />
          </Field>
          <Field id="email" label="Email" error={errors.email}>
            <input id="email" name="email" type="email" autoComplete="email" maxLength={LIMITS.email}
                   className="field" value={values.email} onChange={set("email")} required {...aria("email")} />
          </Field>
          <Field id="message" label="Message" error={errors.message}>
            <textarea id="message" name="message" rows={5} maxLength={LIMITS.message}
                      className="field resize-y" value={values.message} onChange={set("message")} required {...aria("message")} />
          </Field>

          <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send message"}
          </button>

          <div role="status" aria-live="polite">
            {status === "success" && (
              <p className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-3 text-emerald-300">
                Thanks, your message was sent. I&rsquo;ll reply by email soon.
              </p>
            )}
            {status === "error" && (
              <p className="rounded-lg border border-red-400/40 bg-red-400/10 p-3 text-red-200">
                Sorry, your message couldn&rsquo;t be sent. Please try again, or email me directly at{" "}
                <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
