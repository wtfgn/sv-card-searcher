<template>
  <FilterTemplate class="format-filter">
    <template #title>
      <h3>Format</h3>
    </template>

    <template #filter>
      <div
        v-for="format in formats"
        :key="format.name"
        class="filter-option"
      >
        <label :for="format.name.toLowerCase()">
          <input
            :id="format.name.toLowerCase()"
            v-model="selectedFormat"
            type="radio"
            :value="format.name"
            @change="emit('update:selectedFormat', selectedFormat)"
          >
          <img
            :src="formatUrl(format.name)"
            :alt="format.name"
            :title="format.name"
            class="format"
          >
          {{ format.name }}
        </label>
      </div>
    </template>
  </FilterTemplate>
</template>

<script setup lang='ts'>
import FilterTemplate from '@/components/FilterTemplate.vue';
import { Ref, ref } from 'vue';
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';

const props = defineProps<{ defaultFormat: string }>();
const emit = defineEmits<{
  'update:selectedFormat': [format: string];
}>();

const mainStore = useMainStore();
const { formats } = storeToRefs(mainStore);
const selectedFormat: Ref<string> = ref(props.defaultFormat); // Default value

const formatUrl = ((format: string) => {
  return `https://shadowverse-portal.com/public/assets/image/common/global/icon_${format.toLowerCase()}.png?2023816171`
});
</script>

<style scoped></style>