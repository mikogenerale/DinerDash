import {ApiError, GenerateContentResponse, GoogleGenAI } from "@google/genai";
import env from "../env";
import { LLMResponse } from "../types/LLMResponse";
import { generateContentConfig } from "../utils/generateContentConfig";
import GeminiErrorResponse from "../errors/ai/GeminiErrorResponse";

class GeminiService {

  private assistant: GoogleGenAI

  constructor() {
    this.assistant = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY })
  }

  getConnection = (): GoogleGenAI => {
    return this.assistant
  }

  ask = async (message: string, instruction: string): Promise<LLMResponse> => {
    try {
      const response: GenerateContentResponse = await this.getConnection().models.generateContent({
        model: env.GEMINI_MODEL,
        contents: message,
        config: generateContentConfig({ systemInstruction: instruction })
      });
      return JSON.parse(response.text ?? "")
    }
    catch(e) {
     throw new GeminiErrorResponse(e as ApiError)
    }
  }
}

export default GeminiService