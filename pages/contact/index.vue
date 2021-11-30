// tailwind.config.js module.exports = { // ... plugins: [ // ...
require('@tailwindcss/forms'), ] } ``` -->
<template>
  <div>
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2
            class="
              text-base
              font-semibold
              text-indigo-600
              tracking-wide
              uppercase
            "
          >
            Got Questions?
          </h2>
          <p
            class="
              rale
              mt-1
              text-4xl
              font-extrabold
              text-gray-900
              sm:text-5xl sm:tracking-tight
              lg:text-6xl
            "
          >
            Send Us A Message
          </p>
          <p class="rale max-w-xl mt-5 mx-auto text-xl text-gray-500">
            We can help you find the right place for you. Message us and we'll
            get back to you
          </p>
        </div>
      </div>
    </div>

    <div class="relative bg-white mt-20 mb-20">
      <div class="absolute inset-0">
        <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div
          class="
            bg-gray-50
            py-16
            px-4
            sm:px-6
            lg:col-span-2 lg:px-8 lg:py-24
            xl:pr-12
          "
        >
          <div class="max-w-lg mx-auto">
            <h2
              class="
                text-2xl
                font-extrabold
                tracking-tight
                text-gray-900
                sm:text-3xl
              "
            >
              Get in touch
            </h2>
            <p class="mt-3 text-lg leading-6 text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
            <dl class="mt-8 text-base text-gray-500">
              <div>
                <dt class="sr-only">Postal address</dt>
                <dd>
                  <p>742 Evergreen Terrace</p>
                  <p>Chicago, IL 12345</p>
                </dd>
              </div>
              <div class="mt-6">
                <dt class="sr-only">Phone number</dt>
                <dd class="flex">
                  <span class="ml-3"> +1 (555) 123-4567 </span>
                </dd>
              </div>
              <div class="mt-3">
                <dt class="sr-only">Email</dt>
                <dd class="flex">
                  <span class="ml-3"> support@example.com </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          class="
            bg-white
            py-16
            px-4
            sm:px-6
            lg:col-span-3 lg:py-24 lg:px-8
            xl:pl-12
          "
        >
          <div class="max-w-lg mx-auto lg:max-w-none">
            <form
              name="contactus"
              action="/thanks"
              method="post"
              netlify
              netlify-honeypot="bot-field"
              class="grid grid-cols-1 gap-y-6"
            >
              <label for="contactus">
                <input
                  id="contactus"
                  type="hidden"
                  name="form-name"
                  value="contactus"
                />
              </label>
              <div>
                <label for="full-name" class="sr-only">Full name</label>
                <input
                  id="full-name"
                  type="text"
                  name="fullName"
                  autocomplete="name"
                  class="
                    block
                    w-full
                    shadow-sm
                    py-3
                    px-4
                    placeholder-gray-500
                    focus:ring-indigo-500 focus:border-indigo-500
                    border-gray-300
                    rounded-md
                  "
                  placeholder="Full name"
                />
              </div>
              <div>
                <label for="email" class="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class="
                    block
                    w-full
                    shadow-sm
                    py-3
                    px-4
                    placeholder-gray-500
                    focus:ring-indigo-500 focus:border-indigo-500
                    border-gray-300
                    rounded-md
                  "
                  placeholder="Email"
                />
              </div>

              <div>
                <label for="message" class="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="
                    block
                    w-full
                    shadow-sm
                    py-3
                    px-4
                    placeholder-gray-500
                    focus:ring-indigo-500 focus:border-indigo-500
                    border border-gray-300
                    rounded-md
                  "
                  placeholder="Message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  class="
                    inline-flex
                    justify-center
                    py-3
                    px-6
                    border border-transparent
                    shadow-sm
                    text-base
                    font-medium
                    rounded-md
                    text-white
                    bg-indigo-600
                    hover:bg-indigo-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
                  "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
