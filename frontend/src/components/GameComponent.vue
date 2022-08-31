<template>
  <div class="game-grid" :style="`aspect-ratio: ${width / height};`">
    <div class="game-row" v-for="row in height" :key="row">
      <Cell
        v-for="column in width"
        :key="column"
        :location="{
          x: column - 1,
          y: row - 1,
        }"
      ></Cell>
    </div>
  </div>
</template>

<script setup lang="ts">
import Cell from "./CellComponent.vue";
defineProps<{
  width: number;
  height: number;
}>();
</script>

<style scoped>
.game-grid {
  align-self: center;
  margin: 0.5em;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  max-width: 100%;
  justify-content: center;
}

.game-row {
  min-width: 0;
  display: flex;
  flex-direction: row;
  min-height: 0;
}
</style>
