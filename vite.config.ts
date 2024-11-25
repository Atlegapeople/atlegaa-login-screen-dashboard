import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import basicSsl from '@vitejs/plugin-basic-ssl';
import type { ServerOptions } from 'vite';

export default defineConfig({
  plugins: [react(), basicSsl()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    https: {} as ServerOptions['https'], // This is the correct type-safe way
    port: 3000,
  },
});