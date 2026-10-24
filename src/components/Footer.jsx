import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { NAV, LINKS, SITE } from "../data/profile.js";

export default function Footer({ home = true }) {
  const prefix = home ? "" : "/";
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg font-bold">{SITE.name}<span className="text-secondary">.</span></p>
          <p className="mt-2 max-w-xs text-sm text-muted">{SITE.role} building with React, Next.js, Node.js and MongoDB.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.id}><a className="text-muted hover:text-secondary" href={`${prefix}#${n.id}`}>{n.label}</a></li>
            ))}
            <li><Link className="text-muted hover:text-secondary" to="/blog">Blog</Link></li>
          </ul>
        </nav>
        <ul className="flex gap-3">
          <li><a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)"
                 className="inline-flex size-11 items-center justify-center rounded-full border border-line hover:border-secondary hover:text-secondary"><FaGithub size={18} aria-hidden="true" /></a></li>
          <li><a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)"
                 className="inline-flex size-11 items-center justify-center rounded-full border border-line hover:border-secondary hover:text-secondary"><FaLinkedin size={18} aria-hidden="true" /></a></li>
        </ul>
      </div>
      <div className="border-t border-line py-5 text-center text-sm text-muted">
        <p>&copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> {SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
