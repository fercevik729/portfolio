<template>
  <div class="flex items-center">
    <i class="i-heroicons-arrow-right"></i>
    <p class="ml-2">{{ text }}</p>
  </div>
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
