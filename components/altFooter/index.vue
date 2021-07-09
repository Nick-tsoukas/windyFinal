<template>
  <div class="h-96">
    <nav
      class="
        w-full
        flex flex-row flex-wrap
        mx-auto
        justify-evenly
        pt-10
        md:w-2/4
      "
    >
      <nuxt-link class="text-2xl color_ font-semibold" to="/">Home</nuxt-link>
      <nuxt-link class="text-2xl color_ font-semibold" to="/about"
        >About</nuxt-link
      >
      <nuxt-link class="text-2xl color_ font-semibold" to="/featuredListings"
        >Featured Listings</nuxt-link
      >
      <nuxt-link class="text-2xl color_ font-semibold" to="/properties"
        >All Properties</nuxt-link
      >
      <nuxt-link class="text-2xl color_ font-semibold" to="/contact"
        >Contact</nuxt-link
      >
    </nav>
    <!-- icons  -->
    <div class="mt-12 w-1/4 mx-auto flex flex-row justify-evenly md:mt-20">
      <img src="/twitter_new.svg" class="w-16 h-16" alt="" />
      <img src="/face_one.svg" class="w-16 h-16" alt="" />
      <img src="/linkedin.svg" class="w-16 h-16" alt="" />
      <img src="/whatsapp.svg" class="w-16 h-16" alt="" />
    </div>
    <div class="w-full mt-20">
      <p class="text-2xl text-center">
        © 2021 Windcity, Inc. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.color_ {
  color: #5148e5;
}
</style>
