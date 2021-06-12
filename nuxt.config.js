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
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
  ],
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  content: {},
  build: {},
}
