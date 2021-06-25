<template>
  <div>
    <!-- hero component first -->
    <BuildingPageHero />

    <AltBuildingGallery />
    <BuildingIntro />
    <Amenities />
    <FormCta />
    <h1>Hello this is the home page</h1>
  </div>

  <!-- <div>
    <h1 class="text-6xl">Buildings Page</h1>
    <nuxt-link to="/buildings/some-building">some building link</nuxt-link>
  </div> -->
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const settings_ = await $content('settings')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    const buildings_ = await $content('building')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    return {
      buildings_,
      settings_,
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
