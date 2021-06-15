<template>
  <div class="box relative">
    <img class="object-cover" :src="building.image" />
    <div class="card_info p-14">
      <div class="flex flex-row items-center pb-4">
        <h2 class="text-3xl flex-grow">Kenmore Building</h2>
        <p class="flex-grow text-2xl">$1200 - $1500</p>
      </div>
      <h2 class="text-2xl pb-10 flex-grow">West Loop</h2>

      <p class="text-2xl">5555 N Kildare Street</p>
      <p class="pb-4 text-2xl">Chicago, IL</p>
      <button
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
      </button>
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
  width: 750px;
  height: 500px;
  margin: 4rem;
}

.card_info {
  background: rgba(255, 255, 255, 0.88);
  width: 585px;
  height: 375px;
  position: absolute;
  bottom: -200px;
  right: 0;
}
</style>
