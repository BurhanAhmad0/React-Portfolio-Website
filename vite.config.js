import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Note: the previous `define: { 'process.env': process.env }` was removed. It copies the build
// machine's whole environment into client code wherever `process.env` is referenced.
// Use `import.meta.env.VITE_*` for any value that is meant to be public.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
