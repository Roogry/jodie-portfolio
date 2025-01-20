<template>
  <div class="relative">
    <Navbar />

    <div class="container pt-12">
      <div class="grid grid-cols-5 gap-10">
        <div class="col-span-2">
          <section id="work-info">
            <h1 class="text-5xl font-medium">{{ portfolio.name }}</h1>
            <p class="mt-4 mb-6 text-lg">{{ portfolio.description }}</p>

            <NuxtLink v-if="portfolio.visitUrl" :to="portfolio.visitUrl" target="_blank" class="group/action font-semibold text-xl">
              <div class="h-full inline-flex gap-3 items-center justify-start">
                <p class="text-secondary group-hover/action:text-blue-700">Visit Result</p>
                <span
                  class="p-1.5 border-[.5px] border-gray-300 rounded-full group-hover/work:border-blue-500 group-hover/action:bg-blue-500">
                  <i-right class="w-6 h-6 text-black group-hover/action:text-white" :fontControlled="false" />
                </span>
              </div>
            </NuxtLink>

            <div class="mt-20 info-detail">
              <div class="mt-8 detail-item">
                <h2 class="text-xl font-bold">Study Case</h2>
                <div class="mt-3 case-desc">
                  <p class="mt-2.5 text-lg">The system addresses the challenges of manual processes in managing student participation, event registration, and document verification.</p>
                  <p class="mt-2.5 text-lg">With features like student registration, event and committee sign-ups, QR attendance tracking, voting, and document uploads, the platform simplifies administrative tasks. It enables seamless participation in campus activities and enhances transparency and accuracy. The system has reduced the workload for both students and administrators, leading to improved engagement and efficient event management.</p>
                </div>
              </div>

              <div class="mt-8 detail-item">
                <h2 class="text-xl font-bold">Client - Year</h2>
                <p class="mt-3 text-lg">{{ portfolio.client }} - {{ portfolio.year }}</p>
              </div>

              <div class="mt-8 detail-item">
                <h2 class="text-xl font-bold">Role</h2>
                <div class="mt-3 flex flex-wrap gap-4 items-center">
                  <Badge v-for="role in portfolio.roles" variant="colored">
                    <p class="text-sm font-medium">{{ role }}</p>
                  </Badge>
                </div>
              </div>

              <div class="mt-8 detail-item">
                <h2 class="text-xl font-bold">Technology</h2>
                <div class="mt-3 flex flex-wrap gap-4 items-center">
                  <Badge v-for="tech in portfolio.techs" variant="colored">
                    <p class="text-sm font-medium">{{ tech }}</p>
                  </Badge>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col-span-3">
          <section id="work-image-section" class="w-full">
            <div class="flex flex-col gap-12">
              <NuxtImg v-for="(image, i) in portfolio.images" class="rounded-xl" :src="image" :alt="'Portfolio Overview ' + i + 1"/>
            </div>
          </section>
        </div>
      </div>
    </div>

    <section id="footer" class="mt-40">
      <Footer is-mini-ver />
    </section>

    <NuxtImg class="absolute max-w-[1652px] -z-30 top-[-500px] left-[-1000px]"
          src="/decorations/circular-radial-gradient-blue.png" />
    <NuxtImg class="absolute max-w-[750px] rotate-[120deg] -z-30 top-[800px] right-[-300px]"
          src="/decorations/top-pie-gradient-blue.png" />
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
  }
}
</script>

<style>
</style>