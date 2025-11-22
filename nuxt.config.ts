// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config',
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  app: {
    head: {
      title: '企业门户 - 数字化转型引领未来',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '致力于为企业提供全方位的数字化解决方案' },
      ],
    },
  },

  compatibilityDate: '2024-11-21',
})
