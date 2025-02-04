<template>
  <section id="home-section">
    <div class="relative">
      <div class="home-container">
        <Navbar />

        <div class="container min-h-[100vh] pt-4 px-8 flex flex-col items-center sm:pt-12">
          <div class="text-center">
            <h1 v-gsap.from='{ opacity: 0, y: 50 }' class="text-4xl font-medium lg:text-6xl leading-normal sm:text-5xl">Crafting Digital Solutions</h1>
            <p v-gsap.from='{ opacity: 0, y: 50 }' class="mt-4 text-xl font-medium lg:text-4xl sm:mt-8 sm:text-3xl">With Me <span class="font-bold text-blue-500">Sanchia Jodie</span></p>
          </div>

          <div v-gsap.from='{ autoAlpha: 0 }'>
            <NuxtImg v-gsap.magnetic.weaker class="mt-8 aspect-video" width="500px" src="/images/decorations/card-jodie.png" alt="Sanchia Jodie" :placeholder="[500, 307, 50, 5]"/>
          </div>
          
          <p v-gsap.animateText.once class="mt-8 max-w-[600px] text-base text-secondary text-center leading-relaxed lg:text-2xl sm:text-xl">
            I’m a Full Stack Creative Mobile and Web Developer. Delivering
            top-notch digital solutions to match your needs.
          </p>

          <div class="mt-8 flex flex-col-reverse gap-4 items-center justify-center sm:flex-row">
            <NuxtLink 
              v-gsap.desktop.delay-1000.slow.once.from='{ autoAlpha: 0, x: 10 }' 
              v-gsap.mobile.delay-1000.slow.once.from='{ autoAlpha: 0, y: 10 }' 
              to="#footer"
              class="w-[156px] h-14 rounded-full font-semibold text-lg text-white bg-blue-600 hover:bg-blue-800 sm:w-[164px] sm:h-14 sm:text-xl">
              <div class="h-full flex items-center justify-start">
                <span class="mx-3 bg-white p-1.5 rounded-full sm:ml-3">
                  <i-hand class="w-6 h-6 text-black" :fontControlled="false" />
                </span>
                <p>Reach Me</p>
              </div>
            </NuxtLink>
            <NuxtLink 
              v-gsap.desktop.delay-1000.slow.once.from='{ autoAlpha: 0, x: -10 }' 
              v-gsap.mobile.delay-1000.slow.once.from='{ autoAlpha: 0, y: 10 }' 
              to="/documents/resume-jodie.pdf" 
              target="_blank"
              class="w-[156px] h-14 rounded-full font-semibold text-lg text-secondary border border-secondary hover:text-white hover:bg-secondary sm:w-[164px] sm:h-14 sm:text-xl"
            >
              <div class="h-full flex items-center justify-center">Download CV</div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <span class="particle-circular particle-origin-top-left particle-animate-rotate top-[-20vmax] left-[-70vmax] sm:top-[-30vmax] sm:left-[-50vmax]"></span>
      <span class="particle-circular particle-origin-top-left particle-animate-rotate top-[20vmax] right-[-70vmax] sm:top-[0vmax] sm:right-[-50vmax]"></span>
    </div>
  </section>

  <section id="service-section">
    <div class="container px-8 pt-[50px] mb-[60px] sm:pt-[100px] sm:mb-[120px] sm:px-10">
      <div class="text-center">
        <h1 v-gsap.whenVisible.from='{ opacity: 0, y: 50 }' class="text-3xl font-medium lg:text-5xl sm:text-4xl">Services & Skills</h1>
        <p v-gsap.whenVisible.from='{ opacity: 0, y: 50 }' class="mt-4 text-base text-secondary sm:text-xl">I’ll help make your great project a reality with my expertise</p>
      </div>

      <div class="mt-10 sm:mt-16">
        <div 
          v-gsap.whenVisible.stagger.from="{ 
            opacity: 0, 
            y: 50, 
            start: 'top 80%',
            end: 'bottom 50%',
          }"
          class="grid grid-cols-1 gap-y-4 gap-x-6 lg:grid-cols-3 md:gap-y-10 md:gap-x-8 sm:grid-cols-2 sm:gap-y-5"
        >
          <ServiceCard v-for="service in services" 
            :name="service.name" :description="service.description" :icon="service.icon" />
        </div>
      </div>
    </div>
  </section>

  <section id="work-section" class="relative">
    <div class="container pt-[70px] mb-[60px] sm:pt-[100px] sm:mb-[120px]">
      <div class="px-8 flex flex-col gap-4 items-start justify-between sm:px-10 sm:flex-row">
        <h1 v-gsap.whenVisible.from="{ opacity: 0, x: -32 }" class="w-full text-3xl font-medium lg:text-5xl leading-normal lg:max-w-[600px] sm:text-4xl">Look at Some of My Exciting Recent Work</h1>
        <NuxtLink to="/work"
          v-gsap.desktop.whenVisible.from="{ 
            opacity: 0, 
            x: 32,
            start: 'top 90%',
            end: 'bottom 10%', 
          }"
          v-gsap.mobile.whenVisible.from="{ 
            opacity: 0, 
            x: -32,
            start: 'top 90%',
            end: 'bottom 10%', 
          }"
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
        <div 
          v-gsap.whenVisible.stagger.from="{ 
            opacity: 0, 
            y: 50, 
            start: 'top 80%',
            end: 'bottom 10%',
          }"
          class="pb-4 px-8 overflow-x-auto overflow-y-hidden flex gap-x-4 sm:px-10 sm:grid sm:gap-y-10 sm:gap-x-8 sm:grid-cols-2 sm:overflow-hidden"
        >
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

    <NuxtImg class="absolute -z-30 top-0 w-full" src="/images/decorations/bg-work.png" placeholder />
  </section>

  <section id="certificate-section">
    <div class="container px-8 pt-[50px] mb-[60px] sm:px-10 sm:pt-[100px] sm:mb-[120px]">
      <div class="text-center">
        <h1 
          v-gsap.desktop.whenVisible.from="{ 
            opacity: 0, y: 32,
            start: 'top 10%',
            end: 'bottom -10%',
          }" 
          v-gsap.mobile.whenVisible.from="{ 
            opacity: 0, y: 32, 
            start: 'top 50%',
            end: 'bottom 10%',
          }" 
          class="text-3xl font-medium lg:text-5xl sm:text-4xl"
        >
          Certifications & Awards
        </h1>
        <p 
          v-gsap.desktop.whenVisible.from="{ 
            opacity: 0, y: 32, 
            start: 'top 10%',
            end: 'bottom -10%',
          }" 
          v-gsap.mobile.whenVisible.from="{ 
            opacity: 0, y: 32, 
            start: 'top 50%',
            end: 'bottom 10%',
          }" 
          class="mt-4 text-base text-secondary sm:text-xl"
        >
          Showcasing my journey of growth, expertise, and excellence
        </p>
      </div>

      <div class="max-w-[960px] mt-16">
        <div 
          v-gsap.desktop.whenVisible.from="{ 
            scale: 0.8, 
            width: 0,
            height: 0, 
            padding: 0,
            start: 'top 10%',
            end: 'bottom -20%',
          }"
          v-gsap.mobile.whenVisible.from="{ 
            scale: 0.8, 
            width: 0,
            height: 0, 
            padding: 0,
          }"
          class="p-4 mx-auto rounded-xl bg-blue-50 border-[.5px] border-blue-300 overflow-hidden"
        >
          <UCarousel 
            ref="certificateRef" 
            v-slot="{ item, i }" 
            :items="certificates" 
            :ui="{ item: 'basis-full' }" 
            class="block rounded-lg overflow-hidden sm:hidden" arrows
            v-gsap.mobile.whenVisible.delay-1000.from="{ 
              opacity: 0,
              y: 32
            }"
          >
            <NuxtImg @click="showOverview(i)" :src="item" class="w-full" draggable="false" placeholder/>
          </UCarousel>

          <div 
            v-gsap.desktop.whenVisible.delay-1000.stagger.from="{ 
              opacity: 0,
              start: 'top 10%',
              end: 'bottom -20%',
            }"
            class="p-8 hidden sm:grid sm:grid-cols-3 sm:gap-6"
          >
            <NuxtImg 
              v-for="( certificate, i ) in certificates" 
              @click="showOverview(i)"
              class="w-full object-cover rounded-lg border border-white" 
              style="aspect-ratio: 7/5;"
              :src="certificate" 
              placeholder
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="footer">
    <Footer />
  </section>

  <VueEasyLightbox
    :visible="isOpenOverviewCertificate"
    :imgs="certificates"
    :index="focusedCertificateImgIdx"
    @hide="isOpenOverviewCertificate = false"
  />
</template>

<script lang="ts">
export default {
  data() {
    return {
      isOpenOverviewCertificate: false,
      focusedCertificateImgIdx: 0,
      certificates: [
        '/images/certificates/cert-frontend-expert.png',
        '/images/certificates/cert-flutter-101.png',
        '/images/certificates/cert-android-101.png',
        '/images/certificates/cert-backend-js-pemula.png',
        '/images/certificates/cert-tensorflow.png',
        '/images/certificates/cert-git.png',
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
  methods: {
    showOverview(index: number) {
      this.isOpenOverviewCertificate = true;
      this.focusedCertificateImgIdx = index;
    },
  },
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/bg-animate.scss";
</style>