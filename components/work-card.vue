<template>
  <NuxtLink :to="'/work/' + slug"
    class="min-w-[250px] group/work rounded-xl border-[.5px] bg-white/30 backdrop-blur-sm border-gray-300 hover:bg-blue-500/10 hover:border-blue-300 sm:w-full">
    <div class="h-full p-5 flex flex-col justify-between">
      <div>
        <NuxtImg class="rounded-xl" :src="thumbnailPath" :alt="'Overview ' + name"/>

        <div class="work-description mt-6 mb-6">
          <h2 class="text-xl font-bold line-clamp-2">{{ name }}</h2>
          <p class="mt-2.5 text-secondary line-clamp-2">{{ description }}</p>

          <div class="hidden mt-2 sm:flex sm:flex-nowrap sm:gap-4 sm:items-center">
            <Badge v-for="role in roles">
              <p class="text-sm font-medium">{{ role }}</p>
            </Badge>
          </div>
        </div>
      </div>

      <div class="font-semibold text-xl">
        <div class="h-full inline-flex gap-3 items-center justify-start">
          <p class="text-secondary group-hover/work:text-blue-700">View Project</p>
          <span
            class="p-1.5 border-[.5px] border-gray-300 rounded-full group-hover/work:border-blue-500 group-hover/work:bg-blue-500">
            <i-right class="w-6 h-6 text-black group-hover/work:text-white" :fontControlled="false" />
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