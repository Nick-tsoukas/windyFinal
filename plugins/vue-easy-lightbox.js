// global registration in the entry file, e.g. main.js
import Vue from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

// Method 1. via Vue.use
Vue.use(VueEasyLightbox)

// Method 2. Register via Vue.component
Vue.component(VueEasyLightbox.name, VueEasyLightbox)
