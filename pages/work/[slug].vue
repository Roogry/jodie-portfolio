<template>
  <div class="relative">
    <Navbar />

    <div class="container pt-12">
      <div class="grid grid-cols-1 gap-10 sm:grid-cols-5">
        <div class="sm:col-span-2">
          <section id="work-info" class="px-8 sm:px-10">
            <h1 class="text-3xl font-medium lg:text-5xl sm:text-4xl">{{ portfolio.name }}</h1>
            <p class="mt-4 mb-6 text-base text-secondary sm:text-xl">{{ portfolio.description }}</p>
            
            <NuxtLink v-if="portfolio.visitUrl" :to="portfolio.visitUrl" target="_blank" class="font-semibold text-lg sm:text-xl">
              <div class="h-full inline-flex gap-3 items-center justify-start">
                <p class="text-secondary group-hover:text-blue-700">View Result</p>
                <span
                  class="p-1.5 border-[.5px] border-gray-300 rounded-full group-hover:border-blue-500 group-hover:bg-blue-500">
                  <i-right class="w-6 h-6 text-black group-hover:text-white" :fontControlled="false" />
                </span>
              </div>
            </NuxtLink>
          </section>

          <section id="work-overview-mobile">
            <div class="block mt-8 sm:hidden">
              <section id="work-image-section" class="w-full">
                <UCarousel v-slot="{ item, i }" :items="portfolio.images" :ui="{ item: 'snap-center', container: 'gap-4 px-8' }">
                  <NuxtImg height="150" class="rounded-xl border-2 border-gray-300/60" :src="item" :alt="getAltImage(portfolio.name, i)" placeholder/>
                </UCarousel>
              </section>
            </div>
          </section>

          <section id="work-details" class="px-8 sm:px-10">
            <div class="mt-12 info-detail sm:mt-20">
              <div class="mt-8 detail-item">
                <h2 class="text-lg font-medium sm:text-xl">Study Case</h2>
                <div class="mt-3 case-desc">
                  <p class="mt-2.5 text-base text-secondary sm:text-lg">The system addresses the challenges of manual processes in managing student participation, event registration, and document verification.</p>
                  <p class="mt-2.5 text-base text-secondary sm:text-lg">With features like student registration, event and committee sign-ups, QR attendance tracking, voting, and document uploads, the platform simplifies administrative tasks. It enables seamless participation in campus activities and enhances transparency and accuracy. The system has reduced the workload for both students and administrators, leading to improved engagement and efficient event management.</p>
                </div>
              </div>

              <div class="mt-8 detail-item">
                <h2 class="text-lg font-medium sm:text-xl">Client - Year</h2>
                <p class="mt-3 text-base text-secondary sm:text-lg">{{ portfolio.client }} - {{ portfolio.year }}</p>
              </div>

              <div class="mt-8 detail-item">
                <h2 class="text-lg font-medium sm:text-xl">Role</h2>
                <div class="mt-3 flex flex-wrap gap-3 items-center">
                  <Badge v-for="role in portfolio.roles" variant="colored">
                    <p class="text-sm">{{ role }}</p>
                  </Badge>
                </div>
              </div>

              <div class="mt-8 detail-item">
                <h2 class="text-xl font-bold">Technology</h2>
                <div class="mt-3 flex flex-wrap gap-3 items-center">
                  <Badge v-for="tech in portfolio.techs" variant="colored">
                    <p class="text-sm">{{ tech }}</p>
                  </Badge>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="hidden sm:col-span-3 sm:inline-block">
          <section id="work-overview-desktop" class="w-full">
            <div class="flex flex-col gap-12">
              <NuxtImg v-for="(image, i) in portfolio.images" class="rounded-xl" :src="image" :alt="'Portfolio Overview ' + i + 1" placeholder/>
            </div>
          </section>
        </div>
      </div>
    </div>

    <section id="footer" class="mt-20 sm:mt-40">
      <Footer is-mini-ver />
    </section>

    <NuxtImg class="absolute max-w-[1652px] -z-30 top-[-500px] left-[-1000px]"
          src="/decorations/circular-radial-gradient-blue.png" placeholder/>
    <NuxtImg class="absolute max-w-[750px] rotate-[120deg] -z-30 top-[800px] right-[-300px]"
          src="/decorations/top-pie-gradient-blue.png" placeholder/>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    slug() {
      return this.$route.params.slug;
    },
    portfolioStore() {
      return usePortfolioStore();
    },
    portfolio() {
      return this.portfolioStore.portfolio;
    },
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getPortfolio();
    });
  },
  methods: {
    async getPortfolio() {
      this.portfolioStore.showPortfolio(this.slug as String);
    },
    getAltImage(name: String, index: number) {
      return 'Overview ' + name + ' ' + (index+1);
    },
  }
}
</script>

<style>
</style>