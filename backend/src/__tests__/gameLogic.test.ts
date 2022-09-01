import preformTick, { countNeighbors } from '../gameLogic';
import { describe, expect, test } from '@jest/globals';
import { gridTestLarge as gridTest, gridTestSmall } from '../gridTests';

describe('count neighbors', () => {
	test('should return a number', () => {
		expect(typeof countNeighbors([ [] ], 0, 0)).toBe('number');
	});

	test('should count the neighbors correctly for middle cells', () => {
		expect(countNeighbors(gridTestSmall, 1, 1)).toBe(3);
	});

	test('should count the neighbors correctly for border cells', () => {
		expect(countNeighbors(gridTestSmall, 0, 1)).toBe(2);
		expect(countNeighbors(gridTestSmall, 1, 0)).toBe(3);
	});
});

describe('preform tick', () => {
	test('should kill a live cell with less than two neighbors', () => {
		expect(preformTick(gridTest)[0][0]).toBe(false);
	});

	test('should keep any live cell with two or three neighbors', () => {
		expect(preformTick(gridTest)[1][1]).toBe(true);
		expect(preformTick(gridTest)[2][2]).toBe(true);
	});

	test('should kill a live cell with more than three neighbors', () => {
		expect(preformTick(gridTest)[3][3]).toBe(false);
	});

	test('should make any dead cell alive if it has exactly three neighbors', () => {
		expect(preformTick(gridTest)[3][4]).toBe(true);
	});
});
