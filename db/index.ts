import { drizzle } from 'drizzle-orm/postgres-js'
// import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'
import * as schema from './schema'

// const client = postgres(process.env.DRIZZLE_DATABASE_URL, { max: 1 })
// @TODO: Change to Neon for production
const client =
  (process.env.NODE_ENV as string) === 'development' ? postgres((process.env as any).DRIZZLE_DATABASE_URL) : postgres((process.env as any).DRIZZLE_DATABASE_URL)

export const db = drizzle(client, { schema })
// migrate(db, { migrationsFolder: '.drizzle' })
export default db
