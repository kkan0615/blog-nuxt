import type { Config } from 'drizzle-kit'

export default {
  schema: './src/db/schema.ts',
  out: './drizzle',
  dbCredentials: {
    connectionString: 'postgres://postgres:postgres0615@@localhost:5432/express_study_api2',
  }
} satisfies Config
