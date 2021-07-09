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
      <nuxt-link class="text-2xl color_ font-semibold" to="/Home"
        >Home</nuxt-link
      >
      <nuxt-link class="text-2xl color_ font-semibold" to="/Home"
        >About</nuxt-link
      >
      <nuxt-link class="text-2xl color_ font-semibold" to="/Home"
        >Buildings</nuxt-link
      >
      <nuxt-link class="text-2xl color_ font-semibold" to="/Home"
        >Featured Apartments</nuxt-link
      >
      <nuxt-link class="text-2xl color_ font-semibold" to="/Home"
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
        © 2020 Workflow, Inc. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.color_ {
  color: #9ba3af;
}
</style>
