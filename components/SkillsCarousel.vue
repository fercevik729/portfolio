<template>
  <div
    class="bg-slate-200 dark:bg-slate-900 w-[800px] inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
  >
    <ul
      class="flex items-center justify-center md:justify-start [&_li]:mx-8 scroll-animation p-2"
    >
      <li v-for="icon in icons" :key="icon">
        <Icon :name="icon" />
      </li>
    </ul>
    <ul
      class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none scroll-animation"
      aria-hidden="true"
    >
      <li v-for="icon in icons" :key="icon">
        <Icon :name="icon" />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const icons = [
  "mdi:microsoft-azure",
  "mdi:aws",
  "mdi:git",
  "mdi:linux",
  "mdi:docker",
  "mdi:nodejs",
  "mdi:react",
  "mdi:vuejs",
  "fa6-brands:golang",
  "mdi:language-python",
];
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
