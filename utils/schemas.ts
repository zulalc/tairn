import * as z from "zod";

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

export const profileSchema = z.object({
  username: z.string().min(3).max(30),
});

export const imageSchema = z.object({
  image: validateFile(),
});

function validateFile() {
  const maxFileSize = 1024 * 1024; //1MB
  const accceptedFileTypes = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxFileSize;
    }, "File size should be less than 1MB")
    .refine((file) => {
      return (
        !file || accceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, "Invalid file type");
}
