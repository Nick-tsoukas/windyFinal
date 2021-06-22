<template>
  <div>
    <!-- hero component first -->
    <BuildingPageHero />

    <AltBuildingGallery />
    <BuildingIntro />
    <Amenities />
    <FormCta />
  </div>

  <!-- <div>
    <h1 class="text-6xl">Buildings Page</h1>
    <nuxt-link to="/buildings/some-building">some building link</nuxt-link>
  </div> -->
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          link: [{ rel: 'stylesheet', href: '../css/main.css' }],
        },
      ],
    }
  },
}
</script>
