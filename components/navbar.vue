<template>
  <header class="p-8">
    <div class="mx-auto container flex items-center justify-between">
      <NuxtLink to="/">
        <div class="flex gap-2 items-center">
          <i-logo class="h-6 w-6 text-[#7BA7CC]" :fontControlled="false" />
          <p class="hidden font-bold font-['Poppins'] sm:inline-block">Sanchia Jodie</p>
        </div>
      </NuxtLink>
      <div class="items-center justify-center">
        <NavMenu />
      </div>
      <NuxtLink to="/#footer" class="hidden px-5 py-2 rounded-full font-semibold text-white bg-blue-600 hover:bg-blue-800 sm:inline-block">
        Contact Me
      </NuxtLink>
    </div>
  </header>
</template>

<script lang="ts" setup>
import ILogo from '~/assets/logo/logo.svg'
</script>

<style></style>