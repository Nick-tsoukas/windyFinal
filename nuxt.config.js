export default {
  extend(config, ctx) {
    config.module.rules.push({
      enforce: 'pre',
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      exclude: /(node_modules)/,
      options: {
        fix: true,
      },
    })
  },
  target: 'static',
  head: {
    title: 'windycitynew',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['@/assets/css/main.css'],
  plugins: ['~/plugins/vue-easy-lightbox.js'],
  components: true,
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  googleFonts: {
    families: {
      Raleway: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Inter: true,
    },
  },
  modules: ['@nuxtjs/pwa', '@nuxt/content'],
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  content: {
    nestedProperties: ['categories.slug'],
  },
  build: {},
}
