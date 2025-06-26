import { StatusCodes } from "http-status-codes";
import { BaseError } from "../BaseError";
import { ErrorCodes } from "../errorCodes";

class FSQBadRequest extends BaseError {
  code: ErrorCodes

   constructor(
    message: string, 
    statusCode?: StatusCodes, 
    code?: ErrorCodes, 
  ) {
    super(statusCode ?? StatusCodes.BAD_REQUEST, message)
    this.code = code ?? ErrorCodes.FSQ_RES_BAD_REQUEST
  }
}

export default FSQBadRequest