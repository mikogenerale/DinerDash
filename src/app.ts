import type { Request, Response } from 'express';
import express from 'express';
import env from './env';
import apiRoutes from "./routes"
import { globalErrorHandler } from './middleware/globalErrorHandler';
import { notFoundHandler } from './middleware/notFoundHandler';
import { swaggerDocs } from './docs/swagger';
import swaggerUi from "swagger-ui-express"

const app = express()

app.use(
    '/api_docs', 
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocs)
);

app.use('/api', apiRoutes)

app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'Diner Dash Running Healthy',
  });
});

app.use(globalErrorHandler);
app.use(notFoundHandler)

app.listen(env.PORT, () => {
  console.log(`App is running at url: http://localhost:${env.PORT}`);
});

export default app
