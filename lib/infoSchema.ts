
import { z } from 'zod';

export const personSexOptions = ['F','M','X','O'] as const;

export const infoSchema = z.object({
  alias: z.string().optional(),
  'real-name': z.string().optional(),
  age: z.number().optional(),
  titles: z.array(z.string()).optional(),
  nicknames: z.array(z.string()).optional(),
  affiliations: z.array(z.string()).optional(),
  race: z.string().optional(),
  class: z.string().optional(),
  sex: z.enum(personSexOptions).optional(),
  tribe: z.string().optional(),
  occupation: z.string().optional(),
  designation: z.string().optional(),
  debut: z.number().optional(),
}).optional();

export default { infoSchema };