import express, { Request, Response, Application } from 'express';
import cors from "cors";
import preformTick from "./gameLogic";

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(cors({
	origin: ['http://localhost', 'http://127.0.0.1:5173']
}));

app.post('/tick', (req: Request, res: Response) => {
	console.log(req.body);
	res.sendStatus(200).json(preformTick(req.body));
});


app.listen(port, () => console.log(`Server listening on ${port}!`));
