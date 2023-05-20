import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    postcss: {
      plugins: [autoprefixer({ overrideBrowserslist: 'defaults' })]
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'src/styles/variables' as v;
          @use 'src/styles/mixins' as m;
        `
      }
    }
  }
})
