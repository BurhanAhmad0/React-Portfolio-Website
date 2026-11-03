import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { NAV, SITE } from "../data/profile.js";

/** @param {{ home?: boolean }} props `home` = on the landing page (hash links stay on-page) */
export default function Header({ home = true }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const buttonRef = useRef(null);
  const prefix = home ? "" : "/";

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

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") { setOpen(false); buttonRef.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-[2px]">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="inline-flex min-h-11 items-center text-[1.0625rem] font-semibold tracking-[-0.03em]">
          {SITE.name}<span aria-hidden="true" className="ml-0.5 size-1.5 translate-y-[3px] bg-accent" />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`${prefix}#${n.id}`} aria-current={active === n.id ? "location" : undefined}
                   className="u-link inline-flex min-h-11 items-center text-sm font-medium">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href={`${prefix}#contact`} className="btn !min-h-10 !px-4 !py-2 !text-sm hidden sm:inline-flex">Discuss your project</a>
          <button ref={buttonRef} type="button" aria-expanded={open} aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex size-11 items-center justify-center border border-line-strong">
            {open ? <HiXMark size={22} aria-hidden="true" /> : <HiBars3 size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="md:hidden border-t border-line bg-paper">
        <ul className="container-page py-2">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`${prefix}#${n.id}`} onClick={() => setOpen(false)}
                 className="flex items-baseline justify-between border-b border-line py-5 text-3xl font-semibold tracking-[-0.04em]">{n.label}<span aria-hidden="true" className="text-base text-accent-text">↗</span></a>
            </li>
          ))}
          <li className="py-6"><a href={`${prefix}#contact`} onClick={() => setOpen(false)} className="btn w-full">Discuss your project</a></li>
        </ul>
      </nav>
    </header>
  );
}
