<template>
  <div>
    <section class="back_color flex flex-col md:flex-row w-full">
      <div class="lg:pl-36 w-full lg:w-1/3">
        <div
          class="
            flex flex-col
            pt-36
            items-center
            justify-center
            aspect-w-3 aspect-h-3
          "
        >
          <nuxt-img
            class="object-cover shadow-lg rounded-lg"
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            alt=""
            height="400"
            width="325"
          />
          <div class="w-full pt-10">
            <h2 class="font-semibold text-2xl text-center md:text-left">
              Danny Lastname
            </h2>
            <h3 class="font-semibold text-2xl text-center text-custom-yellow">
              Windy City Rentals Agent
            </h3>
          </div>
        </div>
      </div>
      <div class="px-6 md:pl-20 md:pt-20 lg:pt-36 w-full h-screen">
        <h1 class="sm:text-2xl md:text-4xl">Hello world</h1>
        <p class="pt-10 w-full lg:w-3/4 text-xl">
          Ultricies massa malesuada viverra cras lobortis. Tempor orci hac
          ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl
          dictum. Ultricies massa malesuada viverra cras lobortis. Tempor orci
          hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras.
          Nisl dictum. Ultricies massa malesuada viverra cras lobortis. Tempor
          orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas
          cras. Nisl dictum.
        </p>
        <p class="pt-10 w-full lg:w-3/4 text-xl">
          Nisl dictum. Ultricies massa malesuada viverra cras lobortis. Tempor
          orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas
          cras. Nisl dictum.
        </p>
        <div class="hidden mt-40 md:flex flex-row justify-between w-2/4">
          <div class="flex flex-row items-center">
            <img src="/linkedin.svg" style="height: 60px; width: 60px" alt="" />
            <p class="pl-6">LinkedIn</p>
          </div>
          <div class="flex flex-row items-center">
            <img
              src="/twitter_new.svg"
              style="height: 60px; width: 60px"
              alt=""
            />
            <p class="pl-6">Twitter</p>
          </div>
          <div class="flex flex-row items-center">
            <img src="/face_one.svg" style="height: 60px; width: 60px" alt="" />
            <p class="pl-6">Facebook</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <!-- <ContactAbout class="-mt-20" /> -->
    </section>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.back_color {
  background: #e8e8e8;
}
</style>
