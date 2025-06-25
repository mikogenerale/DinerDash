import type { Request, Response } from 'express';
import express from 'express';
import env from './env';
import apiRoutes from "./routes"

const app = express()

app.use('/api', apiRoutes)

app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'Health check',
  });
});


app.listen(env.PORT, () => {
  console.log(`App is running at url: http://localhost:${env.PORT}`);
});


export default app