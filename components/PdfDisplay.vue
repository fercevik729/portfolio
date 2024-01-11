<template>
  <div class="flex flex-col justify-center ">
    <embed :src="Resume" type="application/pdf" width="100%" height="600px" />

    <div class="flex flex-row justify-center">
      <RoundedButton text="Download Resume" class="pl-8 pr-8" :to="Resume" :new-tab="true">
        <Icon name="material-symbols:download" />
      </RoundedButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Resume from '@/static/ErcevikFurkanResume.pdf'

</script>

<style>

</style>