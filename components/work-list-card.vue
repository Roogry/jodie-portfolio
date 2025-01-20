<template>
  <NuxtLink :to="'/work/' + slug"
    class="group/work rounded-xl border-[.5px] bg-white/30 backdrop-blur-sm border-gray-300 hover:bg-blue-500/10 hover:border-blue-300">
    <div class="p-5">
      <div class="flex flex-nowrap gap-4 items-center">
        <Badge v-for="role in roles">
          <p class="text-sm font-medium">{{ role }}</p>
        </Badge>
      </div>

      <div class="mt-4 flex gap-4">
        <NuxtImg class="w-[170px] h-[170px] rounded-xl" :src="thumbnailPath" alt="Work Example"/>

        <div class="flex gap-4 flex-col justify-between">
          <div class="work-description">
            <h2 class="text-xl font-bold line-clamp-2">{{ name }}</h2>
            <p class="mt-2.5 line-clamp-2">{{ description }}</p>
          </div>

          <div class="flex gap-4 items-center justify-between">
            <div class="group/work font-semibold text-xl">
              <div class="h-full inline-flex gap-3 items-center justify-start">
                <p class="text-secondary group-hover/work:text-blue-700">View Project</p>
                <span
                  class="p-1.5 border-[.5px] border-gray-300 rounded-full group-hover/work:border-blue-500 group-hover/work:bg-blue-500">
                  <i-right class="w-6 h-6 text-black group-hover/work:text-white" :fontControlled="false" />
                </span>
              </div>
            </div>

            <p>{{ year }}</p>
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