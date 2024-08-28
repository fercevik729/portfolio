<template>
  <nav>
    <div class="p-4 flex justify-between">
      <div class="flex justify-left items-center gap-4">
        <SignatureLogo v-if="windowWidth >= 600" />
        <UAvatar v-else size="sm" class="rounded-full" alt="Furkan Ercevik" />
        <UButton
          :ui="{
            rounded: 'rounded-full',
          }"
          class="outline-none border-2 dark:border-gray-500 dark:hover:border-white hover:border-black"
          :color="darkMode ? 'gray' : 'white'"
          variant="ghost"
          aria-label="Toggle dark mode"
          size="xl"
          @click="darkMode = !darkMode"
        >
          <i
            :class="
              darkMode
                ? 'i-heroicons-moon-20-solid'
                : 'i-heroicons-sun-20-solid'
            "
            :color="darkMode ? 'black' : 'white'"
          />
        </UButton>
      </div>
      <div class="flex items-center gap-8">
        <div v-for="link in links" :key="link.to">
          <UnderlinedLink :label="link.label" :to="link.to" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const darkMode = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Experience",
    to: "#experience",
  },
  {
    label: "Projects",
    to: "https://github.com/fercevik729",
  },
  {
    label: "Resume",
    to: "/resume",
  },
];
</script>
