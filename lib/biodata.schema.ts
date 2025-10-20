
import { z } from 'zod';

export const biodataSchema = z.object({
  alias: z.string().optional(),
  realName: z.string().optional(),
  age: z.number().optional(),
  titles: z.array(z.string()).optional(),
  nicknames: z.array(z.string()).optional(),
  affiliations: z.array(z.string()).optional(),
  class: z.string().optional(),
  sex: z.enum(['F','M','X','O']).optional(),
  tribe: z.string().optional(),
  occupation: z.string().optional(),
  designation: z.string().optional(),
  debut: z.number().optional(),
}).optional();

export default { biodataSchema };