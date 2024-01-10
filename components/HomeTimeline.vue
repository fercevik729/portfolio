<!--Primary component for landing page-->
<template>
  <div>
    <TitleBanner />

    <!-- <article
      v-for="(event, index) in events"
      :key="index"
      class="event w-screen flex justify-center space-x-4 p-8"
    >
      <section class="flex items-center">
        <img src="~/assets/images/stock.jpg" class="w-20 h-20 mr-4" />
        <div>
          <h2>{{ event.title }}</h2>
          <p>{{ event.description }}</p>
        </div>
      </section>
    </article> -->
  </div>
</template>

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
