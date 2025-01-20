<template>
  <div>
    <section id="header-section">
      <div class="relative overflow-hidden">
        <Navbar />
        <div class="container h-[300px] flex flex-col justify-center">
          <h1 class="text-5xl font-medium">My Portfolio</h1>
          <p class="mt-4 text-xl">Selected exciting recent of my work.</p>
        </div>

        <NuxtImg class="absolute top-0 left-0 w-100 -z-30"
          src="/decorations/bg-header-title.png" sizes="100vw" />
      </div>
    </section>

    <section id="content-section">
      <div class="container mt-16">
        <div class="grid grid-cols-2 gap-y-10 gap-x-8">
          <WorkListCard  v-for="portfolio in portfolios"
            :name="portfolio.name"
            :year="portfolio.year"
            :description="portfolio.description"
            :roles="portfolio.roles"
            :slug="portfolio.slug"
            :thumbnailPath="portfolio.thumbnailPath"
          />
        </div>
      </div>

      <!-- <div class="mt-16 mb-20 flex justify-center">
        <NuxtLink to="#footer"
          class="h-14 rounded-full font-semibold text-xl text-white bg-blue-600 hover:bg-blue-800">
          <div class="h-full flex gap-3 items-center justify-start">
            <p class="ml-5">Load More</p>
            <span class="mr-3 bg-white p-1.5 rounded-full">
              <i-right class="w-6 h-6 text-black rotate-90" :fontControlled="false" />
            </span>
          </div>
        </NuxtLink>
      </div> -->
    </section>

    <section id="footer" class="pt-16" >
      <Footer />
    </section>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    portfolioStore() {
      return usePortfolioStore();
    },
    portfolios() {
      return this.portfolioStore.portfolios;
    },
  },
}
</script>

<!-- <style scoped>
#header-section {
  background-image: url('~/assets/images/decorations/big-header-title.png');
}
</style> -->