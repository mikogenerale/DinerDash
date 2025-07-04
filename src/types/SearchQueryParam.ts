import { z } from 'zod/v4';
import env from '../env';

export const SearchQueryParamSchema = z.object({
  message: z.string(),
  code: z.string().check((ctx) => {
    if(ctx.value !== env.SECRET_CODE) {
      ctx.issues.push({
        code: 'custom',
        message: 'Code did not match',
        input: ctx.value
      })
    }
  }),
});

export type SearchQueryParam = z.infer<typeof SearchQueryParamSchema>;
