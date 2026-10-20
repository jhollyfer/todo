import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Just add the Tailwind plugin
  plugins: [tailwindcss()],
})
