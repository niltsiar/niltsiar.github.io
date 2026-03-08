// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './src/config';

export default defineConfig({
  site: 'https://borja.quevedo.dev',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: siteConfig.defaultLang,
    locales: [siteConfig.defaultLang, siteConfig.secondaryLang],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
