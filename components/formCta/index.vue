<template>
  <div class="w-full let flex flex-row height_900 justify-center">
    <div class="flex justify-center w-screen h-full md:w-2/3 lg:w-1/2">
      <div
        class="pl-8 pr-8 pt-28 sm:pl-28"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <h1 class="text-black text-4xl sm:text-6xl pb-6">Get in touch</h1>
        <div>
          <p class="text-black">
            Looking for a place right away, let us help you find your dream
            <br />
            place
          </p>
          <div>
            <div class="w-full">
              <form
                name="contactus"
                action="/thanks"
                method="post"
                netlify
                netlify-honeypot="bot-field"
                class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <input type="hidden" name="form-name" value="contactus" />
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="fullName"
                  >
                    Fullname

                    <input
                      id="fullName"
                      class="
                        shadow
                        appearance-none
                        border
                        rounded
                        w-full
                        py-2
                        px-3
                        text-gray-700
                        leading-tight
                        focus:outline-none focus:shadow-outline
                      "
                      type="text"
                      name="fullName"
                      required
                    />
                  </label>
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="email"
                  >
                    Email

                    <input
                      id="email"
                      class="
                        shadow
                        appearance-none
                        rounded
                        w-full
                        py-2
                        px-3
                        text-gray-700
                        mb-3
                        leading-tight
                        focus:outline-none focus:shadow-outline
                      "
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </label>
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="message"
                  >
                    Message

                    <textarea
                      id="message"
                      class="
                        shadow
                        appearance-none
                        rounded
                        w-full
                        py-2
                        px-3
                        text-gray-700
                        mb-3
                        leading-tight
                        focus:outline-none focus:shadow-outline
                      "
                      name="message"
                      required
                      placeholder="We can't wait to hear from you"
                    />
                  </label>
                </div>
                <div class="flex items-center justify-between">
                  <button
                    class="
                      bg-blue-500
                      hover:bg-blue-700
                      text-white
                      font-bold
                      py-2
                      px-4
                      rounded
                      focus:outline-none focus:shadow-outline
                    "
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nuxt-img
      data-aos="fade-left"
      data-aos-duration="500"
      data-aos-once="true"
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

/* class="
                    flex-1
                    block
                    w-full
                    focus:ring-indigo-500 focus:border-indigo-500
                    min-w-0
                    rounded-none rounded-r-md
                    sm:text-sm
                    border-gray-300
                  " */
</style>
