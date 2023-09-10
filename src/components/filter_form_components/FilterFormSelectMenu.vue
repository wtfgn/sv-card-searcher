<template>
  <Listbox v-model="model" name="attack" multiple>
    <div class="relative mt-1">
      <ListboxButton
        class="relative cursor-default w-full py-2 pl-3 pr-10 text-left bg-gray-700 rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span class="block truncate"> {{ model.length }} selected </span>
        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <!-- Heroicon name: selector -->
          <ChevronUpDownIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <Transition
        leave-active-class="transition duration-300 ease-in-out"
        enter-active-class="transition duration-300 ease-in-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          as="ul"
          class="absolute overflow-auto z-10 bottom-full w-full mb-2 text-base rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-for="categoryOption in categoryOptions"
            :key="categoryOption.name"
            v-slot="{ active, selected }"
            :value="categoryOption.name"
            as="template"
          >
            <li
              :class="[
                active | selected ? 'bg-gray-800 text-white' : 'text-gray-300',
                'relative py-2 pl-3 cursor-default select-none pr-4 bg-gray-700 first:rounded-t-md last:rounded-b-md whitespace-nowrap',
              ]"
            >
              <div :class="[selected ? 'font-semibold' : 'font-normal', 'flex items-center']">
                <span :class="['block truncate']">
                  {{ categoryOption.name }}
                </span>
              </div>

              <span
                v-if="selected"
                class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-300"
              >
                <!-- Heroicon name: check -->
                <CheckIcon class="w-5 h-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </Transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/24/solid';
import { CategoryCommonOptions } from '@/types';

const props = defineProps<{
  categoryOptions: CategoryCommonOptions;
  selectedOptions: string[];
  category: string;
}>();

const emit = defineEmits<{
  'update:selectedOptions': [value: string[]];
}>();

// Use computed property to avoid mutating props directly
// It acts as an intermediary for you to operate the props
const model = computed({
  get: () => props.selectedOptions,
  set: (value) => emit('update:selectedOptions', value),
});
</script>

<style scoped></style>
