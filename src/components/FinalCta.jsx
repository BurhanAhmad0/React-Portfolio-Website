import { FaWhatsapp } from "react-icons/fa6";
import { mailtoUrl, whatsappUrl } from "../data/profile.js";

export default function FinalCta() {
  return (
    <section className="on-dark bg-ink text-paper" aria-labelledby="cta-title">
      <div className="container-page py-24 lg:py-36">
        <p className="eyebrow">Let&rsquo;s talk</p>
        <h2 id="cta-title" className="display mt-6 max-w-[14ch] text-[clamp(2.75rem,8vw,6.5rem)]">
          Have a project in mind? <span className="text-accent">Let&rsquo;s talk about it.</span>
        </h2>
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <p className="max-w-md text-lg text-[#b4b4b4] lg:col-span-5">
            Tell me what your business needs. I&rsquo;ll give you an honest answer on whether and how I can help.
          </p>
          <div className="flex flex-wrap items-start gap-3 lg:col-span-6 lg:col-start-7">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn"><FaWhatsapp aria-hidden="true" size={20} /> Message me on WhatsApp<span className="sr-only"> (opens in new tab)</span></a>
            <a href={mailtoUrl()} className="btn btn-outline">Send an email</a>
          </div>
        </div>
      </div>
    </section>
  );
}
