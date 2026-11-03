import avatar480 from "../assets/avatar-480.webp";
import avatar960 from "../assets/avatar-960.webp";
import { SITE } from "../data/profile.js";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title">
      <div className="container-page pb-16 pt-10 lg:pb-28 lg:pt-16">
        {/* Location line, factual and verifiable */}
        <p className="flex flex-wrap items-center gap-x-3 border-t border-line pt-4 text-[0.8125rem] font-medium text-muted">
          <span>Freelance {SITE.role}</span><span aria-hidden="true">/</span><span>{SITE.location}</span>
        </p>

        <h1 id="hero-title" className="display mt-10 max-w-[15ch] text-[clamp(2.75rem,8.4vw,7rem)] sm:max-w-[16ch] lg:max-w-[17ch]">
          I build websites that help businesses <span className="accent-word">turn visitors into customers.</span>
        </h1>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="max-w-lg text-lg leading-relaxed text-muted sm:text-xl">
              I&rsquo;m {SITE.name}. I design and develop modern, responsive websites and practical web
              tools for small businesses: guesthouses, local services, shops and growing brands.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="btn">Discuss your project</a>
              <a href="#work" className="btn btn-outline">View my work</a>
            </div>
            <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-5 text-sm">
              <div><dt className="text-muted">Stack</dt><dd className="mt-1 font-medium">React, Node.js, MongoDB</dd></div>
              <div><dt className="text-muted">Freelancing</dt><dd className="mt-1 font-medium">Since 2023</dd></div>
              <div><dt className="text-muted">Reach me</dt><dd className="mt-1 font-medium">Email or WhatsApp</dd></div>
            </dl>
          </div>

          <figure className="mx-auto w-full max-w-[17rem] sm:max-w-xs lg:col-span-4 lg:col-start-9 lg:max-w-none">
            <div className="border border-line bg-surface pt-6">
              {/* LCP candidate on larger screens: eager, high priority, explicit dimensions */}
              <img src={avatar960} srcSet={`${avatar480} 480w, ${avatar960} 960w`}
                   sizes="(min-width: 1024px) 340px, 280px" width="960" height="1031"
                   fetchPriority="high" decoding="async" className="mx-auto h-auto w-[80%]"
                   alt="Illustrated portrait of Burhan Ahmad, a full-stack web developer, in glasses and a grey suit" />
            </div>
            <figcaption className="mt-3 flex justify-between text-xs font-medium text-muted"><span>Burhan Ahmad</span><span>Portrait</span></figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
