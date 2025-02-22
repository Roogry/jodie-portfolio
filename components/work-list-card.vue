<template>
  <NuxtLink :to="'/work/' + slug"
    class="group rounded-xl border-[.5px] bg-white/30 backdrop-blur-sm border-gray-300 hover:bg-blue-500/10 hover:border-blue-300 dark:bg-white/5 dark:border-white/20">
    <div class="h-full p-4 flex flex-col gap-4 sm:p-5">
      <div class="hidden lg:flex lg:flex-nowrap lg:gap-2 lg:items-center">
        <Badge v-for="role in roles">
          <p class="text-xs dark:text-gray-300">{{ role }}</p>
        </Badge>
      </div>

      <div class="h-full flex flex-col gap-3 items-center lg:flex-row sm:gap-4 ">
        <NuxtImg class="w-full object-cover rounded-xl lg:w-[170px] lg:h-[170px]" style="aspect-ratio: 1742/1503;" :src="thumbnailPath" :alt="'Overview ' + name" loading="lazy" :placeholder="[100]"/>

        <div class="h-full w-full flex gap-1 flex-col justify-between sm:gap-4">
          <div class="work-description">
            <h2 class="text-base font-medium line-clamp-2 sm:font-medium sm:text-lg dark:text-gray-300">{{ name }}</h2>
            <p class="mt-1 text-secondary line-clamp-2 dark:text-gray-400">{{ description }}</p>
          </div>

          <div class="hidden gap-4 items-center justify-between sm:flex">
            <div class="group flex items-center justify-center font-normal text-lg sm:font-semibold">
              <div class="h-full inline-flex gap-3 items-center justify-start">
                <p class="text-secondary group-hover:text-blue-700 dark:text-gray-400 dark:group-hover:text-blue-600">Detail <span class="hidden md:inline-block">Project</span></p>
                <span
                  class="p-1 rounded-full border-[.5px] border-gray-300 group-hover:border-blue-500 group-hover:bg-blue-500 dark:group-hover:border-blue-700 dark:group-hover:bg-blue-700">
                  <i-right class="w-6 h-6 text-black group-hover:text-white dark:text-gray-400" :fontControlled="false" />
                </span>
              </div>
            </div>

            <p class="text-secondary dark:text-gray-400">{{ year }}</p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
export default {
  props: {
    name: [String],
    year: [Number],
    description: [String],
    roles: [Array],
    slug: [String],
    thumbnailPath: [String],
  },
}
</script>

<style>

</style>