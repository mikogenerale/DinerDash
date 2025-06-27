import { StatusCodes } from "http-status-codes";
import { BaseError } from "../BaseError";

class FSQBadRequest extends BaseError {
   constructor(message: string, statusCode?: StatusCodes) {
    super(statusCode ?? StatusCodes.BAD_REQUEST, message)
  }
}

export default FSQBadRequest