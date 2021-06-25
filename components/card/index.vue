<template>
  <div>
    <h1 class="text-black text-6xl">{{ building.title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    building: Object,
  },
}
</script>
