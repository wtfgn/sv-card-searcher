<template>
  <FilterTemplate class="craft-filter">
    <template #title>
      <h3>Craft</h3>
    </template>

    <template #filter>
      <ul class="flex flex-wrap flex-row place-content-evenly gap-2">
        <FilterFormCheckbox
          v-for="craft in crafts"
          :key="craft.name"
          v-model:selected-options="model"
          :image-url="imageUrl(craft)"
          :filter-option="craft"
          category="craft"
        />
      </ul>
    </template>
  </FilterTemplate>
</template>

<script setup lang="ts">
import FilterTemplate from '@/components/FilterTemplate.vue';
import FilterFormCheckbox from '@/components/filter_form_components/FilterFormCheckbox.vue';
import { computed } from 'vue';
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';
import { CraftOption } from '@/types';

const props = defineProps<{
  selectedCrafts: string[];
}>();
const emit = defineEmits<{
  'update:selectedCrafts': [crafts: string[]];
}>();

const mainStore = useMainStore();
const { crafts } = storeToRefs(mainStore);

const imageUrl = (craft: CraftOption) =>
  `https://svgdb.me/assets/emblems/em_${craft.iconCardId}_m.png`;

const model = computed({
  get: () => props.selectedCrafts,
  set: (value) => emit('update:selectedCrafts', value),
});
</script>

<style scoped>
.craft-filter :deep(.filter-option) label {
  @apply bg-transparent;
}

.craft-filter :deep(.filter-option) img {
  @apply w-14 h-14;
}
</style>
