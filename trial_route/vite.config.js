import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  css: {
    tailwindcss: './tailwind.config.jss',
    postcss: './postcss.config.js', // Ensure this points to the correct PostCSS config file
  },
})
