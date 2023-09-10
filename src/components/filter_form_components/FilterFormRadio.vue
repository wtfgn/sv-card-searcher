<template>
  <li class="filter-option group flex flex-col place-content-center flex-auto mr-8">
    <input
      :id="key"
      v-model="model"
      type="radio"
      :value="filterOption.name"
      class="hidden peer"
      :name="category"
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
  selectedOption: string;
  labelText?: string;
  category: string;
}>();

const emit = defineEmits<{
  'update:selectedOption': [value: string];
}>();

const key = computed(() => `${props.filterOption.name}-${props.category}`);

// Use computed property to avoid mutating propds directly
// It acts as an intermediary for you to operate the props
const model = computed({
  get: () => props.selectedOption,
  set: (value) => emit('update:selectedOption', value),
});
</script>
