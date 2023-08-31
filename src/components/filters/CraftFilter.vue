<template>
  <FilterTemplate class="craft-filter">
    <template #title>
      <h3>Craft</h3>
    </template>

    <template #filter>
      <FilterOptionCheckbox
        v-for="craft in crafts"
        :key="craft.name"
        v-model:selected-options="model"
        :image-url="emblemUrl(craft.iconCardId)"
        :filter-option="craft"
        :label-text="craft.name"
      />
    </template>
  </FilterTemplate>
</template>

<script setup lang='ts'>
import FilterTemplate from '@/components/FilterTemplate.vue';
import FilterOptionCheckbox from '@/components/filter_option/FilterOptionCheckbox.vue';
import { computed } from 'vue';
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';
const props = defineProps<{
  selectedCrafts: string[];
}>();
const emit = defineEmits<{
  'update:selectedCrafts': [crafts: string[]];
}>();

const mainStore = useMainStore();
const { crafts } = storeToRefs(mainStore);
const model = computed({
  get: () => props.selectedCrafts,
  set: (value) => emit('update:selectedCrafts', value),
});


const emblemUrl = ((emblemId: number | string) => {
  return `https://svgdb.me/assets/emblems/em_${emblemId}_m.png`
});
</script>

<style scoped>
</style>
