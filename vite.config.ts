// vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Buradaki base: './' ayarınız doğru.
export default defineConfig({
  base: './', // Capacitor için gerekli
  plugins: [react()],
})
