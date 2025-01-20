<template>
  <div :class="cn(badgeVariants({ variant }), props.class)">
    <div class="px-4 py-2">
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
        colored: "border-blue-300/60 bg-blue-100 text-blue-700 backdrop-blur-md",
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