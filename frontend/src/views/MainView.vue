<script setup lang="ts">
import GameComponent from "../components/GameComponent.vue";
import GridSizeEditor from "../components/GridSizeEditor.vue";
import ControlsComponent from "../components/ControlsComponent.vue";
import StatsComponent from "../components/StatsComponent.vue";
import { useGameStore } from "@/stores/game";
const store = useGameStore();
</script>

<template>
  <div class="mainWrapper">
    <StatsComponent class="stats"></StatsComponent>
    <GameComponent
      class="game"
      :width="store.width"
      :height="store.height"
    ></GameComponent>
    <GridSizeEditor class="grid-edit"></GridSizeEditor>
    <ControlsComponent class="controls"></ControlsComponent>
  </div>
</template>

<style scoped>
.mainWrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.stats,
.grid-edit,
.controls {
  flex: 0;
}
.game {
  flex: 1 1 0;
  min-width: 0;
  min-height: 0;
}
</style>
