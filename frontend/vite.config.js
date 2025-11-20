import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: './public/', // Explicitly define the public directory
  server: {
    host: '0.0.0.0', // Ensure it's accessible from the host machine
    port: 8080,
    watch: {
      usePolling: true // Needed for Vagrant/WSL to detect file changes
    }
  }
})
