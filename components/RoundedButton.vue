<template>
  <UButton
    :ui="{
      rounded: 'rounded-full',
    }"
    class="flex flex-row border outline-none items-center pl-3 pr-3 gap-1 bg-slate-200 dark:bg-slate-900 p-3 m-6 maxw-32 text-black dark:text-white hover:dark:border-white hover:border-black"
    variant="ghost"
    color="white"
    :to="to"
    :target="newTab ? '_blank' : '_self'"
  >
    <span v-if="text.length > 0" class="button-text">
      {{ text }}
    </span>
    <slot />
  </UButton>
</template>

<script lang="ts" setup>
const { text, to, newTab } = defineProps({
  text: {
    type: String,
    default: "",
  },
  to: {
    type: String,
    default: "#",
  },
  newTab: {
    type: Boolean,
    default: false,
  },
});
</script>
<style>
.button-text {
  letter-spacing: 0.02em;
  @apply text-lg;
}
</style>
