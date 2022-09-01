import { describe, expect, test } from '@jest/globals';
import { createServer } from '..';
import supertest from 'supertest';
import { gridTestLarge as gridTest, gridTestLargeResult } from '../gridTests';

const app = createServer();

describe('server', () => {
	test('/POST tick', async () => {
		await supertest(app).post('/tick').send(gridTest).expect(200).then((res) => {
			expect(res.body).toEqual(gridTestLargeResult);
		});
	});
});
