<template>
  <FilterTemplate class="trait-filter">
    <template #title>
      <h3>Traits</h3>
    </template>

    <template #filter>
      <FilterFormSelectMenu
        v-model:selected-options="model"
        :category-options="traits"
        category="trait"
      />
    </template>
  </FilterTemplate>
</template>

<script setup lang="ts">
import FilterTemplate from '@/components/FilterTemplate.vue';
import FilterFormSelectMenu from '@/components/filter_form_components/FilterFormSelectMenu.vue';
import { computed } from 'vue';
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';

const props = defineProps<{
  selectedTraits: string[];
}>();

const emit = defineEmits<{
  'update:selectedTraits': [traits: string[]];
}>();

const mainStore = useMainStore();
const { traits } = storeToRefs(mainStore);

const model = computed({
  get: () => props.selectedTraits,
  set: (value) => emit('update:selectedTraits', value),
});
</script>
