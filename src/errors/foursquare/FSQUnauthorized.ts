import { StatusCodes } from "http-status-codes";
import { BaseError } from "../BaseError";
import { ErrorCodes } from "../ErrorCodes";

class FSQUnauthorized extends BaseError {
  code: ErrorCodes
  
  constructor(
    message: string, 
    statusCode?: StatusCodes, 
    code?: ErrorCodes, 
  ) {
    super(statusCode ?? StatusCodes.UNAUTHORIZED, message)
    this.code = code ?? ErrorCodes.FSQ_RES_UNAUTHORIZED
  }
}

export default FSQUnauthorized