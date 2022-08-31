<template>
  <div class="game-grid">
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
  max-height: 100vh;
  display: flex;
  border-style: solid;
  border-color: var(--green-color-light);
  border-width: 0.25px 0 0 0.25px;
  flex-direction: column;
}

.game-row {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}
</style>
