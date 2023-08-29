<template>
  <Suspense>
    <template #default>
      <SearchSection />
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import SearchSection from '@/components/SearchSection.vue';
</script>

<style scoped></style>
