<template>
  <div class="wrapper">
    <input class="dim-input" v-model.lazy.number="store.width" />
    <div class="X">X</div>
    <input class="dim-input" v-model.lazy.number="store.height" />
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from "@/stores/game";
import type { Ref } from "vue";
import { ref } from "vue";

const store = useGameStore();

const width: Ref<number> = ref(store.width);
const height: Ref<number> = ref(store.width);
</script>

<style scoped>
.dim-input {
  width: 50%;
  background: none;
  border-color: var(--green-color);
  color: var(--green-color);
  border-radius: 0.9em;
  padding: 0 1em 0 1em;
  margin: 1em;
  border-style: solid;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1.2em;
  line-height: 2.3;
}

.wrapper {
  display: flex;
}

.wrapper > .X {
  margin: auto;
  text-align: center;
}
</style>
