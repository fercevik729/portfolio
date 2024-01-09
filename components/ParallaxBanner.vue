<template>
  <div class="overflow-hidden max-h-screen relative parallax">
    <h2 class="overlay-text title absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <span class="typewriter">{{ currentPhrase }}</span>
    </h2>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

const phrases = ["I'm Furkan Ercevik", "I'm a developer", "I'm an engineer", "I'm a cat lover"];
const currentPhraseIndex = ref(0);
const currentPhrase = computed(() => phrases[currentPhraseIndex.value]);

let intervalId: NodeJS.Timeout | null;
let showCaret = ref(true);

onMounted(() => {
  intervalId = setInterval(() => {
    currentPhraseIndex.value = (currentPhraseIndex.value + 1) % phrases.length;
  }, 2000); // Change the interval duration (in milliseconds) as per your preference

  setInterval(() => {
    showCaret.value = !showCaret.value;
  }, 500); // Change the blinking interval duration (in milliseconds) as per your preference
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style>
.parallax {
  /* The image used */
  background-image: url("~/assets/images/background-dark.jpg");

  /* Set a specific height */
  min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.title {
  font-family: Poppins, sans-serif;
  @apply text-6xl text-center text-white font-semibold;
}

.typewriter {
  overflow: hidden; /* Ensures the text is not visible outside the container */
  border-right: 0.15em solid white; /* Creates the typewriter caret effect */
  white-space: nowrap; /* Keeps the text in a single line */
  margin: 0 auto; /* Centers the text horizontally */
  letter-spacing: 0.15em; /* Adjusts the spacing between characters */
  animation: typing 1s steps(20, end), blink-caret 0.7s infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}

.caret {
  display: inline-block;
  animation: blink-caret 0.75s step-end infinite;
}



</style>