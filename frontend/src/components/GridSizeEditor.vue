<template>
  <div class="wrapper">
    <input
      type="number"
      min="2"
      max="80"
      class="dim-input"
      @change="validate"
      v-model.lazy.number="wInput"
    />
    <div class="X">X</div>
    <input
      type="number"
      min="2"
      max="80"
      class="dim-input"
      @change="validate"
      v-model.lazy.number="hInput"
    />
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from "@/stores/game";
import { ref } from "vue";
const store = useGameStore();

const wInput = ref(store.width);
const hInput = ref(store.height);

function validate() {
  if (isNaN(Number(wInput.value))) wInput.value = store.width;
  else if (Number(wInput.value) < 2 || Number(wInput.value) >= 80)
    wInput.value = store.width;
  if (isNaN(Number(hInput.value))) hInput.value = store.width;
  else if (Number(hInput.value) < 2 || Number(hInput.value) >= 80)
    hInput.value = store.width;

  store.width = wInput.value;
  store.height = hInput.value;
}
</script>

<style scoped>
.dim-input {
  width: 50%;
  background: none;
  border-color: var(--green-color);
  color: var(--green-color);
  border-radius: 0.9em;
  padding: 0 1em 0 1em;
  margin: 0.5em;
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
