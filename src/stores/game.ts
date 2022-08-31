import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";

interface IState {
  game: Ref<boolean[][]>;
  width: Ref<number>;
  height: Ref<number>;
}

export const useGameStore = defineStore("game", () => {
  const width: IState["width"] = ref(20);
  const height: IState["height"] = ref(20);
  const game: IState["game"] = ref(
    new Array(height.value)
      .fill(false)
      .map(() => new Array(width.value).fill(false))
  );

  function initializeGame() {
    game.value = new Array(height.value)
      .fill(false)
      .map(() => new Array(width.value).fill(false));
  }

  function resize(w: number, h: number): void {
    width.value = w;
    height.value = h;
    initializeGame();
  }

  function changeCell(x: number, y: number): void {
    game.value[y][x] = !game.value[y][x];
  }

  const cellAt = computed(() => (x: number, y: number) => game.value[y][x]);

  return { width, height, game, initializeGame, resize, changeCell, cellAt };
});
