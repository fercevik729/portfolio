<template>
  <div
    class="bg-slate-200 dark:bg-slate-900 w-1/6 md:w-7/12 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
  >
    <ul
      class="flex items-center justify-center sm:justify-start [&_li]:mx-8 p-2"
      :style="scrollAnimation"
    >
      <li v-for="icon in icons" :key="icon">
        <Icon :name="icon" />
      </li>
    </ul>
    <ul
      class="flex items-center justify-center sm:justify-start [&_li]:mx-8 [&_img]:max-w-none"
      :style="scrollAnimation"
      aria-hidden="true"
    >
      <li v-for="icon in icons" :key="icon">
        <Icon :name="icon" />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const { icons, reverse } = defineProps({
  icons: {
    type: Array as () => string[],
    default: () => [
      "mdi:microsoft-azure",
      "mdi:aws",
      "mdi:git",
      "uil:linux",
      "mdi:docker",
      "mdi:nodejs",
      "mdi:kubernetes",
      "simple-icons:express",
      "fa6-brands:golang",
      "mdi:language-python",
      "bxl:postgresql",
      "mdi:language-java",
    ],
  },
  reverse: {
    type: Boolean,
    default: false,
  },
});

const scrollAnimation = {
  animation: "infinite-scroll 25s linear infinite",
  "animation-direction": reverse ? "reverse" : "normal",
};
</script>
<style>
.moving-li {
  @apply bg-slate-700 rounded-sm p-1;
}

.scroll-animation {
  animation: infinite-scroll 25s linear infinite;
}

@keyframes infinite-scroll {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
