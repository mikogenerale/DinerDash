import { GenerateContentConfig, Type } from "@google/genai"


/**
 * A utility function that returns GenerateContentConfig object.
 * 
 * @param {GenerateContentConfig} opts - an optional option object to extend default Gemini configuration.
 * 
 * @returns {GenerateContentConfig object}
 */

export const generateContentConfig = (opts?: GenerateContentConfig): GenerateContentConfig => {
  return {
    responseMimeType: "application/json",
    responseSchema: {
      type: Type.OBJECT,
      properties: {
        action: { type:Type.STRING },
        parameters: {
          type: Type.OBJECT,
          properties: {
            query: { type: Type.STRING },
            near: { type: Type.STRING },
            min_price: { type: Type.NUMBER },
            max_price: { type: Type.NUMBER },
            open_now: { type: Type.BOOLEAN }
          },
          propertyOrdering: ["query", "near", "min_price", "max_price", "open_now"]
        }
      },
      propertyOrdering: ["action", "parameters"],
      ...opts
    }
    }   
  }