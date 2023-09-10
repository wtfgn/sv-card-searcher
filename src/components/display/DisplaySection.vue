<template>
  <section
    class="display-section flex flex-col backdrop-brightness-50 overflow-hidden h-96 xl:min-h-full rounded-xl shadow-md"
  >
    <div class="display-section-title rounded-md p-2 text-xl font-bold">
      <h2>
        Search Result: <span class="font-black text-2xl">{{ filteredCardsData.length }}</span> cards
      </h2>
    </div>
    <div
      ref="displaySectionContent"
      class="display-section-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 overflow-y-auto p-8"
    >
      <CardEleVisual
        v-for="card in filteredCardsData.slice(0, numberOfCardsToDisplay)"
        :key="card.id_"
        :card="card"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import CardEleVisual from '@/components/cards/CardEleVisual.vue';
import { Ref, ref, onMounted, watch } from 'vue';
import { debounce } from '@/utils/debounce';
import type { Card } from '@/types';

const props = defineProps<{
  filteredCardsData: Card[];
}>();

const displaySectionContent: Ref<HTMLElement | null> = ref(null);
const defaultNumberOfCardsToDisplay = 20;
const numberOfCardsToDisplay = ref(defaultNumberOfCardsToDisplay);

// Infinite Scroll
const scrollHandler = debounce(
  () => {
    if (
      !displaySectionContent.value ||
      numberOfCardsToDisplay.value >= props.filteredCardsData.length
    ) {
      return;
    }

    const { scrollTop, clientHeight, scrollHeight } = displaySectionContent.value;
    if (scrollTop + clientHeight >= scrollHeight) {
      numberOfCardsToDisplay.value += defaultNumberOfCardsToDisplay;
    }
  },
  500,
  { leading: true, trailing: true },
);

watch(props.filteredCardsData, () => {
  // Move the scroll bar to the top
  displaySectionContent.value?.scrollTo(0, 0);
  // Reset number of cards to display when filteredCardsData changes
  numberOfCardsToDisplay.value = defaultNumberOfCardsToDisplay;
});

onMounted(() => {
  displaySectionContent.value?.addEventListener('scroll', scrollHandler);
});
</script>

<style scoped></style>
