import { z } from 'zod'

const FSQFieldsSchema = z.object({
  name: z.string(),
  address: z.string(),
  cuisine: z.string(),
  rating: z.string(),
  price: z.string(),
  hours: z.array(z.string())
})

export type FSQFields = z.infer<typeof FSQFieldsSchema>