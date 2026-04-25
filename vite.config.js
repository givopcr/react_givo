import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { resolve } from "node:path"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pertemuan4: resolve(__dirname, "pertemuan-4.html"),
        pertemuan5: resolve(__dirname, "pertemuan-5.html"),
        pertemuan5fix: resolve(__dirname, "pertemuan-5-fix.html"),
      },
    },
  },
})
