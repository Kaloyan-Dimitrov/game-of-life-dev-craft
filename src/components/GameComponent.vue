<template>
  <div class="game-grid">
    <div class="game-row" v-for="row in height" :key="row">
      <Cell
        v-for="column in width"
        :key="column"
        :location="{
          x: column,
          y: row,
        }"
        :editing="editing"
        :alive="Math.random() > 0.5 ? false : true"
      ></Cell>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import Cell from "./CellComponent.vue";
defineProps<{
  width: number;
  height: number;
}>();

const editing: Ref<boolean> = ref(true);
</script>

<style scoped>
.game-grid {
  display: flex;
  border-style: solid;
  border-color: var(--green-color-light);
  border-width: 0.25px 0 0 0.25px;
}

.game-row {
  flex-direction: row;
}
</style>
