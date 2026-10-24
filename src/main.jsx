import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const root = document.getElementById("root");
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// The home page is prerendered at build time (see scripts/prerender.mjs), so hydrate it.
// Other routes are served an empty shell and render on the client.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
