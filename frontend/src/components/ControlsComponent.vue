<template>
  <div class="wrapper">
    <button @click="store.changeFPS(-1)">
      <Icon icon="fa6-solid:backward"></Icon>
    </button>
    <button @click="store.startAutoplay()" v-if="!store.autoplay">
      <Icon icon="fa6-solid:play"></Icon>
    </button>
    <button @click="store.stopAutoplay()" v-else>
      <Icon icon="fa6-solid:stop"></Icon>
    </button>
    <button @click="store.clearGame()">
      <Icon icon="fa6-solid:trash"></Icon>
    </button>
    <button @click="store.tick()">
      <Icon icon="fa6-solid:forward-step"></Icon>
    </button>
    <button @click="store.changeFPS(1)">
      <Icon icon="fa-solid:forward"></Icon>
    </button>
    <div>Slow down</div>
    <div v-if="!store.autoplay">Auto-play</div>
    <div v-else>Stop Auto-play</div>
    <div>Clear game</div>
    <div>Next tick</div>
    <div>Speed up</div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useGameStore } from "@/stores/game";

const store = useGameStore();
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
}

.wrapper > button {
  height: 5vh;
  font-size: 2ch;
  flex: 1;
  background: none;
  border-color: var(--green-color);
  color: var(--green-color);
  border-radius: 0.9em;
  margin: 0.5em;
  border-style: solid;
}

.wrapper > button:hover {
  background: var(--green-color);
  color: white;
}
</style>
