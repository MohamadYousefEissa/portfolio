// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  icon: {
    serverBundle: "local",
    customCollections: [
      {
        prefix: "icons",
        dir: "./assets/icons",
      },
    ],
  },
  app: {
    head: {
      title: "Mohamad Yousef Eissa Portfolio",
      meta: [
        {
          name: "description",
          content: "This is my portfolio its have my projects and skills",
        },
        { name: "author", content: "Mohamad Yousef Eissa" },
        {
          name: "copyright",
          content: `Powered by Mohamad Yousef Eissa © ${new Date().getFullYear()} | All Rights Reserved`,
        },
        { name: "robots", content: "index, follow" },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "Mohamad Yousef Eissa Portfolio",
        },
        {
          property: "og:description",
          content: "This is my portfolio its have my projects and skills",
        },
        {
          property: "og:url",
          content: "https://mohamadyousefeissa.netlify.app",
        },
      ],
    },
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },
  devServer: { host: "0.0.0.0" },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image", "@nuxt/icon"],
});
