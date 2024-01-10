<template>
  <div v-if="loading" class="splash-screen">
    <client-only>
      <SignatureLogo :width="20" />
      <Vue3Lottie
        :animation-data="splashAnimation"
        :height="300"
        :width="300"
      />
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import splashAnimation from "~/assets/animations/splashAnimation.json";
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 5000);
});
</script>

<style>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: flex;
  @apply dark:bg-black bg-white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
  opacity: 1;
}
.splash-screen p {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  margin-top: 1rem;
}
</style>
