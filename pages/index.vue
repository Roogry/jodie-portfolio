<template>
  <section id="home-section">
    <div class="relative">
      <div class="relative">
        <Navbar />

        <div class="container min-h-[100vh] pt-4 px-8 flex flex-col items-center sm:pt-12">
          <div class="text-center">
            <h1 class="text-4xl font-medium lg:text-6xl leading-normal sm:text-5xl">Crafting Digital Solutions</h1>
            <p class="mt-4 text-xl font-medium lg:text-4xl sm:mt-8 sm:text-3xl">With Me <span class="font-bold text-blue-500">Sanchia Jodie</span></p>
          </div>

          <NuxtImg class="mt-8" width="500px" src="/decorations/card-jodie.png" alt="Sanchia Jodie"/>

          <p class="mt-8 max-w-[520px] text-base text-secondary text-center leading-relaxed lg:text-2xl sm:text-xl">
            I’m a Full Stack Creative Mobile and Web Developer. Delivering
            top-notch digital solutions to match your needs.
          </p>

          <div class="mt-8 flex flex-col-reverse gap-4 items-center justify-center sm:flex-row">
            <NuxtLink to="#footer"
              class="w-[156px] h-14 rounded-full font-semibold text-lg text-white bg-blue-600 hover:bg-blue-800 sm:w-[164px] sm:h-14 sm:text-xl">
              <div class="h-full flex items-center justify-start">
                <span class="mx-3 bg-white p-1.5 rounded-full sm:ml-3">
                  <i-hand class="w-6 h-6 text-black" :fontControlled="false" />
                </span>
                <p>Reach Me</p>
              </div>
            </NuxtLink>
            <NuxtLink to="/documents/resume-jodie.pdf" target="_blank"
              class="w-[156px] h-14 rounded-full font-semibold text-lg text-secondary border border-secondary hover:text-white hover:bg-secondar sm:w-[164px] sm:h-14 sm:text-xl">
              <div class="h-full flex items-center justify-center">Download CV</div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <NuxtImg class="absolute -z-30 -top-1/3 -left-1/2" densities="x1" width="1652px" format="webp"
        src="/decorations/circular-radial-gradient-blue.png" />
      <NuxtImg class="absolute -z-30 top-0 -right-1/2" densities="x1" width="1652px" format="webp"
        src="/decorations/circular-radial-gradient-blue.png" />
    </div>
  </section>

  <section id="service-section">
    <div class="container px-8 pt-[50px] mb-[60px] sm:pt-[100px] sm:mb-[120px] sm:px-10">
      <div class="text-center">
        <h1 class="text-3xl font-medium lg:text-5xl sm:text-4xl">Services & Skills</h1>
        <p class="mt-4 text-base text-secondary sm:text-xl">I’ll help make your great project a reality with my expertise</p>
      </div>

      <div class="mt-10 sm:mt-16">
        <div class="grid grid-cols-1 gap-y-4 gap-x-6 lg:grid-cols-3 md:gap-y-10 md:gap-x-8 sm:grid-cols-2 sm:gap-y-5">
          <ServiceCard v-for="service in services" 
            :name="service.name" :description="service.description" :icon="service.icon" />
        </div>
      </div>
    </div>
  </section>

  <section id="work-section" class="relative">
    <div class="container pt-[70px] mb-[60px] sm:pt-[100px] sm:mb-[120px]">
      <div class="px-8 flex flex-col gap-4 items-start justify-between sm:px-10 sm:flex-row">
        <h1 class="w-full text-3xl font-medium lg:text-5xl leading-normal lg:max-w-[600px] sm:text-4xl">Look at Some of My Exciting Recent Work</h1>
        <NuxtLink to="/work"
          class="shrink-0 py-3 rounded-full font-semibold text-base text-white bg-blue-600 hover:bg-blue-800 sm:h-14 sm:text-xl">
          <div class="h-full flex items-center justify-start">
            <p class="ml-4 sm:ml-5">Discover All</p>
            <span class="mx-3 bg-white p-1.5 rounded-full">
              <i-right class="w-5 h-5 text-black sm:w-6 sm:h-6" :fontControlled="false" />
            </span>
          </div>
        </NuxtLink>
      </div>

      <div class="mt-16">
        <div class="pb-4 px-8 overflow-x-auto flex gap-x-4 sm:px-10 sm:grid sm:gap-y-10 sm:gap-x-8 sm:grid-cols-2 sm:overflow-auto">
          <WorkCard v-for="portfolio in portfolios"
            :name="portfolio.name"
            :description="portfolio.description"
            :roles="portfolio.roles"
            :slug="portfolio.slug"
            :thumbnailPath="portfolio.thumbnailPath"
          />
        </div>
      </div>
    </div>

    <NuxtImg class="absolute -z-30 top-0 w-full" src="/decorations/bg-work.png" />
  </section>

  <section id="certificate-section">
    <div class="container px-8 pt-[50px] mb-[60px] sm:px-10 sm:pt-[100px] sm:mb-[120px]">
      <div class="text-center">
        <h1 class="text-3xl font-medium lg:text-5xl sm:text-4xl">Certifications & Awards</h1>
        <p class="mt-4 text-base text-secondary sm:text-xl">Showcasing my journey of growth, expertise, and excellence</p>
      </div>

      <div class="max-w-[960px] mt-16">
        <div class="p-4 rounded-xl bg-blue-50 border-[.5px] border-blue-300">
          <UCarousel ref="certificateRef" v-slot="{ item }" :items="certificates" :ui="{ item: 'basis-full' }" 
            class="block rounded-lg overflow-hidden sm:hidden" arrows>
            <NuxtImg :src="item" class="w-full" draggable="false"/>
          </UCarousel>

          <div class="p-8 hidden sm:grid sm:grid-cols-3 sm:gap-6">
            <NuxtImg v-for="certificate in certificates" class="w-full rounded-lg border border-white" :src="certificate" />
          </div>
        </div>
      </div>

      <!-- <div class="mt-12 flex justify-center">
        <NuxtLink to="#contact"
          class="h-14 rounded-full font-semibold text-xl text-white bg-blue-600 hover:bg-blue-800">
          <div class="h-full flex gap-3 items-center justify-start">
            <p class="ml-5">Discover All</p>
            <span class="mr-3 bg-white p-1.5 rounded-full">
              <i-right class="w-6 h-6 text-black" :fontControlled="false" />
            </span>
          </div>
        </NuxtLink>
      </div> -->
    </div>
  </section>

  <section id="footer">
    <Footer />
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      certificates: [
        '/certificates/cert-frontend-expert.png',
        '/certificates/cert-flutter-101.png',
        '/certificates/cert-android-101.png',
        '/certificates/cert-backend-js-pemula.png',
        '/certificates/cert-tensorflow.png',
        '/certificates/cert-git.png',
      ],
    };
  },
  computed: {
    portfolioStore() {
      return usePortfolioStore();
    },
    serviceStore() {
      return useServiceStore();
    },
    portfolios() {
      return this.portfolioStore.portfolios.slice(0, 4);
    },
    services() {
      return this.serviceStore.services;
    },
  },
  mounted() {
    this.$nextTick(async () => {
      setInterval(() => {
        if (!this.$refs['certificateRef']) return

        if (this.$refs['certificateRef'].page === this.$refs['certificateRef'].pages) {
          return this.$refs['certificateRef'].select(0)
        }
        
        this.$refs['certificateRef'].next()
      }, 3000);
    });
  },
}
</script>

<style></style>