<template>
  <div class="max-w-full pt-20 pb-20 pl-16">
    <div class="w-auto">
      <div class="inline-block">
        <h2 class="text-4xl inline-block">{{ title }}</h2>
        <div class="h-2 mt-4 w-auto bg-black"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
