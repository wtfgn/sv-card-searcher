<template>
  <FilterTemplate class="card-pack-filter">
    <template #title>
      <h3>Card Pack</h3>
    </template>

    <template #filter>
      <div
        v-for="cardPack in cardPacks"
        :key="cardPack.name"
        class="filter-option"
      >
        <label>
          <input
            v-model="selectedCardPacks"
            type="checkbox"
            :value="cardPack.name"
            @change="emit('update:selectedCardPacks', selectedCardPacks)"
          >
          {{ cardPack.name }}
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
  'update:selectedCardPacks': [cardPacks: string[]];
}>();

const mainStore = useMainStore();
const { cardPacks } = storeToRefs(mainStore);
const selectedCardPacks: Ref<string[]> = ref([]);

</script>

<style scoped>
.card-pack-filter :deep(.filter-container) {
  display: flex;
  flex-direction: column;
}

</style>