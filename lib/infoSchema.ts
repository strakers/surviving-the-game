
import { z } from 'zod';

export const personSexOptions = ['F','M','X','O'] as const;

export const infoSchema = z.object({
  affiliations: z.array(z.string()).optional(),
  age: z.number().optional(),
  alias: z.string().optional(),
  class: z.string().optional(),
  category: z.string().optional(),
  debut: z.number().optional(),
  designation: z.string().optional(),
  nicknames: z.array(z.string()).optional(),
  occupation: z.string().optional(),
  race: z.string().optional(),
  'real-name': z.string().optional(),
  region: z.string().optional(),
  sex: z.enum(personSexOptions).optional(),
  titles: z.array(z.string()).optional(),
  tribe: z.string().optional(),
  type: z.string().optional(),
}).optional();

export default { infoSchema };