<template>
  <FilterTemplate class="cost-filter">
    <template #title>
      <h3>Cost</h3>
    </template>

    <template #filter>
      <div
        v-for="cost in costs"
        :key="cost.value"
        class="filter-option"
      >
        <label :for="cost.value">
          <img
            :src="costUrl(cost)"
            :alt="cost.value"
            :title="cost.value"
            class="cost-icon"
          >
          <input 
            :id="cost.value"
            v-model="selectedCosts"
            type="checkbox"
            :value="cost.value"
            @change="emit('update:selectedCosts', selectedCosts)"
          >
          {{ cost.value }}
        </label>
      </div>
    </template>
  </FilterTemplate>
</template>

<script setup lang="ts">
import FilterTemplate from '@/components/FilterTemplate.vue';
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';
import { Ref, ref } from 'vue';
import { Cost } from '@/types';

const emit = defineEmits<{
  'update:selectedCosts': [costs: string[]];
}>();

const mainStore = useMainStore();
const { costs } = storeToRefs(mainStore);

const selectedCosts: Ref<string[]> = ref([]);

const costUrl = ((cost: Cost) => {
  return `https://shadowverse-portal.com/public/assets/image/common/global/cost_${cost.value}.png`
});
</script>

<style scoped></style>