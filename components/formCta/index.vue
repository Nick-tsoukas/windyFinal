<template>
  <div class="w-full flex flex-row height_900">
    <div class="w-1/2 bg-black h-full">
      <div class="pl-28 pt-28">
        <h1 class="text-white text-6xl pb-6">Get in touch</h1>
        <div>
          <p class="text-white">
            Looking for a place right away, let us help you find your dream
            <br />
            place
          </p>
          <div class="flex flex-row pt-28">
            <div class="w-60">
              <p class="text-white">Full name</p>
              <input type="text" />
            </div>
            <div>
              <p class="text-white">Full name</p>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2 h-full image"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.height_900 {
  height: 900px;
}

.image {
  background-image: url('static/img/home_3.jpeg');
  background-position: center center;
  background-size: cover;
}
</style>
