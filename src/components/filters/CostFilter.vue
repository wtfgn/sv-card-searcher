<template>
  <FilterTemplate class="cost-filter">
    <template #title>
      <h3>Cost</h3>
    </template>

    <template #filter>
      <FilterOptionCheckbox
        v-for="cost in costs"
        :key="cost.name"
        v-model:selected-options="model"
        :filter-option="cost"
        :label-text="cost.name"
        :image-url="costUrl(cost)"
      />
    </template>
  </FilterTemplate>
</template>

<script setup lang="ts">
import FilterTemplate from '@/components/FilterTemplate.vue';
import FilterOptionCheckbox from '@/components/filter_option/FilterOptionCheckbox.vue';
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { Cost } from '@/types';

const props = defineProps<{
  selectedCosts: string[];
}>();
const emit = defineEmits<{
  'update:selectedCosts': [costs: string[]];
}>();

const mainStore = useMainStore();
const { costs } = storeToRefs(mainStore);

const model = computed({
  get: () => props.selectedCosts,
  set: (value) => emit('update:selectedCosts', value),
});

const costUrl = ((cost: Cost) => {
  return `https://shadowverse-portal.com/public/assets/image/common/global/cost_${cost.name}.png`
});
</script>

<style scoped></style>