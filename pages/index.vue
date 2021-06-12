<template>
  <div class="bg-red">
    <!-- <h1>Home page</h1> -->
    <!-- Hero  -->
    <Hero heroImg="img/building_6.jpeg">
      <!-- heroContent -->
      <HeroContent />
      <!-- work on heroContent and then build props  -->
    </Hero>

    <!-- In the featuredBuildingCard -->
    <BuildingsSlider>
      <div v-for="(building, i) in buildings" :key="i">
        <FeaturedBuildingCard :building="building" />
      </div>
    </BuildingsSlider>
    <!-- Work on featuredBuildingSlider and FeaturedBuildingCard -->
    <Cta />
    <!-- work on Cta and figure -->
    <!-- SeachBuilding -->
    <BuildingsSlider>
      <!-- v-for all/filtered buildings add slot of filteredBuildingCard -->
      <div v-for="(building, i) in buildings" :key="i">
        <FilteredBuildingCard :building="building" />
      </div>
    </BuildingsSlider>
    <!--  -->
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
        },
        {
          name: 'Jasen',
        },
        {
          name: 'Danny',
        },
      ],
    }
  },
}
</script>
