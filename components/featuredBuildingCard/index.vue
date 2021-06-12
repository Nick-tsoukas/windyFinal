<template>
  <div class="h-96 w-full py-6 border-2 border-gray-800 item">
    <!-- <h1>This is featured building card</h1> -->
    {{ building.name }}
    <!-- <pre class="overflow-x-scroll">{{ building }}</pre> -->
  </div>
</template>

<script>
export default {
  props: {
    building: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>
