<template>
  <header class="p-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 sm:p-0">
    <div class="px-5 py-3 rounded-xl transition-all duration-500 sm:px-8 sm:py-6 sm:w-full sm:rounded-none"
      :class="isFloating ? 'shadow-lg bg-[#F9F9F9]/70 backdrop-blur-md dark:bg-[#111315]/70 sm:shadow-sm' : 'shadow-none bg-transparent'">
      <div class="mx-auto container flex items-center justify-between">
        <NuxtLink v-gsap.from='{ opacity: 0 }' to="/">
          <div class="group flex gap-2 items-center">
            <i-logo class="h-6 w-6 transition duration-300 text-[#4785b8] group-hover:text-[#6997bc] dark:text-[hsl(207,44%,50%)] dark:group-hover:text-[#91b6d4]" :fontControlled="false" />
            <p class="hidden transition duration-300 font-bold font-['Poppins'] sm:inline-block group-hover:text-[#547d9e] dark:text-gray-300/70 dark:group-hover:text-gray-300">Sanchia Jodie</p>
          </div>
        </NuxtLink>
        <nav class="items-center justify-center">
          <NavMenu v-gsap.delay-500.stagger.from="{ opacity: 0 }" />
        </nav>

        <div v-gsap.delay-1000.stagger.from="{ opacity: 0 }" class="flex items-center gap-4">
          <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="blue"
            variant="ghost"
            aria-label="Theme"
            class="w-8 h-8 flex-items justify-center transition duration-300"
            @click="isDark = !isDark"
          />
          <NuxtLink to="/#footer" class="hidden px-5 py-2 rounded-full font-semibold text-white bg-blue-600 transition duration-300 hover:bg-blue-800 sm:inline-block dark:bg-blue-800 dark:hover:bg-blue-700">
            Contact Me
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import ILogo from '~/assets/logo/logo.svg'
import { ref, onMounted, onBeforeUnmount } from 'vue';

const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const isFloating = ref(false);
const handleScroll = () => {
  isFloating.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style></style>