import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LINKS, NAV, SITE } from "../data/profile.js";

export default function Footer({ home = true }) {
  const prefix = home ? "" : "/";
  const icon = "inline-flex size-11 items-center justify-center border border-line-strong hover:border-ink";
  return (
    <footer className="border-t border-line">
      <div className="container-page grid gap-8 py-10 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <p className="text-lg font-semibold tracking-[-0.03em]">{SITE.name}</p>
          <p className="mt-1 text-sm text-muted">Freelance {SITE.role}, {SITE.location}</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-5">
          <ul className="flex flex-wrap gap-x-7 text-sm">
            {NAV.map((n) => <li key={n.id}><a className="u-link inline-flex min-h-11 items-center" href={`${prefix}#${n.id}`}>{n.label}</a></li>)}
            <li><Link className="u-link inline-flex min-h-11 items-center" to="/blog">Blog</Link></li>
          </ul>
        </nav>
        <ul className="flex gap-2 md:col-span-2 md:justify-end">
          <li><a className={icon} href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)"><FaGithub size={18} aria-hidden="true" /></a></li>
          <li><a className={icon} href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)"><FaLinkedin size={18} aria-hidden="true" /></a></li>
        </ul>
      </div>
      <p className="border-t border-line py-5 text-center text-xs text-muted">&copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> {SITE.name}</p>
    </footer>
  );
}
