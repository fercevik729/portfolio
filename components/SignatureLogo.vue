<template>
  <img
    :src="darkMode ? SignatureDark : SignatureLight"
    alt="Signature"
    :style="{ width: `${width}%` }"
  />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import SignatureLight from "@/assets/svg/signature-light.svg";
import SignatureDark from "@/assets/svg/signature-dark.svg";

const colorMode = useColorMode();
const darkMode = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const { width } = defineProps({
  width: {
    type: Number,
    default: 50,
  },
});
</script>
