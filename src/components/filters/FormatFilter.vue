<template>
  <FilterTemplate class="format-filter">
    <template #title>
      <h3>Format</h3>
    </template>

    <template #filter>
      <FilterOptionRadio
        v-for="format in formats"
        :key="format.name"
        v-model:selected-option="model"
        :image-url="formatUrl(format.name)"
        :filter-option="format"
        :label-text="format.name"
        :radio-group="'format'"
      />
    </template>
  </FilterTemplate>
</template>

<script setup lang='ts'>
import FilterTemplate from '@/components/FilterTemplate.vue';
import FilterOptionRadio from '@/components/FilterOptionRadio.vue';
import { computed } from 'vue';
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';

const props = defineProps<{
  selectedFormat: string
}>();
const emit = defineEmits<{
  'update:selectedFormat': [format: string];
}>();

const mainStore = useMainStore();
const { formats } = storeToRefs(mainStore);
const model = computed({
  get: () => props.selectedFormat,
  set: (value) => emit('update:selectedFormat', value),
});

const formatUrl = ((format: string) => {
  return `https://shadowverse-portal.com/public/assets/image/common/global/icon_${format.toLowerCase()}.png?2023816171`
});
</script>

<style scoped></style>