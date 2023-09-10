<template>
  <FilterTemplate class="type-filter">
    <template #title>
      <h3>Type</h3>
    </template>

    <template #filter>
      <ul class="flex flex-wrap flex-row place-content-evenly gap-4">
        <FilterFormCheckbox
          v-for="cardType in types"
          :key="cardType.name"
          v-model:selected-options="model"
          :filter-option="cardType"
          :label-text="cardType.name"
          category="type"
        />
      </ul>
    </template>
  </FilterTemplate>
</template>

<script setup lang="ts">
import FilterTemplate from '@/components/FilterTemplate.vue';
import FilterFormCheckbox from '@/components/filter_form_components/FilterFormCheckbox.vue';
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
