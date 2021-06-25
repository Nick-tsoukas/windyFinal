<template>
  <div class="box relative">
    <pre>{{ building }}</pre>
    <nuxt-img
      class="object-cover lg:max-h-96"
      sizes="md:350px lg:550px"
      :src="building.featImage"
      :alt="building.alt"
    />
    <div class="card_info shadow-md p-6 xl:p-14">
      <div class="flex flex-row items-center pb-4">
        <h2 class="text-2xl flex-grow">{{ building.title }}</h2>
        <p class="flex-grow text-1xl">$1200 - $1500</p>
      </div>
      <h2 class="flex-grow text-1xl xl:text-2xl xl:pb-10">West Loop</h2>

      <p class="text-1xl xl:text-2xl">{{ building.address }}</p>
      <p class="pb-10 text-1xl xl:text-2xl">
        {{ building.city }}, {{ building.state }}
      </p>
      <nuxtLink
        to="/buildings"
        class="
          bg-transparent
          hover:bg-blue-500
          text-blue-700
          font-semibold
          hover:text-white
          py-2
          px-4
          border border-blue-500
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
}
</script>

<style scoped>
.box {
  width: 550px;
  height: 400px;
  margin: 4rem;
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
