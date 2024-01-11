<template>
  <div class="flex justify-end fade mr-16">
    <div class="flex flex-col items-end gap-4">
      <h2 class="title">What I Do</h2>
      <p class="text-2xl">
        Curious backend developer that dabbles in full stack development and AI
        projects
      </p>
      <ul class="text-xl">
        <li class="flex flex-col justify-start gap-2">
          <ListElement
            text="Develop fault-tolerant, scalable, and concurrent backend services"
          />
          <ListElement
            text="Integrate with major cloud providers and services such as AWS, Azure, and Vercel via CI/CD"
          />
          <ListElement
            text="Create highly interactive user interfaces in full stack web applications"
          />
        </li>
      </ul>
      <SkillsCarousel />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
