import { BaseError } from "../BaseError";
import { ApiError } from "@google/genai";

class GeminiErrorResponse extends BaseError {
  name: string
  constructor(error: ApiError) {
    const message: string = JSON.parse(error.message).error.message
    super(error.status, message)
    this.name = 'Gemini ' + error.name
  }
}

export default GeminiErrorResponse