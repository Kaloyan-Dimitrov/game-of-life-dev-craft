import { defineStore } from "pinia";
import { computed, ref, watch, type Ref } from "vue";

interface IState {
  game: Ref<boolean[][]>;
  width: Ref<number>;
  height: Ref<number>;
}

export const useGameStore = defineStore("game", () => {
  const width: IState["width"] = ref(5);
  const height: IState["height"] = ref(5);
  const game: IState["game"] = ref(
    new Array(height.value)
      .fill(false)
      .map(() => new Array(width.value).fill(false))
  );

  function initializeGame() {
    console.log("initializing game");
    game.value = new Array(height.value)
      .fill(false)
      .map(() => new Array(width.value).fill(false));
  }

  watch(width, initializeGame);
  watch(height, initializeGame);

  function changeCell(x: number, y: number): void {
    game.value[y][x] = !game.value[y][x];
  }

  const cellAt = computed(() => (x: number, y: number) => game.value[y][x]);

  return { width, height, game, initializeGame, changeCell, cellAt };
});
