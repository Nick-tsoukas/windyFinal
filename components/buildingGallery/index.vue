<template>
  <!-- must fix gallery slider on mobile to swipe to the left and right -->
  <div class="main_container bg-gray-100 pl-6 pr-6">
    <div class="main_image">
      <!-- read nuxt documentation for sizeing -->
      <nuxt-img class="first_image" src="/home_3.jpeg" />
    </div>
    <div class="gallery_grid">
      <nuxt-img src="/home_3.jpeg" />
      <nuxt-img src="/home_3.jpeg" />
      <nuxt-img src="/home_3.jpeg" />
      <nuxt-img src="/home_3.jpeg" />
      <nuxt-img src="/home_3.jpeg" />
      <nuxt-img src="/home_3.jpeg" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.gal_image {
  max-height: 100%;
}

.first_image {
  height: 100%;
  padding: 2rem;
}
.main_image {
  width: 40%;
}
.main_container {
  height: 700px;
  width: 100%;
  display: flex;
  padding-top: 1em;
  padding-bottom: 1em;
  margin-bottom: 3em;
}

.gallery_grid {
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  gap: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

@media only screen and (min-device-width: 200px) and (max-device-width: 780px) {
  /* Styles */
  .main_container {
    height: auto;
    padding-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .first_image {
    width: 100%;
  }

  .main_image {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
  .gallery_grid {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (min-width: 1224px) {
  /* Styles */
}
</style>
