import vue from '@vitejs/plugin-vue';
import path from 'path';

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  alias: {
    '@': path.resolve(__dirname, 'src'),
    comps: path.resolve(__dirname, 'src/components'),
    styles: path.resolve(__dirname, 'src/styles'),
    plugins: path.resolve(__dirname, 'src/plugins'),
    views: path.resolve(__dirname, 'src/views'),
    layouts: path.resolve(__dirname, 'src/layouts'),
    utils: path.resolve(__dirname, 'src/utils'),
    apis: path.resolve(__dirname, 'src/apis'),
    dirs: path.resolve(__dirname, 'src/directives'),
  },
  plugins: [vue()],
};
