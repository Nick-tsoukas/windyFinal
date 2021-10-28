<template>
  <div>
    <Hero :hero-img="settings_[0].header_image">
      <!-- heroContent -->
      <HeroContent />
      <!-- work on heroContent and then build props  -->
    </Hero>
    <section class="flex flex-roww-full pl-20 py-24">
      <div>
        <h2 class="text-5xl font-extrabold pb-6">
          Finding your new place has never been easier?
        </h2>
      </div>
      <div
        class="
          w-1/2
          mx-auto
          h-full
          flex flex-row
          justify-center
          items-center
          text-center
        "
      >
        <Button
          linkto="/contact"
          class="hidden md:block"
          title="contact us today"
        />
      </div>
    </section>
    <!-- In the featuredBuildingCard -->
    <div style="background-color: #f0efef" class="w-full h-auto">
      <h1
        style="color: #5148e4; font-weight: 700"
        class="text-center text-4xl pt-10"
      >
        Featured Deals
      </h1>
    </div>
    <BuildingsSlider>
      <div v-for="(building, i) in featBUildings_" :key="i">
        <FeaturedBuildingCard :building="building" />
      </div>
    </BuildingsSlider>
    <!-- work on Cta and figure -->
    <Cta />
    <!-- SeachBuilding -->
    <!-- I think i'm going to put a button here  -->
    <div style="background-color: #f0efef" class="w-full h-28 p-20 flex">
      <div class="flex-grow">
        <h2 class="text-custom-blue text-5xl font-extrabold">All Listings</h2>
      </div>
      <FilterFunction @toggleFilter="toggleFilter" />
    </div>
    <BuildingsSlider v-if="!fb">
      <div v-for="(building, i) in buildings_" :key="i" :v-if="fb">
        <FeaturedBuildingCard :building="building" />
      </div>
    </BuildingsSlider>
    <BuildingsSlider v-else>
      <h1>Something happened {{ fb }}</h1>
      <div v-for="(building, i) in fb" :key="i">
        <FeaturedBuildingCard :building="building" />
      </div>
    </BuildingsSlider>

    <!-- CTA with form  -->
    <FormCta />

    <!-- Blackout on popup -->
    <section
      v-if="filterOpen"
      style="position: fixed; top: 0; left: 0"
      class="h-screen w-full bg-black opacity-30 z-0"
    ></section>
    <div
      v-if="filterOpen"
      @click="closeFilter"
      style="position: fixed; top: 0; left: 0"
      class="w-screen h-full z-10 flex justify-center items-center"
    ></div>
    <div
      v-if="filterOpen"
      style="
        z-index: 99999999999;
        margin-left: 33.33333333%;
        margin-right: auto;
        position: fixed;
        top: 25%;
        left: 0;
      "
      class="w-1/3 h-1/2 bg-white"
    >
      <section class="flex justify-end pr-6 pt-6">
        <h1 class="absolute left-4 top-4">Filter Parameters</h1>
        <img @click="closeFilter" class="w-9 h-9" src="/close.svg" />
      </section>
      <section class="px-6">
        <div class="grid grid-cols-2 items-center">
          <div>
            <input
              v-model="filteredSelections"
              id="petFriendly"
              type="checkbox"
              value="petFriendly"
            />
            <label for="petFriendly">Pet Friendly</label>
          </div>
          <div>
            <input
              v-model="filteredSelections"
              id="pool"
              type="checkbox"
              value="pool"
            />
            <label for="hotTub">Pool</label>
          </div>
          <div>
            <input
              value="hotTub"
              id="hotTub"
              v-model="filteredSelections"
              type="checkbox"
            />
            <label for="hotTub">Hot Tub</label>
          </div>
          <div>
            <input
              v-model="filteredSelections"
              id="communityRoom"
              type="checkbox"
              value="communityRoom"
            />
            <label for="communityRoom">Community Room</label>
          </div>
          <div>
            <input
              v-model="filteredSelections"
              id="poolTable"
              type="checkbox"
              value="poolTable"
            />
            <label for="poolTable">Pool Table</label>
          </div>
          <div>
            <input
              v-model="filteredSelections"
              id="grills"
              type="checkbox"
              value="grills"
            />
            <label for="grills">grills</label>
          </div>
          <div>
            <input
              id="outdoorArea"
              v-model="filteredSelections"
              type="checkbox"
              value="outdoorArea"
            />
            <label for="outdoorArea">Outdoor Area</label>
          </div>
          <div>
            <input
              v-model="filteredSelections"
              id="freeCoffee"
              type="checkbox"
              value="freeCoffee"
            />
            <label for="freeCoffee">Free Coffee</label>
          </div>
          <div>
            <input
              v-model="filteredSelections"
              id="dogBath"
              type="checkbox"
              value="dogBath"
            />
            <label for="dogBath">Dog Bath</label>
          </div>
          <div>
            <input
              v-model="filteredSelections"
              id="giftShop"
              type="checkbox"
              value="giftShop"
            />
            <label for="giftShop">Gift Shop</label>
          </div>
        </div>
        <button
          @click="filteredBuildingUser"
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
          Filter
        </button>
        <button
          @click="resetUserFilterSelection"
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
          Reset
        </button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const buildings_ = await $content('building')
      .where({ featured: false })
      .fetch()
    const featBUildings_ = await $content('building')
      .where({ featured: true })
      .fetch()
    const settings_ = await $content('settings').fetch()
    return {
      buildings_,
      featBUildings_,
      settings_,
    }
  },
  data() {
    return {
      fb: false,
      filterOpen: false,
      filteredSelections: [],
      con: 'console',
    }
  },
  head() {
    return {
      title: this.settings_[0].title,
      meta: [
        { title: this.settings_[0].title },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.settings_[0].meta_description,
        },
      ],
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },

  methods: {
    log(value, something) {
      console.log(value, something)
    },
    resetUserFilterSelection() {
      const matches = document.querySelectorAll("input[type='checkbox']")
      matches.forEach((some) => {
        some.checked = false
      })
      this.fb = false
    },
    closeFilter() {
      this.filterOpen = false
    },
    filteredBuildingUser({ $content }) {
      const filteredSelectionObject = this.filteredSelections.map(
        (selection) => {
          return { [selection]: true }
        }
      )
      const final = {}
      filteredSelectionObject.forEach((filterProp) => {
        final[Object.keys(filterProp)[0]] = true
      })
      this.log('This is all the buildling ', this.buildings_)
      this.closeFilter()
    },
    toggleFilter() {
      this.filterOpen = !this.filterOpen
    },
  },
}
</script>
