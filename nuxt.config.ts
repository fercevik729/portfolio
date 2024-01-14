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
    "nuxt-icon",
    "nuxt-aos",
  ],
  colorMode: {
    classSuffix: "",
  },
  css: ["animate.css/animate.min.css"],
  aos: {
    useClassNames: true,
    easing: "ease-in-out",
    once: false,
    mirror: false,
  },
});
