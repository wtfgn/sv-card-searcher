<template>
  <form
    class="search-section flex flex-col border-white border-2 p-4"
    action="/cards"
    method="GET"
  >
    <CraftFilter
      v-model:selected-crafts="selectedCrafts"
    />
    <div class="flex flex-row content-evenly justify-evenly gap-4">
      <CardPackFilter
        v-model:selected-card-packs="selectedCardPacks"
        class="flex-1"
      />
      <FormatFilter
        v-model:selected-format="selectedFormat"
        class="flex-1"
      />
    </div>
    <CostFilter
      v-model:selected-costs="selectedCosts"
    />
    <div class="flex flex-row content-evenly justify-evenly gap-4">
      <TypeFilter
        v-model:selected-types="selectedTypes"
        class="flex-1"
      />
      <RarityFilter
        v-model:selected-rarities="selectedRarities"
        class="flex-1"
      />
    </div>
    <div class="buttons flex flex-row content-evenly justify-evenly gap-4">
      <button
        type="submit"
        class="
			bg-gray-400 rounded-full text-gray-800 w-1/2 h-12 text-xl font-bold
			hover:bg-gray-300 active:bg-gray-500
			focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
      >
        Fetch Cards Data
      </button>
    </div>
  </form>
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
const selectedFormat: Ref<'Rotation' | 'Unlimted'> = ref('Rotation');
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
