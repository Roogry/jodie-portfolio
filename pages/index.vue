<template>
  <section id="home-section">
    <div class="relative">
      <div class="home-container">
        <Navbar />

        <div class="container min-h-[100vh] pt-4 px-8 mt-[100px] flex flex-col items-center sm:pt-12">
          <div class="text-center">
            <h1 v-gsap.to='{ autoAlpha: 1, y: 0 }' class="text-4xl font-medium leading-normal opacity-0 translate-y-36 sm:text-5xl lg:text-6xl dark:text-white">Crafting Digital Solutions</h1>
            <p v-gsap.to='{ autoAlpha: 1, y: 0 }' class="mt-4 text-xl font-medium opacity-0 translate-y-36 lg:text-4xl sm:mt-8 sm:text-3xl dark:text-gray-300">With Me <span class="font-bold text-blue-500">Sanchia Jodie</span></p>
          </div>

          <div v-gsap.to='{ autoAlpha: 1 }' class="relative mt-8 w-[500px] max-w-full aspect-[587/328] opacity-0">
            <div class="absolute bottom-0 w-full aspect-[587/306]">
              <div v-gsap.desktop.magnetic class="absolute top-1/2 left-0 -translate-y-1/2 w-full aspect-[587/274]">
                <div class="w-full h-full rounded-2xl bg-blue-600/30 backdrop-blur-md"></div>
              </div>
              <div v-gsap.desktop.magnetic.stronger class="absolute top-0 left-1/2 -translate-x-1/2 h-full aspect-[557/306]">
                <div class="w-full h-full rounded-2xl bg-blue-600"></div>
              </div>
            </div>
            <div 
              v-gsap.desktop.magnetic.stronger 
              class="absolute h-full w-full">
              <NuxtImg 
                src="/images/decorations/jodie-main.png"
                alt="Professional Sanchia Jodie Portrait"
                class="absolute bottom-0 left-1/2 -translate-x-1/2 h-full aspect-[13/14] origin-bottom"
                loading="lazy"
                placeholder          
              />
            </div>
          </div>
          
          <p v-gsap.animateText.once class="mt-8 max-w-[600px] text-base text-secondary text-center leading-relaxed lg:text-2xl sm:text-xl dark:text-gray-400">
            I’m a Full Stack Creative Mobile and Web Developer. Delivering
            top-notch digital solutions to match your needs.
          </p>

          <div class="mt-8 flex flex-col-reverse gap-4 items-center justify-center sm:flex-row">
            <NuxtLink 
              v-gsap.desktop.delay-1000.slow.once.to='{ autoAlpha: 1, x: 0, y: 0 }' 
              v-gsap.mobile.delay-1000.slow.once.to='{ autoAlpha: 1, x: 0, y: 0 }' 
              to="#footer"
              class="group w-[156px] h-14 rounded-full font-semibold text-lg text-white bg-blue-600 transition-colors duration-300 opacity-0 translate-x-0 translate-y-4 sm:translate-x-4 sm:translate-y-0 hover:bg-blue-800 sm:w-[164px] sm:h-14 sm:text-xl dark:bg-blue-800 dark:hover:bg-blue-700">
              <div class="h-full flex items-center justify-start">
                <span class="mx-3 bg-white p-1.5 rounded-full sm:ml-3">
                  <i-hand class="w-6 h-6 text-black  group-hover:animate-wiggle" :fontControlled="false" />
                </span>
                <p>Reach Me</p>
              </div>
            </NuxtLink>
            <NuxtLink 
              v-gsap.desktop.delay-1000.slow.once.to='{ autoAlpha: 1, x: 0 }' 
              v-gsap.mobile.delay-1000.slow.once.to='{ autoAlpha: 1, y: 0 }' 
              to="/documents/resume-jodie.pdf" 
              target="_blank"
              class="w-[156px] h-14 rounded-full font-semibold text-lg text-secondary border border-secondary transition-colors duration-300 opacity-0 translate-x-0 translate-y-4 sm:-translate-x-4 sm:translate-y-0 hover:text-white hover:bg-secondary sm:w-[164px] sm:h-14 sm:text-xl dark:border-gray-300 dark:text-gray-300 dark:border-0 dark:bg-white/10 dark:hover:bg-white/15"
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
        <h1 v-gsap.whenVisible.from='{ opacity: 0, y: 50 }' class="text-3xl font-medium lg:text-5xl sm:text-4xl dark:text-white">Services & Skills</h1>
        <p v-gsap.whenVisible.from='{ opacity: 0, y: 50 }' class="mt-4 text-base text-secondary sm:text-xl dark:text-gray-400">I’ll help make your great project a reality with my expertise</p>
      </div>

      <div class="mt-10 sm:mt-16">
        <div 
          v-gsap.whenVisible.stagger.from="{ 
            opacity: 0, 
            y: 50, 
            start: 'top 80%',
            end: 'bottom 90%',
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
        <h1 v-gsap.whenVisible.from="{ opacity: 0, x: -32 }" class="w-full text-3xl font-medium lg:text-5xl leading-normal lg:max-w-[600px] sm:text-4xl dark:text-white">Look at Some of My Exciting Recent Work</h1>
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
          class="shrink-0 py-3 rounded-full font-semibold text-base text-white bg-blue-600 transition duration-300 hover:bg-blue-800 sm:h-14 sm:text-xl dark:bg-blue-800 dark:hover:bg-blue-700">
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
            end: 'bottom 100%',
          }"
          class="px-8 overflow-x-auto flex gap-x-4 sm:px-10 sm:grid sm:gap-y-10 sm:gap-x-8 sm:grid-cols-2 sm:overflow-hidden"
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

    <div v-gsap.parallax.slower-10 class="particle-half-circular !w-[50vmin] !h-[20vmin] top-28 left-1/2 -translate-x-1/2"></div>
    <div v-gsap.parallax.slower-10 class="-z-20 absolute top-1/2 -left-32 w-[50vmin] h-[20vmin]">
      <div class="particle-half-circular rotate-[-115deg] size-full"></div>
    </div>
    <div v-gsap.parallax.slower-10 class="-z-20 absolute bottom-0 -right-32 w-[50vmin] h-[20vmin]">
      <div class="particle-half-circular rotate-[115deg] size-full"></div>
    </div>
  </section>

  <section id="certificate-section">
    <div class="container h-[60vh] px-8 pt-[50px] mb-0 sm:h-screen sm:px-10 sm:pt-[100px] sm:mb-8">
      <div class="text-center">
        <h1 
          v-gsap.whenVisible.from="{ 
            opacity: 0, y: 32,
            start: 'top 80%',
            end: 'bottom 50%',
          }" 
          class="text-3xl font-medium lg:text-5xl sm:text-4xl dark:text-white"
        >
          Certifications & Awards
        </h1>
        <p 
          v-gsap.whenVisible.delay-100.from="{ 
            opacity: 0, y: 32, 
            start: 'top 80%',
            end: 'bottom 50%',
          }"
          class="mt-4 text-base text-secondary sm:text-xl dark:text-gray-300"
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
            start: 'top 90%',
            end: 'bottom 40%',
          }"
          v-gsap.mobile.whenVisible.from="{ 
            scale: 0.8, 
            width: 0,
            height: 0, 
            padding: 0,
          }"
          class="p-4 mx-auto rounded-xl bg-blue-50 border-[.5px] border-blue-300 overflow-hidden dark:bg-blue-500/10 dark:border-blue-300/20"
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
            <NuxtImg 
              @click="showOverview(i)" 
              :src="item" 
              :alt="'jodie\'s certificate ' + (i + 1)"
              class="w-full object-cover" 
              style="aspect-ratio: 7/5;"
              draggable="false" 
              loading="lazy"
            />
          </UCarousel>

          <div 
            v-gsap.desktop.whenVisible.stagger.from="{ 
              y: 400,
              start: 'top 60%',
              end: 'bottom 40%',
            }"
            class="p-8 hidden sm:grid sm:grid-cols-3 sm:gap-6"
            style="scale:none"
          >
            <div v-for="( certificate, i ) in certificates">
              <div class="transition cursor-pointer scale-100 hover:scale-105 hover:z-30">
                <NuxtImg 
                  @click="showOverview(i)"
                  class="w-full object-cover rounded-lg border border-white dark:border-blue-300/40" 
                  style="aspect-ratio: 7/5;"
                  :src="certificate"
                  :alt="'jodie\'s certificate ' + (i + 1)"
                  loading="lazy"
                />
              </div>
            </div>
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

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Reactive state
const isOpenOverviewCertificate = ref(false)
const focusedCertificateImgIdx = ref(0)
const certificates = [
  '/images/certificates/cert-frontend-expert.jpg',
  '/images/certificates/cert-flutter-101.jpg',
  '/images/certificates/cert-android-101.jpg',
  '/images/certificates/cert-backend-js-pemula.jpg',
  '/images/certificates/cert-tensorflow.jpg',
  '/images/certificates/cert-git.jpg',
]

// Template ref (gunakan tipe yang lebih spesifik jika diketahui)
const certificateRef = ref<{ page: number; pages: number; next: () => void; select: (n: number) => void }>()

// Stores
const portfolioStore = usePortfolioStore()
const serviceStore = useServiceStore()

// Computed
const portfolios = computed(() => portfolioStore.portfolios.slice(0, 4))
const services = computed(() => serviceStore.services)

// Auto-rotation logic
let intervalId: number

onMounted(() => {
  intervalId = window.setInterval(() => {
    if (!certificateRef.value) return
    
    const { page, pages } = certificateRef.value
    page === pages ? certificateRef.value.select(0) : certificateRef.value.next()
  }, 3000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})

// Methods
const showOverview = (index: number) => {
  isOpenOverviewCertificate.value = true
  focusedCertificateImgIdx.value = index
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/bg-animate.scss";
</style>