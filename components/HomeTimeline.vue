<!--Primary component for landing page-->
<template>
  <div class="flex flex-col gap-64">
    <TitleBanner />
    <SkillSection />
  </div>
</template>

<style>
.title {
  letter-spacing: 0.1em; /* Adjusts the spacing between characters */
  @apply text-6xl text-center font-semibold;
}

/* Custom fade-in animation */
@media (prefers-reduced-motion: no-preference) {
  .fadeable {
    scale: 0.8;
    opacity: 0;
    animation: fade-in linear forwards;
    animation-timeline: view();
    animation-range: entry 50px;
  }
}

@keyframes fade-in {
  to {
    scale: 1;
    opacity: 1;
  }
}
</style>
