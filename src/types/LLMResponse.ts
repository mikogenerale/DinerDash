import { z } from 'zod'

export const LLMResponseSchema = z.object({
  action: z.string(),
  parameters: z.object({
    query: z.string().optional(),
    near: z.string().optional(),
    min_price: z.number().optional(),
    max_price: z.number().optional(),
    open_now: z.boolean().optional()
  })
})

export type LLMResponse = z.infer<typeof LLMResponseSchema>
