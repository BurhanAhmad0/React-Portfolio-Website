import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiArrowDownTray } from "react-icons/hi2";
import avatar480 from "../assets/avatar-480.webp";
import avatar960 from "../assets/avatar-960.webp";
import { LINKS, SITE } from "../data/profile.js";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container-page grid items-center gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <p className="eyebrow">Hi, I&rsquo;m</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {SITE.name}
            <span className="mt-1 block text-secondary">{SITE.role}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I build and ship web applications from interface to API with React, Next.js,
            Node.js and MongoDB. Based in {SITE.location}, I take on freelance projects and
            I&rsquo;m studying Computer Science.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View projects</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
            <a href={LINKS.resume} className="btn btn-ghost" target="_blank" rel="noopener">
              <HiArrowDownTray aria-hidden="true" /> Resume (PDF)
            </a>
          </div>

          <ul className="mt-8 flex gap-3">
            <li>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer"
                 aria-label="Burhan Ahmad on GitHub (opens in new tab)"
                 className="inline-flex size-11 items-center justify-center rounded-full border border-line hover:border-secondary hover:text-secondary">
                <FaGithub size={20} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"
                 aria-label="Burhan Ahmad on LinkedIn (opens in new tab)"
                 className="inline-flex size-11 items-center justify-center rounded-full border border-line hover:border-secondary hover:text-secondary">
                <FaLinkedin size={20} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <div className="rounded-3xl bg-secondary/90 pt-6">
            {/* LCP element: eager, high priority, explicit dimensions to prevent layout shift */}
            <img
              src={avatar960}
              srcSet={`${avatar480} 480w, ${avatar960} 960w`}
              sizes="(min-width: 1024px) 448px, 384px"
              width="960" height="1031"
              fetchPriority="high" decoding="async"
              alt="Illustrated portrait of Burhan Ahmad, wearing glasses and a grey suit"
              className="mx-auto h-auto w-4/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
