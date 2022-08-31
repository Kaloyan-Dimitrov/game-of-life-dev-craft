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
  const numTicks = ref(0);
  const FPS = ref(2);
  const autoplay = ref(false);
  let autoplayInterval: NodeJS.Timer | null = null;

  // Actions
  const initializeGame = () => {
    game.value = new Array(height.value)
      .fill(false)
      .map(() => new Array(width.value).fill(false));
  };

  const changeCell: (x: number, y: number) => void = (x, y) => {
    // if (autoplay.value) return;
    game.value[y][x] = !game.value[y][x];
  };

  const clearGame = () => {
    numTicks.value = 0;
    if (autoplay.value) stopAutoplay();
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

      // if (
      //   JSON.stringify(result) == JSON.stringify(game.value) &&
      //   autoplay.value
      // )
      //   stopAutoplay();
      game.value = result;
      numTicks.value++;
    } catch (err) {
      console.error(err);
    }
  };

  const changeFPS = (change: number): void => {
    if (FPS.value + change <= 0 || FPS.value + change > 30) return;
    FPS.value += change;
    if (autoplay.value) {
      stopAutoplay();
      startAutoplay();
    }
  };

  const startAutoplay = (): void => {
    autoplay.value = true;
    autoplayInterval = setInterval(tick, 1000 / FPS.value);
  };

  const stopAutoplay = (): void => {
    autoplay.value = false;
    if (autoplayInterval !== null) clearInterval(autoplayInterval);
  };

  // Getters
  const cellAt = computed(() => (x: number, y: number) => game.value[y][x]);
  const aliveCellsNum = computed(() =>
    game.value.flat().reduce((sum, val) => (sum += Number(val)), 0)
  );

  // Watchers
  watch(width, initializeGame);
  watch(height, initializeGame);

  return {
    // State
    width,
    height,
    game,
    numTicks,
    FPS,
    autoplay,
    // Actions
    changeCell,
    clearGame,
    tick,
    changeFPS,
    startAutoplay,
    stopAutoplay,
    // Getters
    cellAt,
    aliveCellsNum,
  };
});
