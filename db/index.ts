import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

// const client = postgres(process.env.DRIZZLE_DATABASE_URL, { max: 1 })
const client = postgres(process.env.DRIZZLE_DATABASE_URL)

export const db = drizzle(client)
migrate(db, { migrationsFolder: '.drizzle' })
export default db
