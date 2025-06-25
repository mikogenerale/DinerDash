import type { NextFunction, Request, Response } from 'express';

import env from '../env';
import { BaseError } from '../errors/BaseError';

export function globalErrorHandler(
  err: BaseError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  res.status(err.statusCode ?? 500)
    .json({
      ...err,
      statusCode: err.statusCode,
      message: err.message,

      stackTrace: env.NODE_ENV === 'production'
        ? undefined
        : err.stack,
    });
}
