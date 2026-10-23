import { z } from "zod";

export const tweetZodSchema = z.object({
  content: z
    .string()
    .min(1, { message: "Content is required" })
    .max(280, { message: "Content exceeds 280 characters" }),
});
