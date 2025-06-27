import type { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { SearchQueryParamSchema } from '../types/SearchQueryParam';
import { StatusCodes } from 'http-status-codes';
import { InvalidSearchQueryParam } from '../errors/app/InvalidSearchQueryParam';

function searchQueryParamValidator(req: Request, _res: Response, next: NextFunction) {
  try {
    SearchQueryParamSchema.parse(req.query);
  }
  catch (e) {
    const error = e as ZodError
    const fieldErrors = error.flatten().fieldErrors
    throw new InvalidSearchQueryParam(
      fieldErrors, 
      StatusCodes.UNAUTHORIZED,
    );
  }
  next();
}

export default searchQueryParamValidator;
