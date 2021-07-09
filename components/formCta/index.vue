<template>
  <div class="w-full let flex flex-row height_900 justify-center">
    <div class="flex justify-center w-screen h-full md:w-2/3 lg:w-1/2">
      <div class="pl-8 pr-8 pt-28 sm:pl-28">
        <h1 class="text-black text-4xl sm:text-6xl pb-6">Get in touch</h1>
        <div>
          <p class="text-black">
            Looking for a place right away, let us help you find your dream
            <br />
            place
          </p>
          <div class="flex flex-col pt-28">
            <div class="w-full sm:w-3/4">
              <label
                for="name"
                class="block text-sm font-medium text-black pb-2 pt-2"
                >Full Names</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autocomplete="lastname"
                  placeholder="First and last name"
                  class="
                    flex-1
                    block
                    w-full
                    focus:ring-indigo-500 focus:border-indigo-500
                    min-w-0
                    rounded-none rounded-r-md
                    sm:text-sm
                    border-gray-300
                  "
                />

                <!-- <input
                  id="name"
                  type="text"
                  name="lastName"
                  class="
                    text-2xls
                    h-16
                    shadow-sm
                    focus:ring-indigo-500 focus:border-indigo-500
                    block
                    w-full
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                  placeholder="First and last name ..."
                /> -->
              </div>
            </div>
            <div class="w-full md:w-3/4">
              <label
                for="email"
                class="block text-sm font-medium text-black pb-2 pt-2"
                >Email</label
              >
              <div class="mt-1">
                <input
                  id="name"
                  type="email"
                  name="email"
                  class="
                    shadow-sm
                    focus:ring-indigo-500 focus:border-indigo-500
                    block
                    w-full
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div class="w-full md:w-3/4">
              <label
                for="message"
                class="block text-sm font-medium text-black pb-2 pt-2"
                >Message</label
              >
              <div class="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows="3"
                  placehoder="Type your message here"
                  class="
                    max-w-lg
                    shadow-sm
                    block
                    w-full
                    focus:ring-indigo-500 focus:border-indigo-500
                    sm:text-sm
                    border border-gray-300
                    rounded-md
                  "
                />

                <!-- <textarea
                  id="message"
                  name="message"
                  class="
                    shadow-sm
                    focus:ring-indigo-500 focus:border-indigo-500
                    block
                    w-full
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                  placeholder="Type your message here"
                /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nuxt-img
      sizes="md:290px lg:840px xl:50vw"
      src="img/building_4.jpeg"
      class="object-cover hidden w-full h-full image md:block md:w-1/2 lg:w-1/2"
      format="webp"
    />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.height_900 {
  height: 900px;
}

.let {
  background: white;
}
</style>
