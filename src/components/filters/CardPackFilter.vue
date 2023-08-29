<template>
  <FilterTemplate>
    <template #title>
      <h3>Card Pack</h3>
    </template>

    <template #filter>
      <div class="filter-option" />
    </template>
  </FilterTemplate>
</template>

<script setup lang="ts">
import FilterTemplate from '@/components/FilterTemplate.vue';
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';

const mainStore = useMainStore();
const { cardPacks } = storeToRefs(mainStore);

console.log(cardPacks.value);

</script>

<style scoped></style>