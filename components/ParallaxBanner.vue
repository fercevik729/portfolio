<template>
  <client-only>
    <div class="relative title">
      <div className="overflow-hidden max-h-screen">
        <img
          src="~/assets/images/background-dark.jpg"
          class="bg-cover bg-no-repeat"
          :style="transformStyle"
        />
      </div>
      <h2
        class="overlay-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        I'm Furkan Ercevik
      </h2>
    </div>
  </client-only>
</template>

<script lang="ts" setup>
const scrollPosition = ref(window.scrollY);

const transformStyle = computed(() => {
  return {
    transform: `translateY(${scrollPosition.value * 0.5}px)`,
  };
});

onMounted(() => {
  window.addEventListener("scroll", parallaxEffect);
});

onBeforeMount(() => {
  window.removeEventListener("scroll", parallaxEffect);
});

const parallaxEffect = () => {
  scrollPosition.value = window.scrollY;
};
</script>
