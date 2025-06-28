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

  /**
   * Getter function
   * 
   * @returns {GoogleGenAI} - returns the instance of GoogleGenAI 
   */

  getConnection = (): GoogleGenAI => {
    return this.assistant
  }

/**
 * Accepts input message and instruction then outputs a JSON format (LLMResponse).
 *
 * @param {string} message - A content message string parameter.
 * @param {string} instruction - A system instruction string parameter
 * 
 * @returns {Promise<LLMResponse>} - returns a structured JSON (LLMResponse) base on input message.
 * 
 * @throws {GeminiErrorResponse} - If there is an ApiError thrown by Gemini.
 *
 */

  ask = async (message: string, instruction: string): Promise<LLMResponse> => {
    try {
      const response: GenerateContentResponse = await this.getConnection().models.generateContent({
        model: env.GEMINI_MODEL,
        contents: message,
        config: generateContentConfig({ 
          systemInstruction: instruction,
          thinkingConfig: {
            thinkingBudget: 500
          }
        })
      });

      return JSON.parse(response.text ?? "") as LLMResponse
    }
    catch(e) {
     throw new GeminiErrorResponse(e as ApiError)
    }
  }
}

export default GeminiService