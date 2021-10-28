<template>
  <div @click="toggle">
    <button
      style="margin-right: 100px"
      type="button"
      class="
        inline-flex
        items-center
        px-6
        py-4
        border border-transparent
        font-medium
        rounded-md
        shadow-sm
        text-white
        bg-custom-blue
        hover:bg-indigo-700
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-indigo-500
        text-2xl
      "
    >
      <span class="mr-4">Filter</span>
      <span><img style="height: 24px" src="down-arrow.svg" alt="" /></span>
    </button>
  </div>
</template>

<script>
export default {
  emits: ['toggleFilter'],
  methods: {
    toggle() {
      this.$emit(
        'toggleFilter',
        'yo what is up this is the filter funtion. You should open a pop up'
      )
    },
  },
}
</script>
