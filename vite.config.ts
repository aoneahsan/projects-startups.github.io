import { sentryVitePlugin } from '@sentry/vite-plugin';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { config as dotEnvConfig } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

dotEnvConfig();

const _env = process.env;

const _filePath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filePath);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy(),
    sentryVitePlugin({
      org: 'aoneahsan',
      project: 'reflectify',
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  server: {
    port: 6001,
  },

  build: {
    sourcemap: _env.UPLOAD_SOURCEMAPS === 'true',
  },
});
