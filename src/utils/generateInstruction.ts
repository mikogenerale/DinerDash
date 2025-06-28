/**
 * A utility function that returns an instruction string for the AI.
 * 
 * @param {Array<string>} categoryActions - An array of category actions. Refer to the constants defined in src/constants/index.
 * 
 * @returns {string} - A formatted instruction string.
 */

export function generateInstruction (categoryActions: Array<string>) {
    return `
      Your task is to analyze the user's request and output a JSON object representing the structured interpretation of their request.

      You must strictly adhere to the following field definitions and requirements.

      Sample JSON object output:
      {
        "action": "find_restaurant",
        "parameters": {
          "near": "boston",
          "min_price": 1,
          "max_price": 4,
          "open_now": true
        }
      }

      Field Definitions:
      - "action": REQUIRED string. Represents the desired action from the message. Must be one of the following values: ${categoryActions}.
      - "near": REQUIRED string. The location specified in the message.
      - "min_price": REQUIRED integer. Represents the minimum price level requested. Value must be between 1 and 4 (inclusive).
      - "max_price": REQUIRED integer. Represents the maximum price level requested. Value must be between 1 and 4 (inclusive).
      - "open_now": OPTIONAL boolean. Set to true if the user explicitly asks for businesses that are currently open, otherwise omit this field.

      Output ONLY the JSON object. Do not include any other text or formatting outside the JSON.
    `
}