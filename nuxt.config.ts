import Aura from "@primeuix/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  vite: {},
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
});
