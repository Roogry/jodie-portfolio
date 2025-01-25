<template>
  <div>
    <section id="header-section">
      <div class="relative overflow-hidden">
        <Navbar />
        <div class="container px-8 h-[150px] flex flex-col justify-center sm:px-10 sm:h-[300px]">
          <h1 class="text-3xl font-medium lg:text-5xl sm:text-4xl">My Portfolio</h1>
          <p class="mt-4 text-base text-secondary sm:text-xl">Selected exciting recent of my work.</p>
        </div>

        <NuxtImg class="absolute top-0 left-0 w-full min-h-[250px] -z-30 sm:min-h-[405px]"
          src="/decorations/bg-header-title.png" />
      </div>
    </section>

    <section id="content-section">
      <div class="container px-8 mt-8 sm:px-10 sm:mt-16">
        <div class="grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-2 sm:gap-y-10">
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