export default {
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
  css: ['@/assets/css/main.css', './static/style.css'],
  plugins: ['~/plugins/vue-easy-lightbox.js'],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    [
      '@nuxtjs/google-fonts',
      {
        googleFonts: {
          families: {
            Lato: true,
            Raleway: true,
          },
        },
      },
    ],
  ],
  modules: ['@nuxtjs/pwa', '@nuxt/content'],
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  image: {
    dir: 'static/img',
  },
  content: {},
  build: {},
}
