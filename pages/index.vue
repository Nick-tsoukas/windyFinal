<template>
  <div>
    <!-- <h1>Home page</h1> -->
    <!-- Hero  -->
    <Hero hero-img="img/home_2.jpeg">
      <!-- heroContent -->
      <HeroContent />
      <!-- work on heroContent and then build props  -->
    </Hero>
    <SectionTitle title="Featured Buildings" />
    <!-- In the featuredBuildingCard -->
    <BuildingsSlider>
      <div v-for="(building, i) in buildings" :key="i">
        <FeaturedBuildingCard :building="building" />
      </div>
    </BuildingsSlider>
    <!-- Work on featuredBuildingSlider and FeaturedBuildingCard -->
    <!-- work on Cta and figure -->
    <Cta />
    <!-- SeachBuilding -->
    <BuildingsSlider>
      <!-- v-for all/filtered buildings add slot of filteredBuildingCard -->
      <div v-for="(building, i) in buildings" :key="i">
        <FilteredBuildingCard :building="building" />
      </div>
    </BuildingsSlider>

    <!-- CTA with form  -->
    <FormCta />
  </div>
</template>

<script>
export default {
  // async data later will get buildings data from nuxt context
  // async data later will get site data from nuxt content
  // will pass featured buildings as props to featured buildings component
  // will pass all building as props to search building components
  data: () => {
    return {
      buildings: [
        {
          name: 'nick',
          image: 'img/building_1.jpeg',
        },
        {
          name: 'Jasen',
          image: 'img/building_2.jpeg',
        },
        {
          name: 'Danny',
          image: 'img/building_1.jpeg',
        },
        {
          name: 'Robbin',
          image: 'img/building_2.jpeg',
        },
        {
          name: 'Sarah',
          image: 'img/building_1.jpeg',
        },
        {
          name: 'Jhon',
          image: 'img/building_2.jpeg',
        },
      ],
    }
  },
}
</script>
