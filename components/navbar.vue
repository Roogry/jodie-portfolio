<template>
  <header class="p-8">
    <div class="mx-auto container flex items-center justify-between">
      <NuxtLink v-gsap.from='{ opacity: 0 }' to="/">
        <div class="group flex gap-2 items-center">
          <i-logo class="h-6 w-6 transition text-[#7BA7CC] group-hover:text-[#4785b8] dark:text-[hsl(207,44%,50%)] dark:group-hover:text-[#91b6d4]" :fontControlled="false" />
          <p class="hidden transition font-bold font-['Poppins'] sm:inline-block group-hover:text-blue-600 dark:text-gray-300/70 dark:group-hover:text-gray-300">Sanchia Jodie</p>
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
          class="w-8 h-8 flex-items justify-center"
          @click="isDark = !isDark"
        />
        <NuxtLink to="/#footer" class="hidden px-5 py-2 rounded-full font-semibold text-white bg-blue-600 hover:bg-blue-800 sm:inline-block dark:bg-blue-800 dark:hover:bg-blue-700">
          Contact Me
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import ILogo from '~/assets/logo/logo.svg'

const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<style></style>