import express, { Request, Response, Application } from 'express';
const app: Application = express();
const port = 3000;

app.use(express.json());

app.post('/tick', (req: Request, res: Response) => {
	console.log(req.body);
});


app.listen(port, () => console.log(`Server listening on ${port}!`));
