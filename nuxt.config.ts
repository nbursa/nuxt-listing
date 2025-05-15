import Aura from "@primeuix/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  vite: {},
  css: ["@/assets/styles.css", "primeicons/primeicons.css"],
  modules: ["@primevue/nuxt-module"],
  primevue: {
    usePrimeVue: true,
    options: {
      theme: {
        preset: Aura,
        darkModeSelector: "system",
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
});
