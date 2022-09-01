import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import preformTick from './gameLogic';
const port = 3000;

export const createServer = () => {
	const app: Application = express();

	app.use(express.json());
	app.use(
		cors({
			origin: [ 'http://localhost', 'http://127.0.0.1:5173' ]
		})
	);

	app.post('/tick', (req: Request, res: Response) => {
		res.json(preformTick(req.body));
	});
	return app;
};

const app = createServer();
app.listen(port, () => console.log(`Server listening on ${port}!`));
