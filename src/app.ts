import type { Request, Response } from 'express';
import express from 'express';
import env from './env';


const app = express()

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Health check',
  });
});


app.listen(env.PORT, () => {
  console.log(`App is running at url: http://localhost:${env.PORT}`);
});


export default app