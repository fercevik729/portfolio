<template>
  <div class="max-h-screen flex items-center justify-center p-32 pb-44">
    <div
      class="title flex flex-col items-center"
      :aria-label="`Hi, I'm Furkan Ercevik. I'm a${typedPhrase}`"
    >
      Hi, I'm Furkan Ercevik
      <span class="typewriter p-4">I'm a{{ typedPhrase }}</span>

      <div class="flex flex-row">
        <RoundedButton text="Resume" to="/resume" class="pl-5 pr-5">
          <Icon name="mdi:document" />
        </RoundedButton>

        <RoundedButton
          text="LinkedIn"
          to="https://linkedin.com/in/furkan-tarik-ercevik"
          :new-tab="true"
          class="pl-5 pr-5"
        >
          <Icon name="ion:logo-linkedin" />
        </RoundedButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

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
.typewriter {
  overflow: hidden; /* Ensures the text is not visible outside the container */
  border-right: 0.12em solid; /* Creates the typewriter caret effect */
  white-space: nowrap; /* Keeps the text in a single line */
  margin: 0 auto; /* Centers the text horizontally */
  animation: blink-caret 0.75s infinite;
}

@keyframes blink-caret {
  from {
    border-color: transparent;
  }
  50% {
    border-color: #f3f5f4;
  }
}
</style>
