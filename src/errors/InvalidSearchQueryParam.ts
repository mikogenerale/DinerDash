import { StatusCodes } from 'http-status-codes';
import { BaseError } from './BaseError';

export class InvalidSearchQueryParam extends BaseError {
  fieldErrors?: any;
  
  constructor(
    fieldErrors?: any, 
    code?: StatusCodes, 
    message?: string
  ) {
    super( code ?? StatusCodes.BAD_REQUEST, message ?? 'Invalid Search Query Parameters.');
    this.fieldErrors = fieldErrors;
  }
}
