<template>
  <div>
    <!-- hero component first -->
    <BuildingPageHero :building="building" />
    <h1 class="text-red-700 text-6xl">
      <pre>{{ building }}</pre>
    </h1>
    <AltBuildingGallery :building="building" />
    <BuildingIntro :building="building" />
    <Amenities :building="building" />
    <FormCta />
  </div>

  <!-- <div>
    <h1 class="text-6xl">Buildings Page</h1>
    <nuxt-link to="/buildings/some-building">some building link</nuxt-link>
  </div> -->
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const building = await $content('building', params.slug)
      .fetch()
      .catch(() => {
        error({
          statusCode: 404,
          message: 'Page not found',
        })
      })
    return {
      building,
    }
  },
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
