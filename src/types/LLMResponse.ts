import { z } from 'zod'

const LLMResponseSchema = z.object({
  action: z.string(),
  parameters: z.object({
    query: z.string(),
    near: z.string(),
    price: z.number().min(1).max(4),
    open_now: z.boolean()
  })
})

export type LLMResponse = z.infer<typeof LLMResponseSchema>


/*
  {
    query: 'sushi',
    near: 'downtown Los Angeles',
    price: z.number(),
    open_now: z.boolean()
  }
*/
