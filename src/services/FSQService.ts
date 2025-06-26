import { StatusCodes } from "http-status-codes";
import env from "../env";
import { LLMResponse } from "../types/LLMResponse";
import FSQBadRequest from "../errors/foursquare/FSQBadRequest";
import FSQUnauthorized from "../errors/foursquare/FSQUnauthorized";

class FSQService {

  async search(jsonData: LLMResponse) {
    try {
      const { FSQ_API_KEY, FSQ_BASE_URL, FSQ_PLACES_API_VERSION } = env

      const queryParams = new URLSearchParams({
        ...jsonData.parameters,
        price: jsonData.parameters.price.toString(),
        open_now: jsonData.parameters.open_now.toString(),
        fields: 'name,price,location,hours,rating,tastes,fsq_place_id,menu'
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