<template>
  <FilterTemplate class="cost-filter">
    <template #title>
      <h3>Cost</h3>
    </template>

    <template #filter>
      <ul class="flex flex-wrap flex-row place-content-evenly gap-4">
        <FilterFormCheckbox
          v-for="cost in costs"
          :key="cost.name"
          v-model:selected-options="model"
          :filter-option="cost"
          :image-url="imageUrl(cost)"
          category="cost"
        />
      </ul>
    </template>
  </FilterTemplate>
</template>

<script setup lang="ts">
import FilterTemplate from '@/components/FilterTemplate.vue';
import FilterFormCheckbox from '@/components/filter_form_components/FilterFormCheckbox.vue';
import { useMainStore } from '@/stores/main';
import { CostOption } from '@/types';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const props = defineProps<{
  selectedCosts: string[];
}>();
const emit = defineEmits<{
  'update:selectedCosts': [costs: string[]];
}>();

const mainStore = useMainStore();
const { costs } = storeToRefs(mainStore);

const imageUrl = (cost: CostOption) =>
  cost.name.endsWith('+')
    ? `https://shadowverse-portal.com/public/assets/image/common/global/cost_${cost.name.slice(
        0,
        -1,
      )}_plus.png`
    : `https://shadowverse-portal.com/public/assets/image/common/global/cost_${cost.name}.png`;

const model = computed({
  get: () => props.selectedCosts,
  set: (value) => emit('update:selectedCosts', value),
});
</script>

<style scoped>
.cost-filter :deep(.filter-option) label {
  @apply bg-transparent;
}
</style>
