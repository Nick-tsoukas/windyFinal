<template>
  <!-- hero containert  -->
  <div class="h-screen flex flex-col bg-primary text-white -mt-10">
    <!-- hero wrapper  -->
    <div class="relative">
      <div class="block absolute w-full">
        <!-- hero image  -->
        <div class="relative flex flex-row">
          <nuxt-img
            sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
            class="
              ml-auto
              absolute
              w-screen
              justify-items-end
              h-screen
              object-cover
            "
            :src="heroImg"
            alt=""
          />
        </div>

        <!-- optional hero overylay  -->
        <div
          class="
            h-screen
            absolute
            top-0
            left-0
            right-0
            bottom-0
            bg-gradient-to-br
            from-primary
            to-transparent
          "
        ></div>

        <!-- hero content slot  -->
        <div class="flex flex-row items-center z-50 trasition-all">
          <div class="relative flex flex-col justify-center h-screen">
            <slot></slot>
          </div>
        </div>
        <!-- end of slot  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heroImg: {
      type: String,
      default: 'img/homeH.jpeg',
    },
  },
}
</script>

<style scoped>
.back {
  z-index: -1;
}
</style>
