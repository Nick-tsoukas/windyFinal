<template>
  <div
    class="
      height_container
      text-center
      flex flex-col
      justify-center
      items-center
      relative
      xl:pl-32 xl:pt-32
    "
  >
    <h1 class="text-5xl font-bold xl:text-6xl text-white z-50 mb-10">
      Find the right luxury apartment for You!
    </h1>
    <!-- <p class="text-white text-2xl z-50 pb-6">Get in touch</p> -->
    <button
      type="button"
      class="
        inline-flex
        items-center
        px-6
        py-4
        border border-transparent
        font-medium
        rounded-md
        shadow-sm
        text-white
        bg-custom-blue
        hover:bg-indigo-700
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-indigo-500
        text-2xl
      "
    >
      <nuxt-link to="/contact"> Get in touch </nuxt-link>
    </button>
    <div class="gradient"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.height_container {
  height: 700px;
  background-image: url('static/img/home_3.jpeg');
  background-position: center center;
  background-size: cover;
  z-index: -22;
}
.gradient {
  background: linear-gradient(180deg, #000 10%, rgba(196, 196, 196, 0) 100%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
}

@media only screen and (max-width: 900px) {
  .height_container {
    height: 600px;
  }
}
</style>
