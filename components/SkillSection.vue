<template>
  <div class="flex justify-center sm:justify-end fade mr-16">
    <div class="flex flex-col items-center sm:items-end gap-4 mb-">
      <h2 class="title md:mr-20">What I Do</h2>
      <p class="skill-text text-sm sm:text-2xl">
        Curious backend developer that dabbles in full stack development and AI
        projects.
      </p>

      <div class="flex flex-col justify-end text-sm sm:text-xl">
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
  @apply text-center max-w-64 md:max-w-full sm:w-full text-wrap;
}
</style>
