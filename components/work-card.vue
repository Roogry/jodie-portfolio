<template>
  <NuxtLink :to="'/work/' + slug"
    class="min-w-[250px] group rounded-xl border-[.5px] bg-white/30 backdrop-blur-sm border-gray-300 hover:bg-blue-500/10 hover:border-blue-300 sm:w-full">
    <div class="h-full p-5 flex flex-col justify-between">
      <div>
        <div class="relative">
          <NuxtImg class="w-full object-cover rounded-xl" style="aspect-ratio: 1742/1503;" :src="thumbnailPath" :alt="'Overview ' + name" :placeholder="[150]"/>
          <div class="hidden mt-4 lg:absolute lg:bottom-4 lg:left-2 lg:flex lg:flex-nowrap lg:gap-2 lg:items-center">
            <Badge v-for="role in roles" variant="blur">
              <p class="text-xs">{{ role }}</p>
            </Badge>
          </div>
        </div>

        <div class="work-description mt-4 mb-6">
          <h2 class="text-base font-medium line-clamp-2 sm:font-bold sm:text-xl">{{ name }}</h2>
          <p class="mt-2.5 text-secondary line-clamp-2">{{ description }}</p>
        </div>
      </div>

      <div class="font-semibold text-lg sm:text-xl">
        <div class="h-full inline-flex gap-3 items-center justify-start">
          <p class="text-secondary group-hover:text-blue-700">View Project</p>
          <span
            class="p-1.5 border-[.5px] border-gray-300 rounded-full group-hover:border-blue-500 group-hover:bg-blue-500">
            <i-right class="w-6 h-6 text-black group-hover:text-white" :fontControlled="false" />
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