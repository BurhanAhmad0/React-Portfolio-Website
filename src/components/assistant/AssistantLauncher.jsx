import { useEffect, useState } from "react";

/**
 * Mounts the assistant on the client only, after the page is idle, so it never affects the
 * prerendered HTML, first paint or the main JavaScript bundle.
 */
export default function AssistantLauncher() {
  const [Widget, setWidget] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const load = () => import("./AssistantWidget.jsx").then((m) => { if (!cancelled) setWidget(() => m.default); });
    const idle = "requestIdleCallback" in window;
    const id = idle ? window.requestIdleCallback(load, { timeout: 3000 }) : window.setTimeout(load, 1500);
    return () => {
      cancelled = true;
      if (idle) window.cancelIdleCallback(id); else window.clearTimeout(id);
    };
  }, []);

  return Widget ? <Widget /> : null;
}
