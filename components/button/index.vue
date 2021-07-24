<template>
  <div>
    <button
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
      <nuxt-link :to="`${linkto}`">
        {{ title }}
      </nuxt-link>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Learn More',
    },
    linkto: {
      type: String,
    },
  },
}
</script>
