<template>
  <footer class="w-screen bg-gradient-to-b from-blue-500/0 via-blue-500/5 via-30% to-blue-500/30">
    <div class="py-8 px-10 flex flex-col items-center">
      <div v-if="!isMiniVer" class="mt-8 p-6 max-w-[800px] w-full bg-white rounded-xl sm:p-8">
        <div class="text-center">
          <p class="text-lg font-semibold sm:text-xl">Drop hello through</p>
          <p class="mt-1 text-xl text-blue-500 font-semibold sm:mt-3 sm:text-3xl">jodiemantra@gmail.com</p>
        </div>
      </div>

      <div v-else class="flex flex-col gap-1 items-center justify-center sm:flex-row">
        <p class="text-base sm:text-lg sm:font-semibold">Drop hello through : </p>
        <p class="text-lg font-semibold text-black">jodiemantra@gmail.com</p>
      </div>

      <NavMenu v-if="!isMiniVer" class="mt-10" />

      <div class="mt-8 h-10 flex gap-3.5 items-center justify-center">
        <NuxtLink to="https://www.linkedin.com/in/sanchia-jodie/">
          <i-linkedin class="w-8 h-8 text-secondary transition duration-200 ease-in-out hover:scale-110" :fontControlled="false" />
        </NuxtLink>
        <NuxtLink to="https://www.instagram.com/sanchiajodie/" class="w-8 h-8 p-1.5 rounded-full bg-secondary transition duration-200 ease-in-out hover:scale-110">
          <i-instagram class="text-white" :fontControlled="false" />
        </NuxtLink>
        <div class="w-8 h-8 bg-blue-700 rounded-full overflow-hidden transition-all ease-in-out duration-400 hover:scale-125 hover:bg-yellow-500 hover:animate-wiggle">
          <NuxtImg src="/decorations/jodie-mini.png" placeholder/>
        </div>
        <NuxtLink to="https://github.com/Roogry/roogry">
          <i-github class="w-8 h-8 text-secondary transition duration-200 ease-in-out hover:scale-110" :fontControlled="false" />
        </NuxtLink>
        <NuxtLink to="https://dribbble.com/Roogry" class="w-8 h-8 p-1 rounded-full bg-secondary transition duration-200 ease-in-out hover:scale-110">
          <i-dribbble class="text-white" :fontControlled="false" />
        </NuxtLink>
      </div>

      <p class="mt-8 text-sm text-center text-secondary sm:mt-[100px]">@ Copyright 2024 Sanchia Jodie -  Full Stack Creative Mobile and Web Developer</p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
defineProps({
  isMiniVer: {
    type: Boolean,
    default: false
  }
});
</script>

<style></style>