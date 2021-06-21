<template>
  <div class="w-full flex flex-row height_900 justify-center">
    <div class="flex justify-center w-screen bg-black h-full md:w-2/3 lg:w-1/2">
      <div class="pl-8 pr-8 pt-28 sm:pl-28">
        <h1 class="text-white text-4xl sm:text-6xl pb-6">Get in touch</h1>
        <div>
          <p class="text-white">
            Looking for a place right away, let us help you find your dream
            <br />
            place
          </p>
          <div class="flex flex-col pt-28">
            <div class="w-full sm:w-2/3">
              <label
                for="email"
                class="block text-sm font-medium text-white pb-2 pt-2"
                >Full Names</label
              >
              <div class="mt-1">
                <input
                  id="name"
                  type="text"
                  name="lastName"
                  class="
                    shadow-sm
                    focus:ring-indigo-500 focus:border-indigo-500
                    block
                    w-full
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                  placeholder="First and last name ..."
                />
              </div>
            </div>
            <div class="w-full md:w-2/3">
              <label
                for="email"
                class="block text-sm font-medium text-white pb-2 pt-2"
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
                  placeholder="First and last name ..."
                />
              </div>
            </div>
            <div class="w-full md:w-2/3">
              <label
                for="message"
                class="block text-sm font-medium text-white pb-2 pt-2"
                >Message</label
              >
              <div class="mt-1">
                <textarea
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden w-full h-full image md:block md:w-1/3 lg:w-1/2"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.height_900 {
  height: 900px;
}

.image {
  background-image: url('static/img/building_4.jpeg');
  background-position: center center;
  background-size: cover;
}
</style>
