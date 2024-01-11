<template>
  <UButton
    :ui="{
      rounded: 'rounded-full',
    }"
    class="flex flex-row items-center gap-1 bg-slate-300 dark:bg-slate-700 p-3 m-6 maxw-32 text-black dark:text-white"
    label="Click me"
    variant="solid"
    color="white"
  >
    <span class="text-lg">
      {{ text }}
    </span>
    <slot />
  </UButton>
</template>

<script lang="ts" setup>
const { text } = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>
