<template>
  <FilterTemplate class="format-filter">
    <template #title>
      <h3>Format</h3>
    </template>
	
    <template #filter>
      <div class="filter-option">
        <label for="rotation">
          <img
            src="/src/assets/format/icon_rotation.png"
            alt="Rotation"
            title="Rotation"
            class="emblem"
          >
          Rotation
        </label>
        <input
          id="rotation"
          v-model="selectedFormat"
          type="radio"
          :checked="selectedFormat === 'rotation'"
          value="rotation"
          @change="emit('update:selectedFormat', selectedFormat)"
        >
      </div>
      <div class="filter-option">
        <label for="unlimited">
          <img
            src="/src/assets/format/icon_unlimited.png"
            alt="Unlimited"
            title="Unlimited"
            class="emblem"
          >
          Unlimited
        </label>
        <input
          id="unlimited"
          v-model="selectedFormat"
          :checked="selectedFormat === 'unlimited'"
          type="radio"
          value="unlimited"
          @change="emit('update:selectedFormat', selectedFormat)"
        >
      </div>
    </template>
  </FilterTemplate>
</template>

<script setup lang='ts'>
import FilterTemplate from '@/components/FilterTemplate.vue';
import { Ref, ref } from 'vue';
const props = defineProps<{ defaultFormat: string }>();
const emit = defineEmits<{
	'update:selectedFormat': [format: string];
}>();

const selectedFormat: Ref<string> = ref(props.defaultFormat); // Default value

</script>

<style scoped></style>