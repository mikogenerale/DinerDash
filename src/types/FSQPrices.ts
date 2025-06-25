import z from "zod"

const PriceFilterSchema = z.object({
  min_price: z.number().min(1).max(4),
  max_price: z.number().min(1).max(4)
})

export type PriceFilter = z.infer<typeof PriceFilterSchema>