<template>
  <div
    class="box relative"
    data-aos="fade-right"
    data-aos-duration="500"
    data-aos-once="true"
  >
    <nuxt-img
      class="object-cover lg:max-h-96"
      sizes="md:350px lg:550px"
      :src="building.featImage"
      :alt="building.alt"
      format="webp"
    />
    <div style="background: white" class="card_info shadow-md p-6 xl:p-14">
      <div class="flex flex-row items-center pb-4">
        <h2 class="text-2xl flex-grow">{{ building.title }}</h2>
        <p class="flex-grow text-1xl">
          ${{ building.minPrice }} - ${{ building.maxPrice }}
        </p>
      </div>
      <h2 class="flex-grow text-1xl xl:text-2xl xl:pb-10">
        {{ building.neighborhood }}
      </h2>

      <p class="text-1xl xl:text-2xl">{{ building.address }}</p>
      <p class="pb-10 text-1xl xl:text-2xl">
        {{ building.city }}, {{ building.state }}
      </p>
      <nuxtLink
        :to="`/buildings/${building.slug}`"
        class="
          bg-transparent
          hover:bg-blue-500
          text-custom-blue
          font-semibold
          hover:text-white
          py-2
          px-4
          border border-custom-blue
          hover:border-transparent
          rounded
        "
      >
        Learn More
      </nuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    building: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },

  async asyncData({ params }) {
    const slug = await params.slug // When calling /abc the slug will be "abc"
    return { slug }
  },
}
</script>

<style scoped>
.box {
  width: 550px;
  height: 400px;
  margin: 4.5rem;
}

.card_info {
  background: rgba(255, 255, 255, 0.88);
  width: 450px;
  height: 375px;
  position: absolute;
  bottom: -200px;
  right: -50px;
}
@media only screen and (max-width: 900px) {
  .box {
    width: 350px;
    height: 300px;
  }
  .card_info {
    height: 300px;
    width: 350px;
    right: 0;
    bottom: -210px;
  }
}
</style>
