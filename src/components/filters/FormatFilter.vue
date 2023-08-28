<template>
  <FilterTemplate class="format-filter">
    <template #title>
      <h3>Format</h3>
    </template>
    <template #filter>
      <div class="filter-option">
        <label for="rotation">
          <img
            src="/src/assets/emblems/icon_rotation.png"
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
          value="rotation"
          @change="emit('update:selectedFormat', selectedFormat)"
        >
      </div>
      <div class="filter-option">
        <label for="rotation">
          <img
            src="/src/assets/emblems/icon_unlimited.png"
            alt="Unlimited"
            title="Unlimited"
            class="emblem"
          >
          Unlimited
        </label>
        <input
          id="unlimited"
          v-model="selectedFormat"
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

const emit = defineEmits(['update:selectedFormat']);

const selectedFormat: Ref<string> = ref('rotation');

</script>

<style scoped></style>