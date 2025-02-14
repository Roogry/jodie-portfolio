<template>
  <div class="relative">
    <Navbar />

    <div class="container pt-12 pb-10 mt-[70px] min-h-screen sm:px-10 sm:mt-[100px]">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-5 sm:grid-cols-2">
        <div class="lg:col-span-2 sm:col-span-1">
          <div v-if="portfolio?.id" class="content">
            <section id="work-info" class="px-8 sm:px-0">
              <h1 v-gsap.from='{ opacity: 0, y: 50 }' class="text-3xl font-medium lg:text-5xl sm:text-4xl dark:text-white">{{ portfolio.name }}</h1>
              <p v-gsap.delay-100.from='{ opacity: 0, y: 50 }' class="mt-4 mb-6 text-base text-secondary sm:text-xl dark:text-gray-400">{{ portfolio.description }}</p>
              
              <NuxtLink v-if="portfolio.visitUrl" 
                :to="portfolio.visitUrl" 
                target="_blank" 
                class="group font-semibold text-lg sm:text-xl"
                v-gsap.delay-500.from='{ opacity: 0, y: 50 }'
              >
                <div class="h-full inline-flex gap-3 items-center justify-start">
                  <p class="text-secondary group-hover:text-blue-700 dark:text-gray-400 dark:group-hover:text-blue-600">View Result</p>
                  <span
                    class="p-1.5 border-[.5px] border-gray-300 rounded-full group-hover:border-blue-500 group-hover:bg-blue-500 dark:group-hover:border-blue-700 dark:group-hover:bg-blue-700">
                    <i-right class="w-6 h-6 text-black group-hover:text-white dark:text-gray-400" :fontControlled="false" />
                  </span>
                </div>
              </NuxtLink>
            </section>

            <section id="work-overview-mobile">
              <div class="block mt-8 sm:hidden">
                <section id="work-image-section" class="w-full">
                  <UCarousel 
                    v-slot="{ item, i }" 
                    :items="portfolio.images" 
                    :ui="{ item: 'snap-center', container: 'gap-4 px-8' }"
                    v-gsap.delay-800.from="{ 
                      opacity: 0, 
                      x: 50,
                    }"
                  >
                    <NuxtImg @click="showOverview(i)" class="h-[150px] rounded-xl border-2 border-gray-300/60" :src="item" :alt="getAltImage(portfolio.name, i)" placeholder/>
                  </UCarousel>
                </section>
              </div>
            </section>

            <section id="work-details" class="px-8 sm:px-0">
              <div class="mt-12 info-detail sm:mt-20">
                <div v-if="portfolio.studyCase" class="mt-8 detail-item">
                  <h2 v-gsap.delay-1000.from='{ opacity: 0, y: 32 }' class="text-lg font-medium sm:text-xl dark:text-white">Study Case</h2>
                  <div v-gsap.delay-1200.stagger.from='{ opacity: 0 }' class="mt-3 case-desc">
                    <p class="mt-2.5 text-base text-secondary sm:text-lg dark:text-gray-400"><MDC :value="portfolio.studyCase" unwrap="p" /></p>
                  </div>
                </div>

                <div v-if="portfolio.client || portfolio.year" class="mt-8 detail-item">
                  <h2 v-gsap.delay-1000.from='{ opacity: 0, y: 32 }' class="text-lg font-medium sm:text-xl dark:text-white">Client - Year</h2>
                  <p v-gsap.delay-1000.from='{ opacity: 0 }' class="mt-3 text-base text-secondary sm:text-lg dark:text-gray-400">{{ portfolio.client }} - {{ portfolio.year }}</p>
                </div>

                <div v-if="portfolio.roles" class="mt-8 detail-item">
                  <h2 v-gsap.delay-1000.from='{ opacity: 0, y: 32 }' class="text-lg font-medium sm:text-xl dark:text-white">Role</h2>
                  <div v-gsap.delay-1000.from='{ opacity: 0 }' class="mt-3 flex flex-wrap gap-3 items-center">
                    <Badge v-for="role in portfolio.roles" variant="colored">
                      <p class="text-sm">{{ role }}</p>
                    </Badge>
                  </div>
                </div>

                <div v-if="portfolio.techs" class="mt-8 detail-item">
                  <h2 v-gsap.delay-1000.from='{ opacity: 0, y: 32 }' class="text-xl font-bold dark:text-white">Technology</h2>
                  <div v-gsap.delay-1000.from='{ opacity: 0 }' class="mt-3 flex flex-wrap gap-3 items-center">
                    <Badge v-for="tech in portfolio.techs" variant="colored">
                      <p class="text-sm">{{ tech }}</p>
                    </Badge>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <!-- skeleton -->
          <div v-else class="px-8 sm:px-0">
            <div class="space-y-3">
              <USkeleton class="h-12 max-w-[250px]" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>
              <USkeleton class="h-12" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>
            </div>

            <div class="mt-6 mb-6 space-y-2">
              <USkeleton class="h-6" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>
              <USkeleton class="h-6" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>
              <USkeleton class="h-6 max-w-[300px]" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>
            </div>

            <div class="flex items-center space-x-4">
              <USkeleton class="h-6 w-[100px]" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>
              <USkeleton class="h-8 w-8" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40', rounded: 'rounded-full' }"/>
            </div>
            
            <USkeleton class="block mt-8 sm:hidden h-[150px]" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>

            <USkeleton class="mt-12 h-6 w-[120px]" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>
            <div class="mt-3 mb-6 space-y-3">
              <USkeleton class="h-4" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>
              <USkeleton class="h-4" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>
              <USkeleton class="h-4" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>
              <USkeleton class="h-4 max-w-[200px]" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>
            </div>
            <div class="mt-10 mb-6 space-y-3">
              <USkeleton class="h-4" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>
              <USkeleton class="h-4" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>
              <USkeleton class="h-4" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>
              <USkeleton class="h-4" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>
              <USkeleton class="h-4 max-w-[300px]" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>
            </div>
          </div>
        </div>
        
        <div class="hidden lg:col-span-3 sm:inline-block sm:col-span-1">
          <section v-if="portfolio?.id" id="work-overview-desktop" class="w-full">
            <div v-gsap.stagger.from='{ opacity: 0, y: 32 }' class="flex flex-col gap-12">
              <NuxtImg v-for="(image, i) in portfolio.images" @click="showOverview(i)" class="rounded-xl" :src="image" :alt="'Portfolio Overview ' + i + 1" placeholder/>
            </div>
          </section>

          <!-- skeleton -->
          <div v-else>
            <USkeleton class="w-full h-[450px]" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>
            <USkeleton class="mt-12 w-full h-[300px]" :ui="{ background: 'bg-gray-300/40 dark:bg-gray-300/40' }"/>
          </div>
        </div>
      </div>
    </div>

    <section id="footer" class="mt-20 sm:mt-40">
      <Footer is-mini-ver />
    </section>

    <VueEasyLightbox
      :visible="isOpenOverview"
      :imgs="portfolio?.images"
      :index="focusedPortfolioImgIdx"
      @hide="isOpenOverview = false"
    />
    
    <span class="opacity-60 particle-circular particle-origin-top-left particle-animate-rotate top-[-20vmax] left-[-90vmax] sm:top-[-20vmax] sm:left-[-80vmax] dark:opacity-100"></span>
    <span class="opacity-40 particle-sm particle-circular particle-origin-bottom-right particle-animate-rotate top-[20vmax] right-[-90vmax] sm:top-[30vmax] sm:right-[-80vmax] dark:opacity-100"></span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Reactive state
const isOpenOverview = ref(false)
const focusedPortfolioImgIdx = ref(0)

// Router
const route = useRoute()

// Pinia store
const portfolioStore = usePortfolioStore()

// Computed properties
const slug = computed(() => route.params.slug as string)
const portfolio = computed(() => portfolioStore.portfolio)

// Lifecycle hook
onMounted(async () => {
  await getPortfolio()
})

// Methods
const getPortfolio = async () => {
  await portfolioStore.showPortfolio(slug.value)
}

const getAltImage = (name: string, index: number) => {
  return `Overview ${name} ${index + 1}`
}

const showOverview = (index: number) => {
  isOpenOverview.value = true
  focusedPortfolioImgIdx.value = index
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/bg-animate.scss";
</style>