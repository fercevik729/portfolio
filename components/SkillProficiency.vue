<template>
  <div
    class="flex flex-col items-center md:items-start w-2/3 px-20 mb-10"
    data-aos="fade-right"
  >
    <h2>Proficiency</h2>
    <template v-for="s in skills" :key="s.name">
      <h4 class="my-5">{{ s.name }}</h4>
      <UMeter :value="s.value" size="xl" class="mb-5" />
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
    value: 85,
  },
  {
    name: "Cloud and DevOps",
    value: 50,
  },
];
</script>

<style></style>
