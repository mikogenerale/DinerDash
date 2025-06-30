import { StatusCodes } from "http-status-codes";
import env from "../env";
import { LLMResponse } from "../types/LLMResponse";
import FSQBadRequest from "../errors/foursquare/FSQBadRequest";
import FSQUnauthorized from "../errors/foursquare/FSQUnauthorized";
import { fsqReturnFields } from "../constants";
import { FSQResponse } from "../types/FSQResponse";

class FSQService {


 /**
 * Calls the Foursquare API using the provided data and returns the search result.
 *
 * @param {LLMResponse} data - An LLMResponse parameter.
 * 
 * @returns {Promise<FSQResponse>} - A response after calling the Foursquare API.
 * 
 * @throws {BadRequestError} If the input data is invalid.
 * @throws {UnauthorizedError} If the request is unauthorized.
 * 
 */

  async search(data: LLMResponse): Promise<FSQResponse[]> {
    try {
      const { FSQ_API_KEY, FSQ_BASE_URL, FSQ_PLACES_API_VERSION } = env

      const filteredParameters = Object.fromEntries(
        Object.entries(data.parameters)
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

      const jsonResponse = await response.json()

      const restaurants = ("results" in jsonResponse) 
        ? jsonResponse.results
        : []

      return restaurants as FSQResponse[]
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