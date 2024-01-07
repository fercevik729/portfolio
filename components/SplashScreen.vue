<template>
  <div v-if="loading" class="splash-screen">
    <client-only>
      <Vue3Lottie
        :animation-data="splashAnimation"
        :height="200"
        :width="200"
      />
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import splashAnimation from "../assets/splashAnimation.json";
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
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
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
  opacity: 1;
}

</style>
