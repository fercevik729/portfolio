<template>
  <main>
    <Transition name="fade">
      <UAlert
        v-if="showAlert"
        title="Site under construction"
        type="info"
        variant="solid"
        color="orange"
        class="max-w-2xl mx-auto"
        description="This site is currently under construction. Please check back later for more content!"
        :close-button="{
          icon: 'i-heroicons-x-mark-20-solid',
          color: 'white',
          variant: 'link',
          padded: false,
        }"
        @click="closeAlert"
      />
    </Transition>
    <HomeTimeline />
  </main>
</template>

<script setup lang="ts">
const showAlert = ref(true);

const closeAlert = () => {
  showAlert.value = false;
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
