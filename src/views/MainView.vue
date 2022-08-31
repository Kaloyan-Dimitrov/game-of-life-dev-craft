<script setup lang="ts">
import GameComponent from "../components/GameComponent.vue";
import { useGameStore } from "@/stores/game";
const store = useGameStore();
</script>

<template>
  <GameComponent :width="store.width" :height="store.height"></GameComponent>
  <!-- <GridSizeEditor></GridSizeEditor> -->
</template>
