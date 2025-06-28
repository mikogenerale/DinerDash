## DinerDash
DinerDash is an LLM-driven Restaurant Finder API that allows users to enter free-form messages to describe what they want to do — such as finding a restaurant with specific characteristics — and get intelligent results powered by AI and Foursquare.

<br/>

### 🛠️ Local Setup Instructions

1. Clone this repository
    ```
    git clone https://github.com/mikogenerale/DinerDash.git
    cd DinerDash
    ```

2. Install dependencies
    ```
    npm install
    ```


3. Create an env file before running the app
   
    On Linux/macOS:
    ```
    touch .env
    ```
    On Windows (Powershell): 
    ```
    New-Item -Path .env -ItemType File
    ```

4. Make sure to add the required environment variables before running the project, as it will not start without it.

    ```
      # Variables
    
          PORT=3000
          NODE_ENV=development
          APP_BASE_URL=localhost
    
          # Required
          SECRET_CODE=<the_api_secrect_code>
          FSQ_API_KEY=<your_foursquare_api_key_here> 
          FSQ_BASE_URL=<foursquare_base_url_here>  
          FSQ_PLACES_API_VERSION=<foursquare_places_version_here>
    
          GEMINI_API_KEY=<your_gemini_api_key_here>
          GEMINI_MODEL=<gemini_model>  e.g. `gemini-2.5-flash`
    
    ```
     To use other Gemini AI models, refer to: https://ai.google.dev/gemini-api/docs/models 
     
     To create a FourSquare API Key, create a developer console account then click on generate API key. Refer to: https://foursquare.com/developers


5. Run this command after settting up the env variables

    ```
    npm run dev
    ```

That's it. You can now test this project endpoints.

<br />
<br />

### 📄API DOCUMENTATION

Access the OpenAPI (Swagger) documentation at:
```
# Add this enpoint
  - /api_docs

# or, your local server url
  - http://localhost:3000/api_docs

```
Use this to explore and test the API interactively.





