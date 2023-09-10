<template>
  <FilterTemplate class="rarity-filter">
    <template #title>
      <h3>Rarity</h3>
    </template>

    <template #filter>
      <ul class="flex flex-wrap flex-row place-content-evenly gap-4">
        <FilterFormCheckbox
          v-for="rarity in rarities"
          :key="rarity.name"
          v-model:selected-options="model"
          :filter-option="rarity"
          :label-text="rarity.name"
          category="rarity"
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
  selectedRarities: string[];
}>();
const emit = defineEmits<{
  'update:selectedRarities': [rarities: string[]];
}>();

const mainStore = useMainStore();
const { rarities } = storeToRefs(mainStore);
const model = computed({
  get: () => props.selectedRarities,
  set: (value) => emit('update:selectedRarities', value),
});
</script>

<style scoped></style>
