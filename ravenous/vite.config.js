import { defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on the current mode (development, production, etc.)
  // The third argument '' ensures all variables are loaded, not just those prefixed with VITE_
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        '/api': {
          target: env.YELP_API_HOST || 'https://api.yelp.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              // Inject the key securely from your .env file
              if (env.YELP_API_KEY) {
                proxyReq.setHeader('Authorization', `Bearer ${env.YELP_API_KEY}`);
              }
            });
          },
        },
      },
    },
  };
});
