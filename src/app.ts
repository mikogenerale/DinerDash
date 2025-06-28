import type { Request, Response } from 'express';
import express from 'express';
import env from './env.js';
import apiRoutes from "./routes/index.js"
import { globalErrorHandler } from './middleware/globalErrorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';

import swaggerUi from "swagger-ui-express"
import { openapiDocs } from './docs/openapi.js';
import swaggerOptsConfig from './config/swagger.js';

const app = express()

app.use(
    '/api_docs', 
    swaggerUi.serve, 
    swaggerUi.setup(openapiDocs, swaggerOptsConfig)
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
  console.log(`App is running at url: ${env.APP_BASE_URL}:${env.PORT}`);
});

export default app
