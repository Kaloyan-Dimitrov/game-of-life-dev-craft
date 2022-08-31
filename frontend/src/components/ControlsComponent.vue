<template>
  <div class="wrapper">
    <button>
      <Icon icon="fa6-solid:backward"></Icon>
    </button>
    <button>
      <Icon icon="fa6-solid:play"></Icon>
    </button>
    <button @click="store.clearGame()">
      <Icon icon="fa6-solid:trash"></Icon>
    </button>
    <button @click="store.tick()">
      <Icon icon="fa6-solid:forward-step"></Icon>
    </button>
    <button>
      <Icon icon="fa-solid:forward"></Icon>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useGameStore } from "@/stores/game";

const store = useGameStore();
</script>

<style scoped>
.wrapper {
  display: flex;
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
