<template>
  <FilterTemplate class="format-filter">
    <template #title>
      <h3>Format</h3>
    </template>

    <template #filter>
      <ul class="flex flex-wrap flex-row place-content-evenly gap-4 h-full">
        <FilterFormRadio
          v-for="format in formats"
          :key="format.name"
          v-model:selected-option="model"
          :image-url="imageUrl(format)"
          :filter-option="format"
          :label-text="format.name"
          :category="'format'"
        />
      </ul>
    </template>
  </FilterTemplate>
</template>

<script setup lang="ts">
import FilterTemplate from '@/components/FilterTemplate.vue';
import FilterFormRadio from '@/components/filter_form_components/FilterFormRadio.vue';
import { computed } from 'vue';
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';
import { FormatOption } from '@/types';

const props = defineProps<{
  selectedFormat: string;
}>();
const emit = defineEmits<{
  'update:selectedFormat': [format: string];
}>();

const mainStore = useMainStore();
const { formats } = storeToRefs(mainStore);

const imageUrl = (format: FormatOption) =>
  `https://shadowverse-portal.com/public/assets/image/common/global/icon_${format.name.toLowerCase()}.png`;

const model = computed({
  get: () => props.selectedFormat,
  set: (value) => emit('update:selectedFormat', value),
});
</script>

<style scoped>
.format-filter :deep(.filter-container) {
  @apply h-full gap-4;
}
.format-filter :deep(.filter-option) {
  @apply mr-0 h-full;
}

.format-filter :deep(.filter-option) img {
  @apply w-20 h-20;
}
</style>
