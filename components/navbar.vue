<template>
  <header class="p-8">
    <div class="mx-auto container flex items-center justify-between">
      <NuxtLink v-gsap.from='{ opacity: 0 }' to="/">
        <div class="flex gap-2 items-center">
          <i-logo class="h-6 w-6 text-[#7BA7CC]" :fontControlled="false" />
          <p class="hidden font-bold font-['Poppins'] sm:inline-block">Sanchia Jodie</p>
        </div>
      </NuxtLink>
      <nav class="items-center justify-center">
        <NavMenu v-gsap.delay-500.stagger.from="{ opacity: 0 }" />
      </nav>
      <NuxtLink v-gsap.delay-1000.from="{ opacity: 0 }" to="/#footer" class="hidden px-5 py-2 rounded-full font-semibold text-white bg-blue-600 hover:bg-blue-800 sm:inline-block">
        Contact Me
      </NuxtLink>
    </div>
  </header>
</template>

<script lang="ts" setup>
import ILogo from '~/assets/logo/logo.svg'
</script>

<style></style>