/**
 * A utility function that returns an instruction string for the AI.
 * 
 * @param {Array<string>} categoryActions - An array of category actions. Refer to the constants defined in src/constants/index.
 * 
 * @returns {string} - A formatted instruction string.
 */

export function generateInstruction (categoryActions: Array<string>) {
    return `
      You are an AI that extract/transform a message input to a JSON output.
      Note:
        - min_price and max_price fileds should be between values 1 to 4 only.
        - In the action field, pick in this category the desired action of the message: ${categoryActions}  
    `
}