import { defineConfig } from 'vite';
import yaml from '@rollup/plugin-yaml';
import { createVuePlugin } from '@yfwz100/vite-plugin-vue2';
import { createI18nPlugin } from '../dist';

export default defineConfig({
  plugins: [createVuePlugin(), yaml(), createI18nPlugin()],
});
