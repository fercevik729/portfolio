<template>
  <div class="flex flex-col fade items-center md:items-end gap-4 mb-10">
    <h2 class="title mr-1">What I Do</h2>
    <p class="skill-text text-sm md:text-2xl">
      Curious backend developer that dabbles in full stack development and AI
      projects.
    </p>

    <div class="flex flex-col justify-end text-sm md:text-xl">
      <ListElement
        text="Develop fault-tolerant, scalable, and concurrent backend services"
      />
      <ListElement
        text="Integrate with major cloud providers and services such as AWS, Azure, and Vercel via CI/CD"
      />
      <ListElement
        text="Create highly interactive user interfaces in full stack web applications"
      />
    </div>
    <SkillsCarousel />
    <SkillsCarousel :reverse="true" :icons="moreIcons" />
  </div>
</template>

<script lang="ts" setup>
const moreIcons = [
  "mdi:language-javascript",
  "mdi:react",
  "mdi:vuejs",
  "mdi:language-html5",
  "mdi:language-css3",
  "mdi:language-typescript",
  "mdi:tailwind",
  "simple-icons:prisma",
  "mdi:graphql",
  "tabler:brand-yarn",
  "tabler:brand-nuxt",
  "tabler:brand-nextjs",
];
</script>

<style>
.skill-text {
  @apply max-w-64 md:max-w-full md:w-full text-wrap;
}
</style>
