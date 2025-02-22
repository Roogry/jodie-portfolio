<template>
  <div :class="cn(badgeVariants({ variant }), props.class)">
    <div class="px-3 py-2">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "vue";
import { cn } from "~/lib/utils";

const badgeVariants = cva(
  "rounded-full border-[.5px]",
  {
    variants: {
      variant: {
        default: "border-gray-400",
        colored: "border-blue-300/60 bg-blue-100 text-blue-700 backdrop-blur-md dark:bg-blue-600/20 dark:text-blue-600",
        blur: "border-gray-400/60 bg-white/50 backdrop-blur-md",
        linkColored: "transition duration-300 border-blue-300/60 bg-blue-100 hover:bg-blue-700  text-blue-700 hover:text-white backdrop-blur-md dark:bg-blue-600/20 dark:hover:bg-blue-600/50 dark:text-blue-600 dark:hover:text-blue-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type BadgeVariants = VariantProps<typeof badgeVariants>;

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    variant?: BadgeVariants["variant"];
  }>(),
  {
    variant: "default",
  },
);
</script>

<style></style>