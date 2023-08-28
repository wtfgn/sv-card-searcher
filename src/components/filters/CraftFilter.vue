<template>
  <FilterTemplate class="craft-filter">
    <template #title>
      <h3>Craft</h3>
    </template>

    <template #filter>
      <div
        v-for="craft in crafts"
        :key="craft.id"
        class="filter-options"
      >
        <label :for="craft.name">
          <img
            :src="emblemUrl(craft.id)"
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

const emit = defineEmits(['update:selectedCrafts']);

const selectedCrafts: Ref<string[]> = ref([]);


const crafts = ref([
	{
		name: 'Forestcraft',
		id: '1111410100',
	},
	{
		name: 'Swordcraft',
		id: '1052210300',
	},
	{
		name: 'Runecraft',
		id: '900311020',
	},
	{
		name: 'Dragoncraft',
		id: '1124110300',
	},
	{
		name: 'Shadowcraft',
		id: '900541090',
	},
	{
		name: 'Bloodcraft',
		id: '1106110200',
	},
	{
		name: 'Havencraft',
		id: '1117410300',
	},
	{
		name: 'Portalcraft',
		id: '900841090',
	},
	{
		name: 'Neutral',
		id: '1080110200',
	},
]);
const emblemUrl = ((emblemId: string) => {
	return `https://svgdb.me/assets/emblems/em_${emblemId}_m.png`
});
</script>
