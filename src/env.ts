import type { ZodError } from 'zod';
import { z } from 'zod';

const EnvSchema = z.object({
  NODE_ENV: z.string().default('development'),
  PORT: z.coerce.number().default(3000),
  SECRET_CODE: z.string().default("")
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
