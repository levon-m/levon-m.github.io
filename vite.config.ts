import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Change this base path to match your GitHub Pages URL
  // For username.github.io repos, use '/'
  // For project repos (username.github.io/repo-name), use '/repo-name/'
  base: '/',
})
