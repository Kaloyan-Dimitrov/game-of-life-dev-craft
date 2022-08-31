import { defineStore } from "pinia";
import { computed, ref, watch, type Ref } from "vue";

interface IState {
  game: Ref<boolean[][]>;
  width: Ref<number>;
  height: Ref<number>;
}

export const useGameStore = defineStore("game", () => {
  // State
  const width: IState["width"] = ref(30);
  const height: IState["height"] = ref(30);
  const game: IState["game"] = ref(
    new Array(height.value)
      .fill(false)
      .map(() => new Array(width.value).fill(false))
  );

  // Actions
  const initializeGame = () => {
    game.value = new Array(height.value)
      .fill(false)
      .map(() => new Array(width.value).fill(false));
  };

  const changeCell: (x: number, y: number) => void = (x, y) => {
    game.value[y][x] = !game.value[y][x];
  };

  const clearGame = () => {
    initializeGame();
  };

  const tick = async () => {
    try {
      const res = await fetch("http://localhost:3000/tick", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(game.value),
      });
      const result: boolean[][] = await res.json();
      game.value = result;
    } catch (err) {
      console.error(err);
    }
  };

  // Getters
  const cellAt = computed(() => (x: number, y: number) => game.value[y][x]);

  // Watchers
  watch(width, initializeGame);
  watch(height, initializeGame);

  return { width, height, game, changeCell, clearGame, tick, cellAt };
});
