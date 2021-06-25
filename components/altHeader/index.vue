<template>
  <div
    style="height: 100px; width: 100%; background: black; z-index: 999999999999"
    class="flex flex-row items-center pl-16"
  >
    <h1 class="text-white text-4xl">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'hello',
    },
  },
}
</script>
