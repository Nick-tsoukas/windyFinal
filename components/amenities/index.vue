<template>
  <!-- need a list of four columns for desktop and two from mobile to list out amenities -->
  <div class="pl-4 pr-4 lg:pl-36 lg:pr-36 mb-14 mt-20">
    <div class="flex flex-row">
      <div class="flex-grow">
        <SectionTitle title="Community Amenities" />
        <ul class="grid grid-cols-2 gap-y-10 mb-8 lg:grid-cols-4 lg:gap-y-8">
          <li v-for="amenity in community" :key="amenity" class="flex flex-row">
            <img class="h-6 pr-4" src="img/check.svg" alt="" />{{ amenity }}
          </li>
        </ul>
      </div>
      <div class="hidden w-1/4 h-auto bg-black md:block"></div>
    </div>

    <div class="flex flex-row">
      <div class="flex-grow">
        <SectionTitle title="Community Amenities" />
        <ul class="grid grid-cols-2 gap-y-10 mb-8 lg:grid-cols-4 lg:gap-y-8">
          <li v-for="amenity in community" :key="amenity" class="flex flex-row">
            <img class="h-6 pr-4" src="img/check.svg" alt="" />{{ amenity }}
          </li>
        </ul>
      </div>
      <div class="hidden w-1/4 h-auto bg-black md:block"></div>
    </div>

    <SectionTitle class="text-left" title="Home Amenities" />
    <ul class="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-y-8">
      <li v-for="amenity in home" :key="amenity" class="flex flex-row">
        <img class="h-6 pr-4" src="img/check.svg" alt="" />{{ amenity }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      community: [
        'Pool',
        'Hot tub',
        'Safe',
        'Free Coffee',
        'Elevator',
        'Club House',
        'Putting Green',
        'Dog Park',
        'Day Care',
        'Dog Bath',
      ],
      home: [
        'Washer',
        'Dryer',
        'Stainless Steel Appliances',
        'Air Conditioning',
        'Fully Furnished',
      ],
    }
  },
}
</script>
