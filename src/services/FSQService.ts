import { StatusCodes } from "http-status-codes";
import env from "../env";
import { LLMResponse } from "../types/LLMResponse";
import FSQBadRequest from "../errors/foursquare/FSQBadRequest";
import FSQUnauthorized from "../errors/foursquare/FSQUnauthorized";
import { fsqReturnFields } from "../constants";

class FSQService {

  async search(jsonData: LLMResponse) {
    try {
      const { FSQ_API_KEY, FSQ_BASE_URL, FSQ_PLACES_API_VERSION } = env

      const filteredParameters = Object.fromEntries(
        Object.entries(jsonData.parameters)
              .filter(([_, v]) => v !== undefined)
              .map(([k, v]) =>  [k, v.toString()])
       )

      const queryParams = new URLSearchParams({
        ...filteredParameters,
        fields: fsqReturnFields.join(',')
      })
      
      const url = `${FSQ_BASE_URL}?${queryParams}`

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-Places-Api-Version': FSQ_PLACES_API_VERSION,
          authorization: `Bearer ${FSQ_API_KEY}`
        }
      })

      if(!response.ok) { 
        throw new Error(JSON.stringify({
          statusCode: response.status,
          statusText: response.statusText,
          message: JSON.parse(await response.text()).message
        }))
      }

      return await response.json()
    }
    catch(e) {
      const error = JSON.parse(e.message) 

      if(error.statusCode === StatusCodes.BAD_REQUEST) {
        throw new FSQBadRequest(error.message, error.statusCode)
      }
      else if(error.statusCode === StatusCodes.UNAUTHORIZED){
        throw new FSQUnauthorized(error.message, error.statusCode)
      }
      else {
        throw e
      }
    }
  }
}

export default FSQService