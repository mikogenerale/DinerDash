import type { NextFunction, Request, Response } from 'express';

import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export function notFoundHandler(req: Request, res: Response, next: NextFunction) {
  res.status(404)
    .json({
      message: `${StatusCodes.NOT_FOUND} ${ReasonPhrases.NOT_FOUND} - ${req.path}`,
    });

  next();
}
