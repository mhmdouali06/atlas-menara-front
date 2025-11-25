// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: "static",
  },
  compatibilityDate: "2025-11-01",
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "./"),
  },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      apiBase: import.meta.env.VITE_API_BASE,
    },
  },
  modules: ["vue3-carousel-nuxt", "@nuxtjs/tailwindcss", "nuxt-toast"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "es",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        {
          property: "og:image",
          content: "https://atlasmenara.com/favicon.ico",
        },
        { property: "og:site_name", content: "Viajes Atlas Menara" },
        { property: "og:locale", content: "es_ES" },

        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:image",
          content: "https://atlasmenara.com/favicon.ico",
        },
      ],
    },
  },
});
