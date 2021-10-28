<template>
  <div
    class="
      flex
      hideScroll
      flex-row
      overflow-x-scroll overflow-y-hidden
      min-w-full
      container
    "
  >
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.hideScroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.hideScroll::-webkit-scrollbar {
  display: none;
}

.container {
  min-height: 900px;
  background-color: #f0efef;
  overscroll-behavior-x: none;
}
@media only screen and (max-width: 900px) {
  .container {
    min-height: 650px;
    height: auto;
    background-color: #f0efef;
  }
}

/* Hide scrollbar for IE, Edge and Firefox */
</style>
