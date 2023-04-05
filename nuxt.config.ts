// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  css: ["@/assets/css/main.scss"],
  modules: [
    "nuxt-icon",
    "@pinia/nuxt", // needed
    "@pinia-plugin-persistedstate/nuxt",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
