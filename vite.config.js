import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Define a porta desejada
    host: true  // Permite acesso via rede local
  }
});
