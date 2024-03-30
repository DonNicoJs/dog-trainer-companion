// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  runtimeConfig: {
    redis: {
      host: "127.0.0.1",
      port: 6379
    }
  },
  modules: ["@nuxt/eslint", "nuxt-primevue", "@nuxt/content"],
  css: ['primevue/resources/themes/aura-light-green/theme.css', 'primeflex/primeflex.css', 'primeicons/primeicons.css'],
  primevue: {
    options: {
      ripple: true
    }
  }
})