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

<style scoped>
.filter {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.filter-title {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 0.25rem;
  padding: 0.5rem;
  color: #616161;
}

.filter-container {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}
</style>
