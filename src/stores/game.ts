import { defineStore } from "pinia";
import { computed, ref, type ComputedRef, type Ref } from "vue";

interface IState {
  game: Ref<boolean[][]>;
  width: Ref<number>;
  height: Ref<number>;
}

export const useGameStore = defineStore("game", () => {
  const width: IState["width"] = ref(100);
  const height: IState["height"] = ref(100);
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

  initializeGame();

  function resize(w: number, h: number): void {
    width.value = w;
    height.value = h;
    initializeGame();
  }

  const cellAt = computed((x: number, y: number) => game.value[x][y]);

  return { width, height, game, initializeGame, resize, cellAt };
});
