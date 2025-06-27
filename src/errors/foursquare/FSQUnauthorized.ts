import { StatusCodes } from "http-status-codes";
import { BaseError } from "../BaseError";

class FSQUnauthorized extends BaseError {
  constructor(message: string, statusCode?: StatusCodes) {
    super(statusCode ?? StatusCodes.UNAUTHORIZED, message)
  }
}

export default FSQUnauthorized