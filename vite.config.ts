import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [
        vue(),
        vuetify({
            autoImport: true,
            styles: { configFile: 'src/scss/variables.scss' }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {}
        }
    },
    optimizeDeps: {
        exclude: ['vuetify'],
        entries: ['./src/**/*.vue']
    },
    // build: {
    //     rollupOptions: {
    //       output: {
    //         manualChunks(id) {
    //           if (id.includes('node_modules')) {
    //             return 'vendor'; // bundle vendor dependencies into a separate chunk
    //           }
    //         },
    //       },
    //     },
    //   },
    // build: {
    //     rollupOptions: {
    //         treeshake:  false 
    //     }
    // },
});
