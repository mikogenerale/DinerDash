import { Request, Response } from "express";
import { SearchQueryParam } from "../types/SearchQueryParam";
import { FSQService, OpenAiService } from "../services";
 
class SearchController {
  fsqService: FSQService
  openAiService: OpenAiService

  constructor() {
    this.fsqService = new FSQService()
    this.openAiService = new OpenAiService()
  }

  search = async (req: Request, res: Response) => {
    const { message } = req.query as SearchQueryParam
    const promptMessage = decodeURIComponent(message)

    const converted = await this.openAiService.convertStringToJSON(promptMessage)
    const result = await this.fsqService.search(converted)

    res.json(result);
  }
}

export default SearchController