import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 5173,
    },
    base: '/Animevrs/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                signin: resolve(__dirname, 'signin.html')
            }
        }
    }
});