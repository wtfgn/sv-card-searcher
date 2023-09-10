<template>
  <Transition
    enter-active-class="transition duration-300 ease-in-out"
    leave-active-class="transition duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
    enter-from-class="transform translate-x-20 opacity-0"
    leave-to-class="transform translate-x-20 opacity-0"
    mode="out-in"
  >
    <KeepAlive>
      <Suspense>
        <!-- Main Content -->
        <template #default>
          <section class="suspense-default flex flex-col gap-4 h-auto">
            <CardSearcher />
          </section>
        </template>

        <!-- Fallback Content -->
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </KeepAlive>
  </Transition>
</template>

<script setup lang="ts">
import CardSearcher from '@/components/searcher/CardSearcher.vue';
</script>

<style scoped></style>
