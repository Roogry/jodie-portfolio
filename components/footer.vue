<template>
  <footer class="w-screen bg-gradient-to-b from-blue-500/0 via-blue-500/5 via-30% to-blue-500/30">
    <div class="mt-8 pb-8 px-10 flex flex-col items-center">
      <div v-if="!isMiniVer"
        class="p-6 max-w-[800px] w-full overflow-hidden bg-white rounded-xl sm:p-8"
        v-gsap.whenVisible.from="{ 
          opacity: 0,
          start: 'top 100%',
          end: 'bottom 80%',
        }" 
      >
        <div class="text-center">
          <p 
            class="text-lg font-semibold sm:text-xl"
            v-gsap.whenVisible.from="{ 
              opacity: 0,
              start: 'top 100%',
              end: 'bottom 80%',
            }" 
          >Drop hello through</p>
          <p 
            class="mt-1 text-xl text-blue-500 font-semibold sm:mt-3 sm:text-3xl"
            v-gsap.whenVisible.from="{ 
              opacity: 0,
              y: 50,
              start: 'top 100%',
              end: 'bottom 80%',
            }" 
          >jodiemantra@gmail.com</p>
        </div>
      </div>

      <div v-else class="flex flex-col gap-1 items-center justify-center sm:flex-row">
        <p class="text-base sm:text-lg sm:font-semibold">Drop hello through : </p>
        <p class="text-lg font-semibold text-black">jodiemantra@gmail.com</p>
      </div>

      <NavMenu v-if="!isMiniVer" 
        class="mt-10" 
        v-gsap.whenVisible.from="{ 
          opacity: 0,
          start: 'top 90%',
          end: 'bottom 80%',
        }"
      />

      <div 
        class="mt-8 h-10 flex gap-3.5 items-center justify-center"
        v-gsap.whenVisible.stagger.from="{ 
          opacity: 0,
          start: 'top 100%',
          end: 'bottom 90%',
        }"
      >
        <NuxtLink to="https://www.linkedin.com/in/sanchia-jodie/">
          <div class="w-8 h-8 transition duration-200 ease-in-out hover:scale-110">
            <i-linkedin class="text-secondary" :fontControlled="false" />
          </div>
        </NuxtLink>
        <NuxtLink to="https://www.instagram.com/sanchiajodie/">
          <div class="w-8 h-8 p-1.5 rounded-full bg-secondary transition duration-200 ease-in-out hover:scale-110"> 
            <i-instagram class="text-white" :fontControlled="false" />
          </div>
        </NuxtLink>
        <div>
          <div class="w-8 h-8 bg-blue-700 rounded-full overflow-hidden transition-all ease-in-out duration-400 hover:scale-125 hover:bg-yellow-500 hover:animate-wiggle">
            <NuxtImg src="/images/decorations/jodie-mini.png" placeholder/>
          </div>
        </div>
        <NuxtLink to="https://github.com/Roogry/roogry">
          <div class="w-8 h-8 transition duration-200 ease-in-out hover:scale-110">
            <i-github class="text-secondary" :fontControlled="false" />
          </div>
        </NuxtLink>
        <NuxtLink to="https://dribbble.com/Roogry">
          <div class="w-8 h-8 p-1 rounded-full bg-secondary transition duration-200 ease-in-out hover:scale-110">
            <i-dribbble class="text-white" :fontControlled="false" />
          </div>
        </NuxtLink>
      </div>

      <p 
        class="mt-8 text-sm text-center text-secondary sm:mt-[100px]"
        v-gsap.whenVisible.from="{
          opacity: 0,
          start: 'top 100%',
          end: 'bottom 98%',
        }"
      >
      @ Copyright 2024 Sanchia Jodie -  Full Stack Creative Mobile and Web Developer
      </p>
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