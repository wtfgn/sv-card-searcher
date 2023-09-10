<template>
  <FilterTemplate class="ability-filter">
    <template #title>
      <h3>Ability</h3>
    </template>

    <template #filter>
      <FilterFormSelectMenu
        v-model:selected-options="model"
        :category-options="abilities"
        category="ability"
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
  selectedAbilities: string[];
}>();
const emit = defineEmits<{
  'update:selectedAbilities': [abilities: string[]];
}>();

const mainStore = useMainStore();
const { abilities } = storeToRefs(mainStore);
const model = computed({
  get: () => props.selectedAbilities,
  set: (value) => emit('update:selectedAbilities', value),
});
</script>
