<template>
  <div>
    <AppNavbar />
    <SplashScreen />
    <slot />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Furkan's Portfolio",
});
</script>
