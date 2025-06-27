import { GenerateContentConfig, Type } from "@google/genai"

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