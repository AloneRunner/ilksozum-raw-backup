// vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Buradaki base: './' ayarınız doğru.
export default defineConfig({
  base: './', // Capacitor için gerekli
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id) return undefined;
          const p = id.replace(/\\/g, '/');
          if (p.includes('/node_modules/')) {
            if (p.includes('/react/')) return 'vendor_react';
            if (p.includes('/react-dom/')) return 'vendor_react_dom';
            if (p.includes('/jspdf/')) return 'vendor_jspdf';
            if (p.includes('/html2canvas/')) return 'vendor_html2canvas';
            if (p.includes('/purify.es/')) return 'vendor_purify';
            if (p.includes('/lodash-es/')) return 'vendor_lodash';
            return 'vendor';
          }
          if (p.includes('/src/i18n/')) {
            if (p.includes('/src/i18n/en/')) return 'i18n_en';
            if (p.includes('/src/i18n/tr/')) return 'i18n_tr';
            if (p.includes('/src/i18n/de/')) return 'i18n_de';
            if (p.includes('/src/i18n/fr/')) return 'i18n_fr';
            if (p.includes('/src/i18n/nl/')) return 'i18n_nl';
            if (p.includes('/src/i18n/az/')) return 'i18n_az';
            return 'i18n';
          }
        }
      }
    }
  }
})
