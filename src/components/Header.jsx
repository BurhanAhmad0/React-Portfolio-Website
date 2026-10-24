import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { NAV, SITE } from "../data/profile.js";

/** @param {{ home?: boolean }} props - `home` = on the landing page (hash links stay on-page) */
export default function Header({ home = true }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const buttonRef = useRef(null);
  const prefix = home ? "" : "/";

  // Highlight the nav link of the section currently in view.
  useEffect(() => {
    if (!home) return;
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [home]);

  // Esc closes the mobile menu and returns focus to its button.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") { setOpen(false); buttonRef.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = (id) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-secondary ${
      active === id ? "text-secondary" : "text-white"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/80">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="inline-flex min-h-11 items-center text-lg font-bold tracking-tight">
          {SITE.name}<span className="text-secondary">.</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`${prefix}#${n.id}`} className={linkClass(n.id)}
                   aria-current={active === n.id ? "location" : undefined}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button ref={buttonRef} type="button"
          className="md:hidden inline-flex size-11 items-center justify-center rounded-md border border-line"
          aria-expanded={open} aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}>
          {open ? <HiXMark size={24} aria-hidden="true" /> : <HiBars3 size={24} aria-hidden="true" />}
        </button>
      </div>

      <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="md:hidden border-t border-line bg-primary">
        <ul className="container-page py-3">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`${prefix}#${n.id}`} onClick={() => setOpen(false)}
                 className="block rounded-md px-3 py-3 text-base font-medium hover:text-secondary">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
