// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/eslint-module",
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
  ],
  colorMode: {
    classSuffix: "",
  },
});
