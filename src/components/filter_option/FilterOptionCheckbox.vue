<template>
  <div
    class="
      filter-option group
      flex flex-col items-center justify-center flex-1
      w-20 h-12
      mr-8
      "
  >
    <input
      :id="filterOption.name"
      v-model="model"
      type="checkbox"
      :name="category"
      :value="filterOption.value"
      class="hidden peer"
    >
    <label
      :for="filterOption.name"
      class="
        flex flex-col items-center justify-center
        cursor-pointer w-full h-full
        peer-checked:opacity-100 opacity-50
        bg-gray-700 rounded-3xl
        text-gray-200"
    >
      <img
        v-if="imageUrl"
        :src="imageUrl"
        :alt="filterOption.name"
        :title="filterOption.name"
        class="
          w-8 h-8"
      >
      <span
        v-if="labelText"
        class="
          peer-checked:opacity-100"
      > {{ labelText }}</span>
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
  labelText?: string;
  category: string;
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