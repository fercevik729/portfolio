<template>
  <div>
    <ClientOnly>
      <AppNavbar />
    </ClientOnly>
    <SplashScreen />
    <slot />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Furkan's Portfolio",
});
</script>
