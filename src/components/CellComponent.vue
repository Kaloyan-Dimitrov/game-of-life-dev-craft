<template>
  <div :class="alive ? 'alive cell' : 'dead cell'" @click="changeState"></div>
</template>

<script setup lang="ts">
defineProps<{
  location: {
    x: number;
    y: number;
  };
  alive: boolean;
}>();

const changeState = () => {};
</script>

<style scoped scss>
.cell {
  flex: 1;
  border-style: solid;
  border-color: var(--green-color-light);
  border-width: 0 0.25px 0.25px 0;
  width: 1em;
  height: 1em;
}

.alive {
  background-color: var(--green-color);
}
</style>
