<template>
  <FilterTemplate class="rarity-filter">
    <template #title>
      <h3>Rarity</h3>
    </template>

    <template #filter>
      <FilterOptionCheckbox
        v-for="rarity in rarities"
        :key="rarity.name"
        v-model:selected-options="model"
        :filter-option="rarity"
        :label-text="rarity.name"
      />
    </template>
  </FilterTemplate>
</template>

<script setup lang="ts">
import FilterTemplate from '@/components/FilterTemplate.vue';
import FilterOptionCheckbox from '@/components/FilterOptionCheckbox.vue';
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