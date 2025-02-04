<template>
  <ul class="flex gap-6">
    <li v-for="menu in navMenus">
      <NuxtLink :to="menu.path" class="font-semibold text-secondary hover:text-blue-600">
        {{ menu.name }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const navMenus = ref([
  // { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  // { name: 'Services', path: '/#service-section' },
  { name: 'Work', path: '/work' },
  // { name: '/images/certificates/', path: '/#certificate-section' },
])
</script>

<style>

</style>