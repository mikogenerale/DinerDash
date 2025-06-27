import { Request, Response } from "express";
import { SearchQueryParam } from "../types/SearchQueryParam";
import { FSQService, GeminiService } from "../services";
import { categoryActions } from "../constants";
import { generateInstruction } from "../utils/generateInstruction";

class SearchController {
  fsqService: FSQService
  geminiService: GeminiService

  constructor() {
    this.fsqService = new FSQService()
    this.geminiService = new GeminiService()
  }

  search = async (req: Request, res: Response) => {
    const { message } = req.query as SearchQueryParam

    // get the decoded URL encoding
    const decodedMessage = decodeURIComponent(message)

    // generate an instruction
    const instruction: string = generateInstruction(Object.keys(categoryActions))
    
    // ask AI for JSON output
    const generatedJSON = await this.geminiService.ask(decodedMessage, instruction)

    // call foursquare search service
    const result = await this.fsqService.search(generatedJSON)

    res.json(result);
  }
}

export default SearchController