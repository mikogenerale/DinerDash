import type { ZodError } from 'zod';
import { z } from 'zod';

const EnvSchema = z.object({
  NODE_ENV: z.string().default('development'),
  APP_BASE_URL: z.string().default('http://127.0.0.1'),
  PORT: z.coerce.number().default(3000),

  //  Required
  SECRET_CODE: z.string(),
  
  FSQ_API_KEY: z.string(),
  FSQ_BASE_URL: z.string(),
  FSQ_PLACES_API_VERSION: z.string(),

  GEMINI_API_KEY: z.string(),
  GEMINI_MODEL: z.string()
});

export type EnvType = z.infer<typeof EnvSchema>;

let env: EnvType;

try {
  env = EnvSchema.parse(process.env);
}
catch (e) {
  const error = e as ZodError;
  console.error('Invalid env: ');
  console.error(error.flatten().fieldErrors);
  process.exit(1);
}

export default env;
