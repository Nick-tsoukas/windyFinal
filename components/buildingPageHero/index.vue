<template>
  <div class="relative w-screen height_">
    <nuxt-img
      style="z-index: -1"
      class="height_ object-cover absolute right-0 top-0 w-screen xl:w-2/3"
      alt=""
      :src="building.featImage"
      sizes="xs:100vw sm:100vw md:100vw lg:1680px xl:1680px"
    />
    <div class="w-screen z-50 lg:pl-0 pt-40 xl:w-2/3 xl:pl-44">
      <h1
        style="z-index: 99999999999999999"
        class="
          font-bold
          text-4xl text-white text-center
          sm:z-50 sm:text-center
          md:text-6xl
          lg:text-7xl lg:text-black
        "
      >
        {{ building.title }}
      </h1>
    </div>
    <!-- overlay  -->
    <div
      style="z-index: -1"
      class="
        height_
        absolute
        top-0
        left-0
        right-0
        bottom-0
        bg-gradient-to-b
        from-black
        to-transparent
        md:hidden
      "
    ></div>
    <!-- <div style="width: 100vw; height: auto; background: black; color: white">
      <pre>{{ building }}</pre>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    building: {
      type: Object,
      default: () => {
        return {
          title: 'hello world',
        }
      },
    },
  },
}
</script>

<style scoped>
.height_ {
  height: 550px;
}
.left {
  text-align: left;
}

.color_block {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.275);
}
</style>
