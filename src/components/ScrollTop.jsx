import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi2";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button type="button" aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
      className="fixed bottom-4 right-4 z-30 inline-flex size-12 items-center justify-center rounded-lg bg-secondary text-primary shadow-lg hover:bg-[#f0c158]">
      <HiArrowUp size={22} aria-hidden="true" />
    </button>
  );
}
