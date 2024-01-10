<template>
  <ClientOnly>
    <nav>
      <div class="p-4 flex justify-between">
        <div class="flex justify-left items-center">
          <SignatureLogo />
          <UButton
            :icon="
              darkMode
                ? 'i-heroicons-moon-20-solid'
                : 'i-heroicons-sun-20-solid'
            "
            :color="darkMode ? 'indigo' : 'yellow'"
            variant="ghost"
            aria-label="Toggle dark mode"
            size="xl"
            @click="darkMode = !darkMode"
          />
        </div>
        <div class="flex items-center gap-4">
          <div v-for="link in links" :key="link.to">
            <UnderlinedLink :label="link.label" :to="link.to" />
          </div>
        </div>
      </div>
    </nav>
  </ClientOnly>
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

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Blog",
    to: "/blog",
  },
  {
    label: "About",
    to: "/about",
  },
];
</script>
