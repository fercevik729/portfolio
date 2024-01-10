<template>
  <a :href="to" class="group transition duration-300 hover-underline-animation text-slate-500 hover:dark:text-white hover:text-black">
    {{ label }}
    <span
      class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5"
    ></span>
  </a>
</template>

<script lang="ts" setup>
const { label, to } = defineProps({
  label: {
    type: String,
    default: "Link",
  },
  to: {
    type: String,
    default: "#",
  },
});
</script>

<style>
.hover-underline-animation {
  display: inline-block;
  position: relative;
  @apply text-slate-500
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  @apply bg-black dark:bg-white;
  transform-origin: bottom right;
  transition: transform 0.15s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

</style>
