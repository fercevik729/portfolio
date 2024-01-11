<template>
  <div>
    <ClientOnly>
      <AppNavbar />
    </ClientOnly>
    <SplashScreen />
    <slot />
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Furkan Ercevik",
  meta: [
    {
      name: "About Me | Furkan Ercevik",
      content: "Furkan Ercevik's Portfolio and Blog",
    },
  ],
});
</script>
