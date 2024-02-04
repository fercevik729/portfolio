<template>
  <div class="flex flex-row">
    <div
      v-for="(item, index) in projects"
      :key="index"
      class="p-4 cursor-pointer border-b-2 border-gray-200 mr-2"
      :class="{ active: index === activeProject }"
      @click="toggleAccordion(index)"
    >
      {{ item.title }}
    </div>
    <transition name="fade">
      <div
        v-if="activeProject !== null"
        class="mt-2 p-2 border-b-2 border-gray-200 flex-grow"
      >
        {{ projects[activeProject].content }}
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
const activeProject = ref<number | null>(null);
const projects = [
  {
    title: "This is the first project",
    content: "This is the content of the first project",
  },
  {
    title: "This is the second project",
    content: "This is the content of the second project",
  },
  {
    title: "This is the third project",
    content: "This is the content of the third project",
  },
];
const toggleAccordion = (index: number) => {
  activeProject.value = index;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
