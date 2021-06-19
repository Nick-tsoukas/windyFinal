<template>
  <div class="relative w-screen height_">
    <img
      style="z-index: -1"
      class="height_ object-cover absolute right-0 top-0 w-screen xl:w-2/3"
      src="img/home_4.jpeg"
      alt=""
    />
    <div class="w-screen z-50 lg:pl-0 pt-40 xl:w-2/3 xl:pl-44">
      <h1
        class="
          z-50
          font-bold
          sm:z-50
          text-center text-4xl
          md:text-6xl
          lg:text-7xl
          xl:textp
        "
      >
        Bolden Gate Apartments
      </h1>
    </div>
    <!-- overlay  -->
    <div class="w-1/3 bg-gray-100 height_ color_block"></div>
  </div>
</template>

<script>
export default {}
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
  z-index: -111;
}
</style>
