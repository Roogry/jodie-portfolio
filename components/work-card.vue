<template>
  <NuxtLink :to="'/work/' + slug"
    class="min-w-[250px] group rounded-xl border-[.5px] bg-white/30 backdrop-blur-sm border-gray-300 transition-colors duration-300 hover:bg-blue-500/10 hover:border-blue-300 sm:w-full dark:bg-white/5 dark:border-white/10 dark:hover:bg-blue-500/10">
    <div class="h-full p-5 flex flex-col justify-between">
      <div>
        <div class="relative">
          <NuxtImg class="w-full object-cover rounded-xl" style="aspect-ratio: 1742/1503;" :src="thumbnailPath" :alt="'Overview ' + name" loading="lazy" :placeholder="[150]"/>
          <div class="hidden mt-4 lg:absolute lg:bottom-4 lg:left-2 lg:flex lg:flex-nowrap lg:gap-2 lg:items-center">
            <Badge v-for="role in roles" variant="blur">
              <p class="text-xs">{{ role }}</p>
            </Badge>
          </div>
        </div>

        <div class="work-description mt-4 mb-6">
          <h2 class="text-base font-medium line-clamp-2 sm:font-bold sm:text-xl dark:text-gray-300">{{ name }}</h2>
          <p class="mt-2.5 text-secondary line-clamp-2 dark:text-gray-400">{{ description }}</p>
        </div>
      </div>

      <div class="font-semibold text-lg sm:text-xl">
        <div class="h-full inline-flex gap-3 items-center justify-start">
          <p class="transition duration-300 text-secondary group-hover:text-blue-700 dark:text-gray-400 dark:group-hover:text-blue-600">View Project</p>
          <span
            class="p-1.5 border-[.5px] border-gray-300 rounded-full transition duration-300 group-hover:border-blue-500 group-hover:bg-blue-500 dark:group-hover:border-blue-700 dark:group-hover:bg-blue-700">
            <i-right class="w-6 h-6 text-black transition duration-300 group-hover:text-white dark:text-gray-400" :fontControlled="false" />
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
export default {
  props: {
    name: [String],
    description: [String],
    roles: [Array],
    slug: [String],
    thumbnailPath: [String],
  },
}
</script>

<style></style>