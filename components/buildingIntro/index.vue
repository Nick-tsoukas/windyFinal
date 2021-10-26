<template>
  <div class="flex h-full flex-col mx-auto sm:flex-col lg:flex-row">
    <div class="h-auto w-screen p-8 lg:w-3/5 lg:lg:pl-36 lg:pr-36">
      <h1 class="text-4xl mb-10 text-center md:text-left">
        At the {{ building.title }}
      </h1>
      <p class="lato text-2xl pb-6">
        {{ building.description }}
      </p>
      <ul id="example-1">
        <li
          v-for="item in items"
          :key="item.message"
          class="list-disc ml-4 text-2xl"
        >
          {{ item.message }}
        </li>
      </ul>
    </div>
    <div class="h-auto w-screen p-4 lg:w-2/5 lg:p-10">
      <FormSide />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    building: {
      type: Object,
      default: () => {
        return {
          title: 'hello world',
        }
      },
    },
  },
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

/* ul li::before {
  content: '';
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/fb-heart.gif);
  background-size: contain;
  display: inline-block;
  width: 1em;
  height: 1em;
  position: relative;
  top: 0.1rem;
  margin-right: 0.2rem;
} */

/* li::before {
  content: url('static/img/home_3.jpeg');
} */
</style>
