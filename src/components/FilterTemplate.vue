<template>
  <div class="filter">
    <div class="filter-title">
      <slot name="title" /> <!-- This is where the title will go -->
    </div>
    <div class="filter-container">
      <slot name="filter" /> <!-- This is where the filter will go -->
    </div>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped></style>
