<template>
  <a
    :href="to"
    class="underlined-link group transition duration-300 hover-underline-animation hover:dark:text-white hover:text-black flex-shrink"
  >
    {{ label }}
    <span
      class="block group-hover:max-w-full transition-all duration-500 h-0.5"
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
.underlined-link {
  letter-spacing: 0.02em;
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
  @apply text-gray-500;
}

.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  @apply bg-black dark:bg-white;
  transform-origin: bottom right;
  transition: transform 0.35s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
