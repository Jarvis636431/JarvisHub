// @ts-check
import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import remarkGfm from "remark-gfm";

// https://astro.build/config
export default defineConfig({
  site: "https://jarvishub.com",
  base: "/",
  trailingSlash: "never",
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    image(),
  ],
  build: {
    assets: "_assets",
    format: "file",
    inlineStylesheets: "auto",
  },
  markdown: {
    syntaxHighlight: "shiki",
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    shikiConfig: {
      wrap: true,
      theme: "github-dark",
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
        "@components": "/src/components",
        "@layouts": "/src/layouts",
        "@pages": "/src/pages",
        "@assets": "/src/assets",
        "@content": "/src/content",
        "@styles": "/src/styles",
      },
    },
  },
  image: {
    service: {
      entrypoint: "@astrojs/image/squoosh",
    },
  },
});
