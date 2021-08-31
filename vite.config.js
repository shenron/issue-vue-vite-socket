import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

module.exports = defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  server: {
    proxy: {
      '/socket.io': {
        target: 'http://localhost:3030/socket.io',
        changeOrigin: true,
        pathRewrite: { '^/socket.io': '' },
      },
    },
  },
});
