<template>
  <footer
    class="border-t border-slate-200 dark:border-slate-700 pb-8 pt-36 bg-slate-300 dark:bg-black"
  >
    <div class="container mx-auto">
      <div class="flex justify-items-center">
        <div class="grid grid-cols-3 gap-4 sm:gap-8 space-x-4 ml-5">
          <div>
            <h3 class="text-md sm:text-2xl">Furkan Ercevik</h3>
            <p class="footer-text mt-10">
              Lifelong learner and builder. Cogito ergo facio. I think therefore
              I make.
            </p>
            <SignatureLogo :width="60" />
          </div>
          <div class="flex flex-col">
            <h3 class="text-md sm:text-2xl">Contact</h3>
            <UnderlinedLink
              label="Email Furkan"
              class="mt-10 footer-link"
              to="mailto:f.ercevik21@gmail.com"
            />
            <UnderlinedLink
              label="Call Furkan"
              class="footer-link"
              to="tel:+14086137012"
            />
          </div>
          <div class="flex flex-col flex-shrink">
            <h3 class="text-md sm:text-2xl">Sitemap</h3>
            <UnderlinedLink label="Home" class="mt-10 footer-link" to="/" />
            <UnderlinedLink
              v-for="link in sitemapLinks"
              :key="link.to"
              :label="link.label"
              class="footer-link"
              :to="link.to"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const sitemapLinks = [
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Resume",
    to: "/resume",
  },
  {
    label: "Blog",
    to: "/blog",
  },
  {
    label: "About",
    to: "/about",
  },
];
</script>

<style>
.footer-text {
  @apply text-gray-500 max-w-md mb-5;
}

.footer-link {
  width: fit-content;
  @apply text-gray-500 mb-5;
}
</style>
