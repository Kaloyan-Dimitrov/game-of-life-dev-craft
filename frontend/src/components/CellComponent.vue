<template>
  <div
    :class="
      store.cellAt(props.location.x, props.location.y)
        ? 'alive cell'
        : 'dead cell'
    "
    @dragstart="(e) => e.preventDefault()"
    @mouseover="changeState"
    @click="(e) => changeState(e, true)"
  ></div>
</template>

<script setup lang="ts">
import { useGameStore } from "@/stores/game";
const props = defineProps<{
  location: {
    x: number;
    y: number;
  };
}>();

const store = useGameStore();

const changeState = (e: MouseEvent, force?: boolean) => {
  if (force) store.changeCell(props.location.x, props.location.y);
  else if (e.buttons > 0 && e.button == 0)
    store.changeCell(props.location.x, props.location.y);
};
</script>

<style scoped scss>
.cell {
  min-width: 0;
  min-height: 0;
  aspect-ratio: 1;
  flex: 1 1 1em;
  border-style: solid;
  border-color: var(--green-color-light);
  border-width: 0.25px;
}

.alive {
  background-color: var(--green-color);
}

.alive:hover,
.dead:hover {
  background-color: var(--green-color-light);
}
</style>
