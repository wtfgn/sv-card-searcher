<template>
  <FilterTemplate class="attack-filter">
    <template #title>
      <h3>Attack</h3>
    </template>

    <template #filter>
      <FilterFormSelectMenu
        v-model:selected-options="model"
        :category-options="attacks"
        category="attack"
      />
    </template>
  </FilterTemplate>
</template>

<script setup lang="ts">
import FilterTemplate from '@/components/FilterTemplate.vue';
import { computed } from 'vue';
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';
import FilterFormSelectMenu from '@/components/filter_form_components/FilterFormSelectMenu.vue';

const props = defineProps<{
  selectedAttacks: string[];
}>();
const emit = defineEmits<{
  'update:selectedAttacks': [attacks: string[]];
}>();

const mainStore = useMainStore();
const { attacks } = storeToRefs(mainStore);
const model = computed({
  get: () => props.selectedAttacks,
  set: (value) => emit('update:selectedAttacks', value),
});
</script>

<style scoped></style>
