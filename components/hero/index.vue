<template>
  <!-- hero containert  -->
  <div class="h-screen flex flex-col -mt-10 bg-primary text-white">
    <!-- hero wrapper  -->
    <div class="relative">
      <div class="block absolute w-full">
        <!-- hero image  -->
        <div class="relative flex flex-row">
          <img
            class="
              ml-auto
              absolute
              w-screen
              md:w-3/4
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
          <div class="relative flex flex-col justify-center h-screen pt-10">
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
      default: 'img/home_2.jpeg',
    },
  },
}
</script>
