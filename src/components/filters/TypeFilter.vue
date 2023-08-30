<template>
  <FilterTemplate class="type-filter">
    <template #title>
      <h3>Type</h3>
    </template>

    <template #filter>
      <div
        v-for="cardType in types"
        :key="cardType.name"
        class="filter-option"
      >
        <label>
          <input
            v-model="selectedTypes"
            type="checkbox"
            :value="cardType.name"
            @change="emit('update:selectedTypes', selectedTypes)"
          >
          {{ cardType.name }}
        </label>
      </div>
    </template>
  </FilterTemplate>
</template>

<script setup lang="ts">
import FilterTemplate from '@/components/FilterTemplate.vue';
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';
import { Ref, ref } from 'vue';

const emit = defineEmits<{
  'update:selectedTypes': [types: string[]];
}>();

const mainStore = useMainStore();
const { types } = storeToRefs(mainStore);
const selectedTypes: Ref<string[]> = ref([]);

</script>

<style scoped></style>