<template>
  <div
    class="w-full h-full bg-custom-blue px-10 py-10 lg:w-3/4 md:py-12 lg:px-10"
  >
    <h2 class="rale font-bold text-gray-200 text-3xl pb-2">
      Contact Your Agent
    </h2>
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
        </label>
        <input
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
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
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
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Message
        </label>
        <textarea
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
</template>

<script>
export default {}
</script>
