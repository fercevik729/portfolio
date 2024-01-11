<template>
  <span class="flex items-center mb-4">
    <i class="i-heroicons-arrow-right-circle hidden md:inline-block"></i>
    <p class="ml-2 inline-block skill-text">{{ text }}</p>
  </span>
</template>

<script lang="ts" setup>
const { text } = defineProps({
  text: {
    type: String,
    default: "Some filler text",
  },
});
</script>

<style></style>
