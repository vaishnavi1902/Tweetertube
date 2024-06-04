import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy : {
      // '/api/v1' : 'http://localhost:8000',
      '/api/v1' : 'https://shikshasankalp-backend.onrender.com',
     }
  },
  base : "/Tweetertube/",
  plugins: [react()],
})
