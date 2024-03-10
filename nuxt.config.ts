// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/custom.css"],
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: {
      name: "slide",
      mode: "out-in", // default
    },
  },
});
