<template>
  <CraftFilter
    v-model:selectedCrafts="selectedCrafts"
  />
  <FormatFilter
    v-model:selectedFormat="selectedFormat"
    :default-format="selectedFormat"
  />
  <CardPackFilter
    v-model:selectedCardPacks="selectedCardPacks"
  />
  <CostFilter
    v-model:selectedCosts="selectedCosts"
  />
  <TypeFilter
    v-model:selectedTypes="selectedTypes"
  />
  <RarityFilter
    v-model:selectedRarities="selectedRarities"
  />
</template>

<script setup lang="ts">
import CraftFilter from '@/components/filters/CraftFilter.vue';
import FormatFilter from '@/components/filters/FormatFilter.vue';
import CardPackFilter from '@/components/filters/CardPackFilter.vue';
import CostFilter from '@/components/filters/CostFilter.vue';
import TypeFilter from '@/components/filters/TypeFilter.vue';
import RarityFilter from '@/components/filters/RarityFilter.vue';
import { Ref, ref, onUnmounted } from 'vue';
import { useMainStore } from '@/stores/main';

const mainStore = useMainStore();

const selectedCrafts: Ref<string[]> = ref([]);
const selectedFormat: Ref<'rotation' | 'unlimited'> = ref('rotation');
const selectedCardPacks: Ref<string[]> = ref([]);
const selectedCosts: Ref<string[]> = ref([]);
const selectedTypes: Ref<string[]> = ref([]);
const selectedRarities: Ref<string[]> = ref([]);

// Useful for debugging
const unsubscribe = mainStore.$onAction(
	({
		name, // action name
		// store, // store instance
		args, // arguments passed to the action
		after, // function to be called after the action is executed
		onError, // function to be called if the action fails
	}) => {
		// do something before the action is executed
		console.log(`Start "${name}" with params [${args.join(', ')}].`)

		// call the after function when the action finishes
		after((result) => {
			console.log(`"${name}" finished with result:`, result)
		})

		// call the onError function if the action throws an error or returns a rejected promise
		onError((error) => {
			console.log(`"${name}" failed with error:`, error)
		})
	}
)

// const rawCardsData = await mainStore.fetchCardsData();
// mainStore.setRawCardsData(rawCardsData);

onUnmounted(() => {
	unsubscribe();
});
</script>

<style scoped></style>
