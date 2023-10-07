import type { Config } from 'drizzle-kit'
import * as dotenv from 'dotenv'

dotenv.config({
  path: '.env',
})
export default {
  schema: './db/schema.ts',
  out: './.drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DRIZZLE_DATABASE_URL,
  }
} satisfies Config
