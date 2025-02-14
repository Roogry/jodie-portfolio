<template>
  <div>
    <section id="header-section">
      <Navbar />

      <div class="relative overflow-hidden">
        <div class="container px-8 mt-[70px] h-[150px] flex flex-col justify-center sm:px-10 sm:mt-[100px] sm:h-[300px]">
          <h1 v-gsap.from='{ opacity: 0, x: -50 }' class="text-3xl font-medium lg:text-5xl sm:text-4xl dark:text-white">My Portfolio</h1>
          <p v-gsap.delay-100.from='{ opacity: 0, x: -50 }' class="mt-4 text-base text-secondary sm:text-xl dark:text-gray-300">Selected exciting recent of my work.</p>
        </div>

        <span class="particle-circular particle-origin-bottom-right particle-animate-rotate top-[-50vmax] right-[-20vmax]"></span>
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
            v-gsap.whenVisible.from="{
              opacity: 0, y: 50,
              start: 'top 100%',
              end: '50% bottom'
            }"
          />
        </div>
      </div>
    </section>

    <section id="footer" class="pt-16" >
      <Footer />
    </section>
  </div>
</template>

<script setup lang="ts">
// Pinia store
const portfolioStore = usePortfolioStore()

// computed properties
const portfolios = computed(() => portfolioStore.portfolios)
</script>

<style lang="scss" scoped>
@use "~/assets/scss/bg-animate.scss";
</style>