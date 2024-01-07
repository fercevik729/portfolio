<script setup>
const colorMode = useColorMode();
const darkMode = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <nav
    :class="{
      'border-b border-gray-300 bg-gray-200': !darkMode,
      'border-b border-gray-700 bg-gray-800': darkMode,
    }"
  >
    <div class="p-4 flex justify-between">
      <div class="flex justify-left items-center">
        <SignatureLogo /> 
        <UButton
          :icon="
            darkMode ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
          "
          :color="darkMode ? 'indigo' : 'yellow'"
          variant="ghost"
          aria-label="Toggle dark mode"
          size="xl"
          @click="darkMode = !darkMode"
        />
      </div>
      <div class="flex items-center">
        <UButtonGroup size="md" orientation="horizontal" class="shadow-none">
          <UButton
            label="Home"
            color="primary"
            variant="link"
            to="/"
            class="font-bold"
          />
          <UButton
            label="Projects"
            color="primary"
            variant="link"
            to="/projects"
            class="font-bold"
          />
          <UButton
            label="Blog"
            color="primary"
            variant="link"
            to="/blog"
            class="font-bold"
          />
          <UButton
            label="About"
            color="primary"
            variant="link"
            to="/about"
            class="font-bold"
          />
        </UButtonGroup>
      </div>
    </div>
  </nav>
</template>
