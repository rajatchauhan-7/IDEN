import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
    return {
          plugins: [
              react(),
              tailwindcss(),
              {
                  name: 'html-rewrite',
                  configureServer(server) {
                      server.middlewares.use((req, res, next) => {
                          if (req.url) {
                              const url = new URL(req.url, 'http://localhost');
                              if (url.pathname === '/app' || url.pathname === '/app/') {
                                  req.url = '/app.html' + url.search;
                              } else if (url.pathname === '/privacy' || url.pathname === '/privacy/') {
                                  req.url = '/privacy.html' + url.search;
                              } else if (url.pathname === '/terms' || url.pathname === '/terms/') {
                                  req.url = '/terms.html' + url.search;
                              }
                          }
                          next();
                      });
                  }
              }
          ],
          resolve: {
                  alias: {
                             '@': path.resolve(__dirname, '.'),
                  },
          },
          build: {
                  rollupOptions: {
                            input: {
                                        main: path.resolve(__dirname, 'index.html'),
                                        app: path.resolve(__dirname, 'app.html'),
                            },
                            external: [],
                  },
                  commonjsOptions: {
                            transformMixedEsModules: true,
                  },
          },
          optimizeDeps: {
                  include: ['react', 'react-dom', 'motion/react', 'recharts', 'lucide-react', 'firebase/app', 'firebase/auth', 'firebase/firestore'],
          },
    };
});

