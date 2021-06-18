<template>
  <div class="height_ main_container">
    <div class="flex flex-row md:w-screen lg:w-1/3 bg-blue-800 h-full">
      <img class="object-cover" src="img/home_2.jpeg" alt="" />
    </div>
    <div class="gallery_container md:w-screen lg:w-2/3 h-full">
      <div class="image_size">
        <img class="object-cover" src="img/home_3.jpeg" alt="" />
      </div>
      <div class="image_size">
        <img class="object-cover" src="img/home_3.jpeg" alt="" />
      </div>
      <div class="image_size">
        <img class="object-cover" src="img/home_3.jpeg" alt="" />
      </div>
      <div class="image_size">
        <img class="object-cover" src="img/home_3.jpeg" alt="" />
      </div>
      <div class="image_size">
        <img class="object-cover" src="img/home_3.jpeg" alt="" />
      </div>
      <div class="image_size">
        <img class="object-cover" src="img/home_3.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
img {
  object-fit: cover;
}
.gallery_container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  height: 100%;
  align-content: center;
  justify-content: center;
}
.image_size {
  flex-basis: 30%;
  height: 40%;
}

.main_container {
  display: flex;
}

.flex_ {
  display: flex;
}

.height_ {
  height: 620px;
}
</style>
