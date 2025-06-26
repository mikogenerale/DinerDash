import { GenerateContentResponse, GoogleGenAI } from "@google/genai";
import env from "../env";
import { LLMResponse, LLMResponseSchema } from "../types/LLMResponse";
import { ZodError } from "zod/v4";

class GeminiService {

  private assistant: GoogleGenAI

  constructor() {
    this.assistant = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY })
  }

  getConnection = (): GoogleGenAI => {
    return this.assistant
  }

  ask = async (prompt: string): Promise<LLMResponse> => {
    try {
      const response: GenerateContentResponse = await this.getConnection().models.generateContent({
        model: env.GEMINI_MODEL,
        contents: prompt,
      });

      const jsonResponse = JSON.parse(response.text ?? "")
      console.log(jsonResponse)

      LLMResponseSchema.parse(jsonResponse)

      return jsonResponse
    }
    catch(e) {
      // const error = e as ZodError
      // console.log(error.flatten())
      if(e instanceof ZodError) {
        console.log(e.flatten().fieldErrors)
      }
      throw e
    }
  }
}

export default GeminiService