<template>
  <FilterTemplate class="craft-filter">
    <template #title>
      <h3>Craft</h3>
    </template>

    <template #filter>
      <div
        v-for="craft in crafts"
        :key="craft.iconCardId"
        class="filter-option"
      >
        <label :for="craft.name">
          <input
            :id="craft.name"
            v-model="selectedCrafts"
            type="checkbox"
            :value="craft.name"
            @change="emit('update:selectedCrafts', selectedCrafts)"
          >
          <img
            :src="emblemUrl(craft.iconCardId)"
            :alt="craft.name"
            :title="craft.name"
            class="emblem"
          >
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

const emit = defineEmits<{
  'update:selectedCrafts': [crafts: string[]];
}>();

const selectedCrafts: Ref<string[]> = ref([]);
const mainStore = useMainStore();
const { crafts } = storeToRefs(mainStore);


const emblemUrl = ((emblemId: number | string) => {
  return `https://svgdb.me/assets/emblems/em_${emblemId}_m.png`
});
</script>

<style scoped>
.craft-filter :deep(.filter-container) {
  display: flex;
  flex-direction: row;
}

.filter-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
}

.filter-option label {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.filter-option label:hover,
.filter-option label input:checked+.emblem {
  opacity: 1;
}

.filter-option input {
  margin-top: 0.5rem;
  display: none;
}

.emblem {
  width: 2rem;
  height: 2rem;
  opacity: 0.5;
}
</style>
