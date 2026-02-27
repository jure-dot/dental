import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/dental/',   // 👈 OVO DODAJ
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
