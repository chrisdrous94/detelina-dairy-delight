import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/detelina-dairy-delight/', // 👈 Add this line!
  plugins: [react()],
})
