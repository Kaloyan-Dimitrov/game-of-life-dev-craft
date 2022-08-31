<script setup lang="ts">
import GameComponent from "../components/GameComponent.vue";
import GridSizeEditor from "../components/GridSizeEditor.vue";
import ControlsComponent from "../components/ControlsComponent.vue";
import StatsComponent from "../components/StatsComponent.vue";
import { useGameStore } from "@/stores/game";
const store = useGameStore();
</script>

<template>
  <div>
    <StatsComponent></StatsComponent>
    <GameComponent :width="store.width" :height="store.height"></GameComponent>
    <GridSizeEditor></GridSizeEditor>
    <ControlsComponent></ControlsComponent>
  </div>
</template>
