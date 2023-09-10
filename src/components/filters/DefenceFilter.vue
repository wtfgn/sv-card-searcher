<template>
  <FilterTemplate class="defence-filter">
    <template #title>
      <h3>Defence</h3>
    </template>

    <template #filter>
      <FilterFormSelectMenu
        v-model:selected-options="model"
        :category-options="defences"
        category="defence"
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
  selectedDefences: string[];
}>();
const emit = defineEmits<{
  'update:selectedDefences': [defences: string[]];
}>();

const mainStore = useMainStore();
const { defences } = storeToRefs(mainStore);
const model = computed({
  get: () => props.selectedDefences,
  set: (value) => emit('update:selectedDefences', value),
});
</script>

<style scoped></style>
