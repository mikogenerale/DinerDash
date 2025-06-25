import { Request, Response } from "express";
import { SearchQueryParam } from "../types/SearchQueryParam";

export class SearchController {

  search(req: Request, res: Response) {
    const { message } = req.query as SearchQueryParam
    const promptMessage = decodeURIComponent(message)

    res.json({
      message: promptMessage,
    });
  }
}