// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
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
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index,follow" },
      ],
    },
  },
});
