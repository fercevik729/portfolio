<!--Primary component for landing page-->
<template>
  <div class="flex flex-col items-center md:gap-64">
    <TitleBanner />
    <SkillSection />
    <SkillMeters />
    <RoundedButton v-if="showScrollTop" class="scroll-top" @click="scrollTop">
      <Icon name="i-heroicons-arrow-up"></Icon>
    </RoundedButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const showScrollTop = ref(false);

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 100;
};

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
.scroll-top {
  position: fixed;
  bottom: 0px;
  left: 0px;
}

h2,
.title {
  letter-spacing: 0.02em;
  @apply text-2xl md:text-6xl text-center font-semibold;
}

/* Custom fade-in animation */
@media (prefers-reduced-motion: no-preference) {
  .fade {
    scale: 0.8;
    opacity: 0;
    animation: fade-in linear forwards;
    animation-timeline: view();
    animation-range: entry 50px;
  }
}

@keyframes fade-in {
  to {
    scale: 1;
    opacity: 1;
  }
}
</style>
