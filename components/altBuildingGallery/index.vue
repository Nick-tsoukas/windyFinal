<template>
  <div class="flex flex-row overflow-y-scroll gap-1 pt-10 pb-10 bg-black">
    <nuxt-img
      v-for="image in building.galleryImages"
      :key="image.imagegal"
      :src="image.imagegal"
      sizes="xs:300px sm:300px md:300px lg:500px xl:500px"
      height="300px"
      :alt="image.alt"
    />
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
