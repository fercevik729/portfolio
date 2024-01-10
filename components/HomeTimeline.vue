<!--Primary component for landing page-->
<template>
  <div class="timeline">
    <ParallaxBanner />
    <article
      v-for="(event, index) in events"
      :key="index"
      class="event w-screen bg-blue-300 flex justify-center space-x-4 text-black p-8"
    >
      <section class="flex items-center">
        <img src="~/assets/images/stock.jpg" class="w-20 h-20 mr-4" />
        <div>
          <h2>{{ event.title }}</h2>
          <p>{{ event.description }}</p>
        </div>
      </section>
    </article>
  </div>
</template>

<script lang="ts" setup>
const events = [
  {
    title: "Event 1",
    description: "Description of Event 1",
  },
  {
    title: "Event 2",
    description: "Description of Event 2",
  },
  {
    title: "Event 3",
    description: "Description of Event 3",
  },
  {
    title: "Event 4",
    description: "Description of Event 4",
  },
  {
    title: "Event 5",
    description: "Description of Event 5",
  },
  {
    title: "Event 6",
    description: "Description of Event 6",
  },
  {
    title: "Event 7",
    description: "Description of Event 7",
  },
  {
    title: "Event 8",
    description: "Description of Event 8",
  },
  {
    title: "Event 9",
    description: "Description of Event 9",
  },
  {
    title: "Event 10",
    description: "Description of Event 10",
  },
];
</script>

<style>
/* Custom fade-in animation */
@media (prefers-reduced-motion: no-preference) {
  .event {
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
