<template>
  <div class="rounded-xl border bg-white border-gray-300 transition-colors duration-300 hover:bg-blue-50 hover:border-blue-300 dark:bg-white/5 dark:border-white/10">
    <div class="py-4 px-4 flex flex-row gap-4 items-center text-center md:py-10 md:px-8 md:flex-col md:gap-6 sm:py-5 sm:px-6">
      <component :is="icon" class="shrink-0 w-8 h-8 text-black sm:w-16 sm:h-16 dark:text-gray-300" :fontControlled="false"/>
      <div class="service-info max-w-[300px] flex flex-col gap-1 items-start md:gap-2 md:items-center">
        <h2 class="text-md text-start font-normal md:text-xl md:text-center sm:font-semibold dark:text-gray-300">{{ name }}</h2>
        <p class="text-xs text-start text-secondary md:text-center sm:text-sm dark:text-gray-400">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: [String],
    description: [String],
    icon: [String],
  },
}
</script>

<style>

</style>