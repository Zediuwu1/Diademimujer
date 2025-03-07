import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      hmr: false // Deshabilita el Hot Module Reloading (HMR), que incluye el toolbar
    }
  }
});
