
import packageJson from "../../package.json"
import env from "../env"

export const swaggerDocs = {
  openapi: "3.0.0",
  info: {
    title: "Diner Dash",
    version: packageJson.version,
    description: "An LLM-Driven Restaurant Finder API that allows users to enter a free‑form message describing what they want to do."
  },
  servers: [
    {
      url: `http://localhost:${env.PORT}`,
      description: "Local Server"
    },
    {
      url: `https://diner-dash-nu.vercel.app`,
      description: "Vercel Deployment Server"
    }
  ],
  paths: {
    "/": {
      get: {
        summary: "Health Check",
        tags: ["Endpoints"],
        responses: {
          200: { message: "Diner Dash Running Healthy" }
        }
      }
    },
    "/api/execute": {
      get: {
        summary: "Api endpoint for searching restaurant.",
        tags: ["Endpoints"],
        parameters: [
          { 
            name: "message",
            in: "query",
            description: "The search input message. Note URL encoded message.",
            required: true,
            schema: {
              type: "string"
            }
          },
          { 
            name: "code",
            in: "query",
            description: "A secret code to protect the api from unauthorized users.",
            required: true,
            schema: {
              type: "string"
            }
          }
        ],
        responses: {
          200: { 
            description: "Returns an array of FSQResponse object"
          },
          400: {
            description: "Returns a FSQBadRequest Json Error"
          },
          401: {
            description: "Returns a FSQUnauthorized Json Error"
          }
        }
      }
    }
  }
}