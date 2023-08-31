<template>
  <div class="filter flex flex-col mb-4">
    <div class="filter-title flex flex-row justify-center text-center rounded-md bg-slate-300">
      <slot name="title" /> <!-- This is where the title will go -->
    </div>
    <div class="filter-container flex flex-row">
      <slot name="filter" /> <!-- This is where the filter will go -->
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
