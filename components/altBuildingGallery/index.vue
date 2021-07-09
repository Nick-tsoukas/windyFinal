<template>
  <div class="flex flex-row overflow-y-scroll gap-1 pt-10 pb-10 bg-gray-200">
    <nuxt-img
      v-for="(image, index) in building.galleryImages"
      :key="index"
      :src="image.imagegal"
      sizes="xs:300px sm:300px md:300px lg:500px xl:500px"
      height="300px"
      :alt="image.alt"
      format="webp"
      class="hover:scale-110 transition-all"
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
