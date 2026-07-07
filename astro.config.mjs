import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const getSiteUrl = () => {
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'https://4da-cathering.vercel.app';
};

export default defineConfig({
  site: getSiteUrl(),
  integrations: [tailwind()],
});
