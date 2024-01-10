<template>
  <ClientOnly>
    <nav>
      <div class="p-4 flex justify-between">
        <div class="flex justify-left items-center gap-4">
          <SignatureLogo />
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
              :class="darkMode ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
              :color="darkMode ? 'black' : 'white'"
            />
            </UButton>
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
