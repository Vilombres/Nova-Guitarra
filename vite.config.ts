
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  define: {
    // Esto permite que process.env.API_KEY funcione en el navegador
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  }
});
