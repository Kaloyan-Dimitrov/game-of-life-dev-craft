const countNeighbors = (grid: boolean[][], x: number, y: number): number => {
	let count = 0;
	for(let i = -1; i < 2; i ++) {
		for(let j = -1; j < 2; j ++) {
			const currX = x + i;
			const currY = y + j;
			if(typeof grid[currY] === 'undefined' || typeof grid[currY][currX] === 'undefined' || (currX == x && currY == y)) continue;
			if(grid[currY][currX]) count ++;
		}
	}
	return count;
};

const preformTick = (grid: boolean[][]): boolean[][] => {
	grid.map((row, y) => {
		return row.map((cell, x) => {
			const numNeighbors = countNeighbors(grid, x, y);
			if(cell && numNeighbors == 2 || numNeighbors == 3) return true;
			if(!cell && numNeighbors == 3) return true;
			if(cell) return false;
		});
	});
	return grid;
};

export default preformTick;