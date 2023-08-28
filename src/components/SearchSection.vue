<template>
  <CraftFilter
    v-model:selectedCrafts="selectedCrafts"
  />
  <FormatFilter
    v-model:selectedFormat="selectedFormat"
  />
</template>

<script setup lang="ts">
import CraftFilter from '@/components/filters/CraftFilter.vue';
import FormatFilter from '@/components/filters/FormatFilter.vue';
import { Ref, ref } from 'vue';

const selectedCrafts: Ref<string[]> = ref([]);
const selectedFormat: Ref<string> = ref('rotation');
</script>

<style scoped></style>
