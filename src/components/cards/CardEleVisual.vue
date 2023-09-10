<template>
  <div class="card-ele-visua flex flex-col items-center justify-center">
    <a
      :href="`https://svgdb.me/cards/${card.id_}`"
      target="_blank"
      class="relative hover:scale-110"
    >
      <div class="card-ele-visual-card-frame relative">
        <img
          class="card-ele-visual-img relative top-0 left-0 w-[215px] h-[280px]"
          :src="`https://shadowverse-portal.com/image/card/phase2/common/C/C_${card.id_}.png`"
        />
      </div>
      <div
        :class="`
        card-ele-visual-card-name
        absolute top-[31px]
        w-[132px] h-[18px] ${spaceSizeTag}
        `"
      >
        <img
          :src="`https://shadowverse-portal.com/image/card/phase2/en/N/N_${card.id_}.png?`"
          :alt="card.name_"
          :title="card.name_"
          class="w-full h-full object-contain mx-auto my-0"
        />
      </div>
    </a>
    <span class="text-sm">{{ card.name_ }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Card } from '@/types';
const props = defineProps<{
  card: Card;
}>();

const spaceSizeTag = computed(() =>
  props.card.name_.length <= 11 ? 'left-[40px]' : 'left-[50px]',
);
</script>

<style scoped>
img {
  @apply max-w-full;
}
</style>
