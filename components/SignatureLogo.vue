<template>
  <img
    src="~/assets/images/signature.png"
    alt="Signature"
    :style="{ width: `${width}%` }"
  />
</template>

<script lang="ts" setup>
const { width } = defineProps({
  width: {
    type: Number,
    default: 20,
  },
});
</script>
