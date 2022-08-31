<template>
  <div class="statsWrapper">
    <div class="label">Ticks:</div>
    <div class="label">Alive cells:</div>
    <div class="label">FPS:</div>
    <div class="stat">{{ store.numTicks }}</div>
    <div class="stat">{{ store.aliveCellsNum }}</div>
    <div class="stat">{{ store.FPS }}</div>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from "@/stores/game";

const store = useGameStore();
</script>

<style scoped>
.statsWrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  margin: 1em;
}
.stat {
  color: var(--green-color);
  font-size: 3ch;
}
</style>
