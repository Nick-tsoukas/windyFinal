<template>
  <div>
    <h1>This is filtered building card</h1>
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
