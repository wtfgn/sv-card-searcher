<template>
  <FilterTemplate class="type-filter">
    <template #title>
      <h3>Type</h3>
    </template>

    <template #filter>
      <FilterOptionCheckbox
        v-for="cardType in types"
        :key="cardType.name"
        v-model:selected-options="model"
        :filter-option="cardType"
        :label-text="cardType.name"
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

const props = defineProps<{
  selectedTypes: string[];
}>();
const emit = defineEmits<{
  'update:selectedTypes': [types: string[]];
}>();

const mainStore = useMainStore();
const { types } = storeToRefs(mainStore);
const model = computed({
  get: () => props.selectedTypes,
  set: (value) => emit('update:selectedTypes', value),
});

</script>

<style scoped></style>