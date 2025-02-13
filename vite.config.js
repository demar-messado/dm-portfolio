import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Determine if we are in production or development
const isProduction = process.env.NODE_ENV === 'production';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isProduction ? '/dm-portfolio/' : '/',
})
