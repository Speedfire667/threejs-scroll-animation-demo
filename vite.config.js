// vite.config.js
module.exports = {
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html'
    }
  },
  preview: {
    port: parseInt(process.env.PORT) || 4173,
    host: '0.0.0.0',
    open: true, // Vai abrir a URL automaticamente no navegador
  }
};
