<template>
  <div class="overflow-hidden max-h-screen relative" :style="parallaxStyle">
    <div
      class="overlay-text title absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col"
    >
      Hi, I'm Furkan Ercevik
      <span class="typewriter p-4">I'm a{{ typedPhrase }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import DarkBackground from "@/assets/images/background-dark.jpg";
import LightBackground from "@/assets/images/background-light.jpg";

const colorMode = useColorMode();
const darkMode = computed(() => {
  return colorMode.value === "dark";
});

const imagePath = computed(() => {
  return darkMode.value ? DarkBackground : LightBackground;
});

const parallaxStyle = computed(() => {
  return {
    /* The image used */
    "background-image": `url("${imagePath.value}")`,
    /* Set a specific height */
    "min-height": "500px",
    /* Create the parallax scrolling effect */
    "background-attachment": "fixed",
    "background-position": "center",
    "background-repeat": "no-repeat",
    "background-size": "cover",
  };
});

const phrases = [" developer", "n engineer", " cat lover"];
const currentPhraseIndex = ref(0);
const currentPhrase = computed(() => phrases[currentPhraseIndex.value]);
const typedPhrase = ref("");

// Watch for changes in currentPhrase and updates typedPhrase to create a typing effect
watchEffect(() => {
  for (let i = 0; i < currentPhrase.value.length; i++) {
    setTimeout(() => {
      typedPhrase.value = currentPhrase.value.slice(0, i + 1);
    }, i * 100);
  }
});

// Change the phrase every 5 seconds
let intervalId: NodeJS.Timeout | null;
onMounted(() => {
  intervalId = setInterval(() => {
    currentPhraseIndex.value = (currentPhraseIndex.value + 1) % phrases.length;
  }, 5000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style>
.title {
  font-family: Poppins, sans-serif;
  letter-spacing: 0.1em; /* Adjusts the spacing between characters */
  @apply text-6xl text-center text-white font-semibold;
}

.typewriter {
  overflow: hidden; /* Ensures the text is not visible outside the container */
  border-right: 0.12em solid white; /* Creates the typewriter caret effect */
  white-space: nowrap; /* Keeps the text in a single line */
  margin: 0 auto; /* Centers the text horizontally */
  animation: blink-caret 0.75s infinite;
}

@keyframes blink-caret {
  from {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}
</style>
