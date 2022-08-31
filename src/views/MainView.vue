<script setup lang="ts">
import GameComponent from "../components/GameComponent.vue";
import GridSizeEditor from "../components/GridSizeEditor.vue";
import { useGameStore } from "@/stores/game";
const store = useGameStore();
</script>

<template>
  <div>
    <GameComponent :width="store.width" :height="store.height"></GameComponent>
    <GridSizeEditor></GridSizeEditor>
  </div>
</template>
