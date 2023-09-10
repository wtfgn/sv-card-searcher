<template>
  <section class="card-searcher flex flex-col xl:flex-row gap-4 h-auto relative">
    <div class="filter-panel backdrop-brightness-50 rounded-xl p-4 h-auto relative">
      <form>
        <div class="basic-filter-panel grid grid-cols-2 gap-4 p-4">
          <CraftFilter v-model:selected-crafts="filterOptions.selectedCrafts" class="col-span-2" />
          <CardPackFilter v-model:selected-card-packs="filterOptions.selectedCardPacks" />
          <FormatFilter v-model:selected-format="filterOptions.selectedFormat" />
          <CostFilter v-model:selected-costs="filterOptions.selectedCosts" class="col-span-2" />
          <TypeFilter v-model:selected-types="filterOptions.selectedTypes" />
          <RarityFilter v-model:selected-rarities="filterOptions.selectedRarities" />
        </div>
        <TransitionExpand>
          <div
            v-show="expanded"
            ref="advanceFilterPanel"
            class="advance-filter-panel grid grid-cols-2 gap-4 p-4 z-10"
          >
            <AttackFilter v-model:selected-attacks="filterOptions.selectedAttacks" />
            <DefenceFilter v-model:selected-defences="filterOptions.selectedDefences" />
            <AbilityFilter v-model:selected-abilities="filterOptions.selectedAbilities" />
            <TraitFilter v-model:selected-traits="filterOptions.selectedTraits" />
          </div>
        </TransitionExpand>
        <div class="form-buttons flex flex-row justify-center col-span-2 gap-4 mt-4">
          <button
            type="button"
            class="toggle-advanced-search-button flex-auto bg-gray-400 text-gray-800 text-xl font-bold hover:bg-gray-300 active:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            @click.prevent="expanded = !expanded"
          >
            Advanced Search
          </button>
          <button
            type="reset"
            class="reset-form-button flex-auto bg-gray-400 text-gray-800 text-xl font-bold hover:bg-gray-300 active:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            @click.prevent="resetForm"
          >
            Clear All
          </button>
        </div>
      </form>
    </div>
    <div class="card-display-section">
      <DisplaySection :filtered-cards-data="filteredCards" />
    </div>
  </section>
</template>

<script setup lang="ts">
import CraftFilter from '@/components/filters/CraftFilter.vue';
import FormatFilter from '@/components/filters/FormatFilter.vue';
import CardPackFilter from '@/components/filters/CardPackFilter.vue';
import CostFilter from '@/components/filters/CostFilter.vue';
import TypeFilter from '@/components/filters/TypeFilter.vue';
import RarityFilter from '@/components/filters/RarityFilter.vue';
import AttackFilter from '@/components/filters/AttackFilter.vue';
import DefenceFilter from '@/components/filters/DefenceFilter.vue';
import AbilityFilter from '@/components/filters/AbilityFilter.vue';
import TraitFilter from '@/components/filters/TraitFilter.vue';
import DisplaySection from '@/components/display/DisplaySection.vue';
import TransitionExpand from '@/components/transitions/TransitionExpand.vue';
import { Ref, ref, onUnmounted, watchEffect } from 'vue';
import { useMainStore } from '@/stores/main';
import type { CardFilterOptions } from '@/stores/main';
import type { Card } from '@/types';

const mainStore = useMainStore();

const filterOptions: Ref<CardFilterOptions> = ref({
  selectedCrafts: ref([]),
  selectedFormat: 'Rotation',
  selectedCardPacks: ref([]),
  selectedCosts: ref([]),
  selectedTypes: ref([]),
  selectedRarities: ref([]),
  selectedAbilities: ref([]),
  selectedAttacks: ref([]),
  selectedDefences: ref([]),
  selectedTraits: ref([]),
});
const filteredCards: Ref<Card[]> = ref([]);

watchEffect(() => {
  filteredCards.value = mainStore.filterCards(filterOptions.value);
});

const resetForm = (): void => {
  filterOptions.value.selectedCrafts = [];
  filterOptions.value.selectedFormat = 'Rotation';
  filterOptions.value.selectedCardPacks = [];
  filterOptions.value.selectedCosts = [];
  filterOptions.value.selectedTypes = [];
  filterOptions.value.selectedRarities = [];
  filterOptions.value.selectedAbilities = [];
  filterOptions.value.selectedAttacks = [];
  filterOptions.value.selectedDefences = [];
  filterOptions.value.selectedTraits = [];
};

// Toggle advanced search
const expanded = ref(false);
const advanceFilterPanel: Ref<HTMLElement | null> = ref(null);

// Fetch cards data
const rawCardsData = await mainStore.fetchAllRawCardsData();
mainStore.setRawCardsData(rawCardsData);

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
    console.log(`Start "${name}" with params [${args.join(', ')}].`);

    // call the after function when the action finishes
    after((result) => {
      console.log(`"${name}" finished with result:`, result);
    });

    // call the onError function if the action throws an error or returns a rejected promise
    onError((error) => {
      console.log(`"${name}" failed with error:`, error);
    });
  },
);

onUnmounted(() => {
  unsubscribe();
});
</script>

<style scoped></style>
