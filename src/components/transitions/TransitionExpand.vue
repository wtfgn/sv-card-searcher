<template>
  <Transition
    enter-active-class="transition-all duration-1000 ease-in-out overflow-hidden"
    leave-active-class="transition-all duration-1000 ease-in-out overflow-hidden"
    enter-from-class="height-0  opacity-0"
    enter-to-class="height-auto opacity-100"
    leave-from-class="height-auto  opacity-100"
    leave-to-class="height-0  opacity-0"
    mode="out-in"
    @before-enter="onBeforeEnter($el)"
    @enter="onEnter($el)"
    @leave="onLeave($el)"
  >
    <slot />
  </Transition>
</template>

<script setup lang="ts">
// Action to take before starting the animation
const onBeforeEnter = (el: HTMLElement) => {
  // Set the height to 0
  el.style.height = '0';
  // Set the padding-top to 0
  el.style.paddingTop = '0';
  // Set the padding-bottom to 0
  el.style.paddingBottom = '0';
  // Set the overflow to hidden
  el.style.overflow = 'hidden';
};

// Action to take when the animation starts
const onEnter = (element: HTMLElement) => {
  const width = getComputedStyle(element).width;

  element.style.width = width;
  element.style.position = 'absolute';
  element.style.visibility = 'hidden';
  element.style.height = 'auto';
  element.style.overflow = 'visible';

  const height = getComputedStyle(element).height;

  element.style.width = '';
  element.style.position = '';
  element.style.visibility = '';
  element.style.height = '0';

  // Force repaint to make sure the
  // animation is triggered correctly.
  getComputedStyle(element).height;

  // Trigger the animation.
  // We use `requestAnimationFrame` because we need
  // to make sure the browser has finished
  // painting after setting the `height`
  // to `0` in the line above.
  requestAnimationFrame(() => {
    element.style.height = height;
  });
};

// Action to take when the animation ends
const onLeave = (element: HTMLElement) => {
  const height = getComputedStyle(element).height;

  element.style.height = height;

  // Force repaint to make sure the
  // animation is triggered correctly.
  getComputedStyle(element).height;

  requestAnimationFrame(() => {
    element.style.height = '0';
  });
};
</script>
<style scoped>
* {
  /* Purpose of this is to force GPU acceleration*/
  will-change: height, padding-top, padding-bottom, overflow;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
