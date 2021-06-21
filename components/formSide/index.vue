<template>
  <div class="w-full h-full bg-gray-700 py-12 px-10">
    <h2 class="text-gray-200 text-3xl pb-2">Contact Your Agent</h2>
    <div>
      <label for="email" class="block text-sm font-medium text-white pb-2"
        >Email</label
      >
      <div class="mt-1">
        <input
          id="email"
          type="text"
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
          placeholder="you@example.com"
        />
      </div>
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-white pb-2 pt-2"
        >Name</label
      >
      <div class="mt-1">
        <input
          id="name"
          type="text"
          name="text"
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
    <div>
      <label for="email" class="block text-sm font-medium text-white pb-2 pt-2"
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
          placeholder="Got a question ... we can help"
        />
      </div>
    </div>
    <Button class="pt-6" title="Send Message" />
  </div>
</template>

<script>
export default {}
</script>
