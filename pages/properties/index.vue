<template>
  <div>
    <ListingHero
      data-aos="fade-left"
      data-aos-duration="500"
      data-aos-once="true"
    />
    <BuildingsSlider>
      <div v-for="(building, i) in buildings" :key="i">
        <FeaturedBuildingCard :building="building" />
      </div>
    </BuildingsSlider>
    <BuildingsSlider>
      <div v-for="(building, i) in buildings" :key="i">
        <FeaturedBuildingCard :building="building" />
      </div>
    </BuildingsSlider>
    <div style="height: 500px" class="relative bg-indigo-800">
      <div class="absolute inset-0">
        <img
          class="w-full h-full object-cover"
          src="/img/building_6.jpeg"
          alt=""
        />
        <div
          class="absolute inset-0 bg-indigo-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div
        class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
      >
        <h1
          class="
            text-4xl
            font-extrabold
            tracking-tight
            text-white
            sm:text-5xl
            lg:text-6xl
          "
        >
          Get in touch
        </h1>
        <p class="mt-6 text-xl text-indigo-100 max-w-3xl">
          Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
          lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
          consectetur. Sit justo viverra non adipisicing elit distinctio.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const buildings = await $content('building').fetch()

    return {
      buildings,
    }
  },
}
</script>

<style scoped>
.cent {
  background-position: center;
  background-size: cover;
}
</style>
