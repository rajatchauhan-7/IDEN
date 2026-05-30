import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
    return {
          plugins: [react(), tailwindcss()],
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
