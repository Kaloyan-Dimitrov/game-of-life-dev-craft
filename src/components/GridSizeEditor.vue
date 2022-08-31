<template>
  <div>
    <input v-model.lazy.number="store.width" />
    <input v-model.lazy.number="store.height" />
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

<style scoped></style>
