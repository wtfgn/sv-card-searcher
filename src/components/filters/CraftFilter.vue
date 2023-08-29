<template>
  <FilterTemplate class="craft-filter">
    <template #title>
      <h3>Craft</h3>
    </template>

    <template #filter>
      <div
        v-for="craft in crafts"
        :key="craft.iconCardId"
        class="filter-options"
      >
        <label :for="craft.name">
          <img
            :src="emblemUrl(craft.iconCardId)"
            :alt="craft.name"
            :title="craft.name"
            class="emblem"
          >
        </label>
        <input
          :id="craft.name"
          v-model="selectedCrafts"
          type="checkbox"
          :value="craft.name"
          @change="emit('update:selectedCrafts', selectedCrafts)"
        >
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
