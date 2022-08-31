<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="rules">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      <ol>
        <li>Any live cell with two or three live neighbors survives.</li>
        <li>Any dead cell with three live neighbors becomes a live cell.</li>
        <li>
          All other live cells die in the next generation. Similarly, all other
          dead cells stay dead.
        </li>
      </ol>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.rules h1,
.rules h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .rules h1,
  .rules h3 {
    text-align: left;
  }
}
</style>
