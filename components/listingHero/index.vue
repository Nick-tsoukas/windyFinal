<template>
  <div>
    <main class="lg:relative">
      <div
        class="
          mx-auto
          max-w-7xl
          w-full
          pt-16
          pb-20
          text-center
          lg:py-48 lg:text-left
        "
      >
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1
            class="
              text-4xl
              tracking-tight
              font-extrabold
              text-gray-900
              sm:text-5xl
              md:text-6xl
              lg:text-5xl
              xl:text-6xl
            "
          >
            <span class="block xl:inline"
              >Our hand picked Featured Listings</span
            >
            {{ ' ' }}
            <span class="text-4xl block text-indigo-600 xl:inline"
              >Let us help you find your next apartment</span
            >
          </h1>
          <p
            class="
              mt-3
              max-w-md
              mx-auto
              text-lg text-gray-500
              sm:text-xl
              md:mt-5 md:max-w-3xl
            "
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <Button linkto="/contact" title="Contact Us" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          relative
          w-full
          h-64
          sm:h-72
          md:h-96
          lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full
        "
      >
        <img
          class="absolute inset-0 w-full h-full object-cover"
          src="/img/building_4.jpeg"
          alt=""
        />
      </div>
    </main>
  </div>
</template>

<script>
export default {}
</script>
