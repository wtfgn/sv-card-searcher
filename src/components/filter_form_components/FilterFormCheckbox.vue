<template>
  <li class="filter-option group flex-auto mr-1 flex flex-col items-center justify-center">
    <input
      :id="key"
      v-model="model"
      type="checkbox"
      :name="category"
      :value="filterOption.name"
      class="hidden peer"
    />
    <label
      :for="key"
      class="flex flex-col items-center justify-center cursor-pointer w-full h-full peer-checked:opacity-100 opacity-50 bg-gray-700 rounded-3xl"
    >
      <img
        v-if="imageUrl"
        :src="imageUrl"
        :alt="filterOption.name"
        :title="filterOption.name"
        class="w-8 h-8"
      />
      <span v-if="labelText" class="peer-checked:opacity-100"> {{ labelText }}</span>
    </label>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
  filterOption: { name: string };
  imageUrl?: string;
  selectedOptions: string[];
  labelText?: string;
  category: string;
}>();

const emit = defineEmits<{
  'update:selectedOptions': [value: string[]];
}>();

const key = computed(() => {
  return props.filterOption.name + '-' + props.category;
});

// Use computed property to avoid mutating props directly
// It acts as an intermediary for you to operate the props
const model = computed({
  get: () => props.selectedOptions,
  set: (value) => emit('update:selectedOptions', value),
});
</script>
