import { z } from 'zod'

export const LLMResponseSchema = z.object({
  action: z.string(),
  parameters: z.object({
    query: z.string(),
    near: z.string(),
    price: z.string(),
    open_now: z.boolean().optional()
  })
})

export type LLMResponse = z.infer<typeof LLMResponseSchema>
