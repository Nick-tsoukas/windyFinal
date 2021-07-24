<template>
  <div
    data-aos="fade-right"
    data-aos-duration="600"
    data-aos-once="true"
    class="flex flex-row overflow-y-scroll gap-1 pt-10 pb-10 bg-gray-200"
  >
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
import aosMixin from '~/mixins/aos'

export default {
  mixins: [aosMixin],
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
