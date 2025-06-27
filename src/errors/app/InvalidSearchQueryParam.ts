import { StatusCodes } from 'http-status-codes';
import { BaseError } from '../BaseError';

export class InvalidSearchQueryParam extends BaseError {
  fieldErrors?: any;
  
  constructor(
    fieldErrors?: any, 
    statusCode?: StatusCodes, 
    message?: string
  ) {
    super(statusCode ?? StatusCodes.BAD_REQUEST, message ?? 'Invalid Search Query Parameters.');
    this.fieldErrors = fieldErrors;
  }
}
