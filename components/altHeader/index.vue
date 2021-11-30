<template>
  <div
    style="height: 100px; width: 100%; background: black; z-index: 999999999999"
    class="block text-center pt-6 md:flex md:flex-row md:items-center md:pl-16"
  >
    <nuxt-link to="/"
      ><h1 class="text-white text-2xl md:text-4xl">
        {{ title }}
      </h1></nuxt-link
    >
    <div class="hidden justify-end pr-16 md:flex md:flex-row md:flex-grow">
      <nuxt-link class="text-white" to="/">Home</nuxt-link>
      <nuxt-link class="text-white pl-4" to="/about">About</nuxt-link>
      <nuxt-link class="text-white pl-4" to="/properties">Properties</nuxt-link>
      <nuxt-link class="text-white pl-4" to="/featuredListings"
        >Featured Listings</nuxt-link
      >
      <nuxt-link class="text-white pl-4" to="/contact">Contact</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'hello',
    },
  },
}
</script>
