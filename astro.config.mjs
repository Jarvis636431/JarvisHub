// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jarvishub.com',
  base: '/',
  trailingSlash: 'never',
  build: {
    assets: '_assets',
    format: 'file',
    inlineStylesheets: 'auto',
  },
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      wrap: true,
      theme: 'github-dark',
    },
    smartypants: true,
  },
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@pages': '/src/pages',
        '@assets': '/src/assets',
        '@content': '/src/content',
      },
    },
  },
});
