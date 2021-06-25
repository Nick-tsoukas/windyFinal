<template>
  <div>
    <!-- <h1>Home page</h1> -->
    <!-- Hero  -->
    <Hero hero-img="img/home_2.jpeg">
      <!-- heroContent -->
      <HeroContent />
      <!-- work on heroContent and then build props  -->
    </Hero>
    <SectionTitle
      class="mx-auto text-center xl:pl-36 xl:text-left pt-6"
      title="Featured Buildings"
    />
    <!-- In the featuredBuildingCard -->
    <BuildingsSlider>
      <div v-for="(building, i) in featBUildings_" :key="i">
        <FeaturedBuildingCard :building="building" />
      </div>
    </BuildingsSlider>
    <!-- work on Cta and figure -->
    <Cta />
    <!-- SeachBuilding -->
    <BuildingsSlider>
      <div v-for="(building, i) in buildings_" :key="i">
        <FeaturedBuildingCard :building="building" />
      </div>
    </BuildingsSlider>

    <!-- CTA with form  -->
    <FormCta />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const buildings_ = await $content('buildings')
      .where({ featured: false })
      .fetch()
    const featBUildings_ = await $content('buildings')
      .where({ featured: true })
      .fetch()
    return {
      buildings_,
      featBUildings_,
    }
  },

  // async data later will get buildings data from nuxt context
  // async data later will get site data from nuxt content
  // will pass featured buildings as props to featured buildings component
  // will pass all building as props to search building components
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>
