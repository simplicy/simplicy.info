import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite';
// https://vitejs.dev/config/

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const API_URL = `${env.VITE_API_URL}`;

  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: API_URL,
        },
        '/closyt.png': {
          target: API_URL,
        }
      }
    }
  });
}
