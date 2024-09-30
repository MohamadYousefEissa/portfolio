// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  image: {
    dir: "assets/images",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Mohamad Yousef Eissa Portfolio",
    },
  },
  modules: ["@nuxt/image", "@nuxt/icon", "@nuxt/ui"],
});
