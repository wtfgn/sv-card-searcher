<template>
  <div class="filter flex flex-col mb-4">
    <div
      class="
        filter-title
        flex flex-row justify-center text-center 
        rounded-md bg-slate-600 text-white text-xl font-bold
        p-2 mb-2" 
    >
      <slot name="title" /> <!-- This is where the title will go -->
    </div>
    <div
      class="
      filter-container
      flex flex-row flex-nowrap content-evenly justify-evenly"
    >
      <slot name="filter" /> <!-- This is where the filter will go -->
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
