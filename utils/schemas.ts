import * as z from "zod";

export const profileSchema = z.object({
  username: z.string().min(3).max(30),
});

export function validateWithZodSchema<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.issues.map((issue) => issue.message);

    throw new Error(errors.join(", "));
  }
  return result.data;
}
