<template>
  <div class="flex h-full flex-col sm:flex-col md:flex-row">
    <div class="h-auto w-screen p-3 md:p-20 md:w-3/5 lg:lg:pl-36 lg:pr-36">
      <h1 class="text-4xl mb-10 text-center md:text-left">
        At the Bolden Apartments
      </h1>
      <p class="text-xl pb-6">
        With views of Downtown Chicago and unique architecture, Bolden
        Apartments offers a one of a kind living experience. Check out your new
        studio, 1, 2 or 3 bedroom apartment home today. Located close to Lincoln
        Park, Wicker Park and Depaul University, Bucktown has become a new
        hotspot for living and entertainment. From dining to the arts, you can
        have it all just steps away from your home.
      </p>
      <ul id="example-1">
        <li
          v-for="item in items"
          :key="item.message"
          class="list-disc ml-4 text-lg"
        >
          {{ item.message }}
        </li>
      </ul>
    </div>
    <div class="h-auto w-screen p-4 md:w-2/5 md:p-10">
      <FormSide />
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        { message: '1, 2 or 3 aprartments to pick from' },
        { message: 'Get deals at this time ' },
        { message: 'Full list of amenities' },
        { message: 'Free Coffee in the morning for everyone' },
      ],
    }
  },
}
</script>

<style scoped>
.indent_ {
  text-indent: 50px;
}
</style>
