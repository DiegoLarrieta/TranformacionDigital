import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '_redirects', // Archivo fuente que queremos copiar
          dest: '' // Directorio de destino (la raíz del directorio `dist`)
        }
      ]
    })
  ],
});
