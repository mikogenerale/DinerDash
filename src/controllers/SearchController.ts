import { Request, Response } from "express";
import { SearchQueryParam } from "../types/SearchQueryParam";
import { FSQService, GeminiService } from "../services";
import { categoryActions } from "../constants";
import { generateAiPrompt } from "../utils/generateAiPrompt";
class SearchController {
  fsqService: FSQService
  geminiService: GeminiService

  constructor() {
    this.fsqService = new FSQService()
    this.geminiService = new GeminiService()
  }

  search = async (req: Request, res: Response) => {
    const { message } = req.query as SearchQueryParam
    const decodedMessage = decodeURIComponent(message)

    const actions = Object.keys(categoryActions)

    const prompt = generateAiPrompt(decodedMessage, actions)
    const generatedJSON = await this.geminiService.ask(prompt)
    const result = await this.fsqService.search(generatedJSON)

    res.json({
      result
    });
  }
}

export default SearchController