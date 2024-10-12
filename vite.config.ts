import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "src"),
      "@mappers": path.resolve(__dirname, "src/mappers"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@domain": path.resolve(__dirname, "src/domain"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@services": path.resolve(__dirname, "src/services"),
    },
  },
  plugins: [react()],
  server: { port: 3000, open: true },
});
