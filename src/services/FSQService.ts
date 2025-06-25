import env from "../env";
import { LLMResponse } from "../types/LLMResponse";

class FSQService {


  async search(jsonData: LLMResponse) {
    try {

      const { FSQ_API_KEY, FSQ_BASE_URL, FSQ_PLACES_API_VERSION } = env

      const queryParams = new URLSearchParams({
        query: jsonData.parameters.query,
        near: jsonData.parameters.near,
        price: jsonData.parameters.price.toString(),
        open_now: jsonData.parameters.open_now.toString()
      })
      
      const endpoint = `${FSQ_BASE_URL}?${queryParams}`

      const response = await fetch(endpoint, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'X-Places-Api-Version': FSQ_PLACES_API_VERSION,
            authorization: `Bearer ${FSQ_API_KEY}`
          }
      })

      const result = await response.json()

      return result
    }
    catch(error) {
      console.error(error)
    }
  }
}

export default FSQService