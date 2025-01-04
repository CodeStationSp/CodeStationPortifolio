import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CodeStationPortifolio/', 
  build: {
    outDir: 'build',  // Garante que o Vite construa na pasta correta
  },
})

