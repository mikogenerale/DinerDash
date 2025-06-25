import { OpenAI } from 'openai'
import env from '../env'
import { LLMResponse } from '../types/LLMResponse'

class OpenAiService {

  // client: OpenAI

  constructor(){
    // this.client = new OpenAI({
    //   apiKey: env.OPENAI_API_KEY
    // }) 
  }

  generateInstruction() {
    return `
      Ai instruction goes here
    `
  }

  async convertStringToJSON(inputStr: string, ){

    // wrap this in a try catch block

    // generate an instruction
    const instruction = this.generateInstruction()

    // TODO: call the client here with the instruction

    // TODO: validate the LLM response

    // mock response
    const result: LLMResponse = {
      action: "restaurant_search",
      parameters: {
        query: "sushi",
        near: "downtown Los Angeles",
        price: 1,
        open_now: true
      }
    }

    return result
  }
}

export default OpenAiService