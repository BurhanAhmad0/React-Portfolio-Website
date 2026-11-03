import { useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { LINKS, PROJECT_TYPES, SITE, mailtoUrl, whatsappUrl } from "../data/profile.js";

const EMPTY = { name: "", business: "", email: "", projectType: "", message: "", budget: "", "bot-field": "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address, like name@example.com.";
  if (!v.projectType) e.projectType = "Please choose the type of project.";
  if (!v.message.trim()) e.message = "Please describe your project.";
  else if (v.message.trim().length < 20) e.message = "Please add a little more detail (at least 20 characters) so I can give a useful reply.";
  return e;
}

function Field({ id, label, required, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label} {required ? <span aria-hidden="true" className="text-accent-text">*</span> : <span className="font-normal text-muted">(optional)</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1 text-xs text-muted">{hint}</p>}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-[#b3261e]">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const formRef = useRef(null);
  const busy = useRef(false); // synchronous guard against double submits

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));
  const aria = (k) => ({ "aria-invalid": errors[k] ? "true" : undefined, "aria-describedby": errors[k] ? `${k}-error` : undefined });

  const summary = () =>
    `Name: ${values.name}\nBusiness: ${values.business || "-"}\nEmail: ${values.email}\nProject type: ${values.projectType}\nBudget: ${values.budget || "-"}\n\n${values.message}`;

  async function onSubmit(ev) {
    ev.preventDefault();
    if (busy.current) return;
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) { formRef.current.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus(); return; }
    if (values["bot-field"]) { setStatus("success"); return; } // honeypot: bots only

    busy.current = true; setStatus("submitting");
    const ctrl = new AbortController(); const timer = setTimeout(() => ctrl.abort(), 15000);
    try {
      const res = await fetch("/", {
        method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, signal: ctrl.signal,
        body: new URLSearchParams({ "form-name": "project-inquiry", ...Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.trim()])), "bot-field": "" }).toString(),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success"); setValues(EMPTY);
    } catch { setStatus("error"); }
    finally { clearTimeout(timer); busy.current = false; }
  }

  const direct = "u-link inline-flex min-h-11 items-center gap-3";
  return (
    <section id="contact" className="section border-t border-line" aria-labelledby="contact-title">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p className="eyebrow"><b>05</b>Contact</p>
          <h2 id="contact-title" className="mt-5 text-[clamp(2.25rem,4.6vw,3.75rem)]">Tell me about your project</h2>
          <p className="mt-6 max-w-sm text-muted">
            A few lines is enough to start. I&rsquo;ll read your message personally and reply by email or WhatsApp.
          </p>
          <ul className="mt-8 space-y-1 text-[0.95rem]">
            <li><a className={direct} href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden="true" size={20} /> Message me on WhatsApp<span className="sr-only"> (opens in new tab)</span></a></li>
            <li><a className={direct} href={mailtoUrl()}><FaEnvelope aria-hidden="true" size={18} /> {SITE.email}</a></li>
            <li><a className={direct} href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin aria-hidden="true" size={18} /> LinkedIn<span className="sr-only"> (opens in new tab)</span></a></li>
            <li><a className={direct} href={LINKS.github} target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" size={18} /> GitHub<span className="sr-only"> (opens in new tab)</span></a></li>
          </ul>
        </div>

        {/* `data-netlify` makes Netlify Forms detect this form in the built HTML. */}
        <form ref={formRef} name="project-inquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field"
              onSubmit={onSubmit} noValidate className="space-y-7 lg:col-span-6 lg:col-start-7" netlify>
          <input type="hidden" name="form-name" value="project-inquiry" />
          <p className="hidden" aria-hidden="true"><label>Leave this field empty
            <input name="bot-field" tabIndex={-1} autoComplete="off" value={values["bot-field"]} onChange={set("bot-field")} /></label></p>

          <div className="grid gap-7 sm:grid-cols-2">
            <Field id="name" label="Your name" required error={errors.name}>
              <input id="name" name="name" autoComplete="name" maxLength={100} className="field" value={values.name} onChange={set("name")} required {...aria("name")} />
            </Field>
            <Field id="business" label="Business name">
              <input id="business" name="business" autoComplete="organization" maxLength={120} className="field" value={values.business} onChange={set("business")} />
            </Field>
          </div>
          <Field id="email" label="Email" required error={errors.email}>
            <input id="email" name="email" type="email" autoComplete="email" maxLength={254} className="field" value={values.email} onChange={set("email")} required {...aria("email")} />
          </Field>
          <Field id="projectType" label="Project type" required error={errors.projectType}>
            <select id="projectType" name="projectType" className="field" value={values.projectType} onChange={set("projectType")} required {...aria("projectType")}>
              <option value="">Select one…</option>
              {PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </Field>
          <Field id="message" label="Project description" required error={errors.message}>
            <textarea id="message" name="message" rows={5} maxLength={3000} className="field resize-y" value={values.message} onChange={set("message")} required {...aria("message")} />
          </Field>
          <Field id="budget" label="Budget range" hint="For example: PKR 50,000–100,000, or $300–500. Leave blank if you’re not sure yet.">
            <input id="budget" name="budget" maxLength={80} className="field" value={values.budget} onChange={set("budget")} />
          </Field>

          <button type="submit" className="btn w-full sm:w-auto" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send project inquiry"}
          </button>

          <div role="status" aria-live="polite">
            {status === "success" && <p className="border border-line bg-surface p-4">Thank you. Your inquiry was sent, and I&rsquo;ll reply by email soon.</p>}
            {status === "error" && (
              <div className="border border-[#b3261e] p-4 text-[0.95rem]">
                <p>Sorry, your inquiry couldn&rsquo;t be sent from here. Nothing has been lost, and you can reach me directly:</p>
                <p className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  <a className="link-arrow" href={mailtoUrl("Project inquiry", summary())}>Send it by email instead</a>
                  <a className="link-arrow" href={whatsappUrl(`Hi Burhan, ${values.projectType || "I'd like to discuss a project"}. ${values.message}`.slice(0, 600))} target="_blank" rel="noopener noreferrer">Send it on WhatsApp<span className="sr-only"> (opens in new tab)</span></a>
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
