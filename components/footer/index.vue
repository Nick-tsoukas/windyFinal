<template>
  <div
    style="height: 600px; padding-top: 133px; background: #222"
    class="hidden md:flex flex-row text-white transition-all pl-40 pr-40"
  >
    <div class="lg:w-2/4">
      <p class="pb-20">
        Ma quande lingues coalesce, li grammatica del resultant lingue es plu
        simplic e regulari quam ti del coalescent lingues. Li nov lingua franca
        va esser plu simplic.
      </p>
      <p>810 W Randolph</p>
      <p class="pb-20">Chicago, IL 60607</p>
      <p>555-777-7777</p>
    </div>
    <div class="flex-grow">
      <h1 class="pb-20">Links</h1>
      <div>
        <p class="pb-8">Link One</p>
        <p class="pb-8">Link Two</p>
        <p class="pb-8">Link Three</p>
        <p>link Four</p>
      </div>
    </div>
    <div class="flex-grow">
      <h1 class="pb-10">Instagram</h1>
      <div class="grid_">
        <div class="h-24 w-24 bg-gray-700"></div>
        <div class="h-24 w-24 bg-gray-700"></div>
        <div class="h-24 w-24 bg-gray-700"></div>
        <div class="h-24 w-24 bg-gray-700"></div>
        <div class="h-24 w-24 bg-gray-700"></div>
        <div class="h-24 w-24 bg-gray-700"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.grid_ {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 30px;
}
</style>
