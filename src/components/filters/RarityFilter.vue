<template>
  <FilterTemplate class="rarity-filter">
    <template #title>
      <h3>Rarity</h3>
    </template>

    <template #filter>
      <div
        v-for="rarity in rarities"
        :key="rarity.name"
        class="filter-option"
      >
        <label>
          <input
            v-model="selectedRarities"
            type="checkbox"
            :value="rarity.name"
            @change="emit('update:selectedRarities', selectedRarities)"
          >
          {{ rarity.name }}
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
  'update:selectedRarities': [rarities: string[]];
}>();

const mainStore = useMainStore();
const { rarities } = storeToRefs(mainStore);
const selectedRarities: Ref<string[]> = ref([]);

</script>

<style scoped></style>