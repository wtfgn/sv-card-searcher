<template>
  <FilterTemplate class="card-pack-filter">
    <template #title>
      <h3>Card Pack</h3>
    </template>

    <template #filter>
      <ul class="flex flex-nowrap flex-col content-none justify-normal gap-0 overflow-y-auto h-40">
        <FilterFormCheckbox
          v-for="cardPack in cardPacks"
          :key="cardPack.name"
          v-model:selected-options="model"
          :filter-option="cardPack"
          :label-text="cardPack.name"
          category="cardPack"
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
  selectedCardPacks: string[];
}>();
const emit = defineEmits<{
  'update:selectedCardPacks': [cardPacks: string[]];
}>();

const mainStore = useMainStore();
const { cardPacks } = storeToRefs(mainStore);
const model = computed({
  get: () => props.selectedCardPacks,
  set: (value) => emit('update:selectedCardPacks', value),
});
</script>

<style scoped>
/* .card-pack-filter :deep(.filter-container) {
  @apply
  flex flex-nowrap flex-col content-none justify-normal gap-0
  overflow-y-auto h-40
} */

.card-pack-filter :deep(.filter-option) {
  @apply flex flex-col items-center
  mr-0 mb-0
  w-auto;
}

.card-pack-filter :deep(.filter-option) label {
  @apply rounded-none h-9;
}
</style>
