<template>
  <div
    class="flex flex-col items-center md:items-end justify-center md:justify-normal gap-4 md:pr-28"
    data-aos="fade-left"
  >
    <h2 class="title mr-12">What I Do</h2>
    <div class="flex flex-col justify-end text-sm md:text-xl">
      <p class="skill-text text-sm md:text-2xl mb-5 ml-2">
        Curious backend developer that dabbles in full stack development & AI
        projects.
      </p>
      <ListElement
        text="Develop fault-tolerant, distributed, scalable, and highly available backend services with Go"
      />
      <ListElement
        text="Integrate with major cloud providers and services such as AWS, Azure, and Vercel via CI/CD"
      />
      <ListElement
        text="Create highly interactive user interfaces in full stack web applications using Vue.js and React"
      />
    </div>
    <SkillCarousel />
    <SkillCarousel :reverse="true" :icons="moreIcons" />
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
p {
  @apply max-w-64 md:max-w-full md:w-full text-wrap;
}
</style>
