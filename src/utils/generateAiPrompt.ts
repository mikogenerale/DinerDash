
export function generateAiPrompt(message: string, categoryActions: string[]) {

  return `
     Instruction: You are an AI programmer that extract/transform a message input to a JSON output.
     Extract the following Message Input: ${message}
     Expected JSON Output format: {"action": "restaurant_search", "parameters": {"query": "sushi", "near": "downtown Los Angeles", "price": "1", "open_now": true}}

      Note:
       - The parameters: query, near, and price is required while open_now is optional.
       - In the action field, pick in this array the desired action of the message: ${categoryActions}
       - Just make the json in one line text, 
       - No need for special characters e.g. \n and etc.
       - No need for json text modifier, just return the JSON.
  `
}