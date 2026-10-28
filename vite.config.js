import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace "YOUR-REPOSITORY-NAME" with the exact GitHub repository name.
// If publishing at username.github.io, use "/".
export default defineConfig({
  plugins: [react()],
  base: "/YOUR-REPOSITORY-NAME/",
});