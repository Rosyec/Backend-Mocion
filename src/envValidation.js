import * as z from "zod";
import dotenv from "dotenv";

dotenv.config();
const { PORT, API_KEY, URL_API_COMICS } = process.env;

const envSchema = z.object({
  NODE_PORT: z.string(),
  NODE_API_KEY: z.string(),
  NODE_URL_API_COMICS: z.string().url(),
});

export const envValidation = envSchema.parse({
  NODE_PORT: PORT,
  NODE_API_KEY: API_KEY,
  NODE_URL_API_COMICS: URL_API_COMICS,
});
