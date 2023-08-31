<template>
  <div
    class="filter-option flex flex-col items-center mr-8"
  >
    <label
      class="flex flex-col items-center cursor-pointer"
    >
      <input
        v-model="model"
        type="checkbox"
        :value="filterOption.name"
        class=""
      >
      <img
        v-if="imageUrl"
        :src="imageUrl"
        :alt="filterOption.name"
        :title="filterOption.name"
        class="w-8 h-8 opacity-50 hover:opacity-100"
      >
      {{ labelText }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Category } from '@/types';
const props = defineProps<{
  filterOption: Category;
  imageUrl?: string;
  selectedOptions: string[];
  labelText: string;
}>();

const emit = defineEmits<{
  'update:selectedOptions': [value: string[]];
}>();

// Use computed property to avoid mutating props directly
// It acts as an intermediary for you to operate the props
const model = computed({
  get: () => props.selectedOptions,
  set: (value) => emit('update:selectedOptions', value),
})

</script>