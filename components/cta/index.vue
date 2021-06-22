<template>
  <div class="height_container pt-32 pl-32 relative">
    <p class="text-white z-50 pb-6">Find your dream house</p>
    <h1 class="text-6xl text-white z-50">Find the place of your dreams</h1>
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
</style>
