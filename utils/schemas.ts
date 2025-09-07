import { stat } from "fs";
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

export const clubSchema = z.object({
  name: z.string().min(3).max(50),
  description: z.string().min(10).max(500),
  location: z.enum(["ONLINE", "IN_PERSON", "HYBRID"]).default("ONLINE"),
  category: z.string(),
  rules: z.string().max(300).optional(),
  isPublic: z.coerce.boolean().default(true),
  currentBook: z.uuid().optional(),
  meetingTime: z.coerce.date().optional(),
  capacity: z.number().int().positive().optional(),
  creatorId: z.uuid(),
});

export const bookSchema = z.object({
  title: z.string().min(1).max(100),
  author: z.string().min(1).max(100),
  description: z.string().max(1000).optional(),
  publishedAt: z.coerce.date().optional(),
  isbn: z.string().min(10).max(13).optional(),
});

export const clubBookSchema = z.object({
  clubId: z.uuid(),
  bookId: z.uuid(),
  status: z
    .enum(["TO_BE_READ", "CURRENTLY_READING", "FINISHED", "DROPPED"])
    .default("TO_BE_READ"),
  addedAt: z.coerce.date().default(() => new Date()),
  endDate: z.coerce.date().optional(),
});

export const clubBookNotesSchema = z.object({
  clubBookId: z.uuid(),
  userId: z.uuid(),
  parentId: z.uuid().optional(),
  rating: z.number().min(1).max(5).optional(),
  notes: z.string().max(2000).optional(),
});
