<template>
  <div class="flex flex-col fade items-center md:items-start w-full px-20">
    <h2>Proficiency</h2>
    <template v-for="s in skills" :key="s.name">
      <h3 class="my-5">{{ s.name }}</h3>
      <UMeter :value="s.value" size="2xl" class="mb-5"/>
    </template>
  </div>
</template>

<script lang="ts" setup>
const skills = [
  {
    name: "Frontend/Design",
    value: 60,
  },
  {
    name: "Backend",
    value: 70,
  },
  {
    name: "Cloud and DevOps",
    value: 50,
  },
];
</script>

<style></style>
