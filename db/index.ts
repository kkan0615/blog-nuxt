import { drizzle } from 'drizzle-orm/postgres-js'
import { drizzle as drizzleNeon } from 'drizzle-orm/neon-http'
import postgres from 'postgres'
import { neon, neonConfig } from '@neondatabase/serverless'
import * as schema from './schema'

if ( (process.env.NODE_ENV as string) !== 'development') {
  neonConfig.fetchConnectionCache = true
}

const client =
  (process.env.NODE_ENV as string) === 'development' ?
    postgres((process.env as any).DRIZZLE_DATABASE_URL)
    : neon((process.env as any).DRIZZLE_DATABASE_URL)

export const db = (process.env.NODE_ENV as string) === 'development' ?
  drizzle(<postgres.Sql<{}>>client, { schema })
  : drizzleNeon(client as any, { schema })

// @TODO: Remove it after finsishing testing
// neonConfig.fetchConnectionCache = true
//
// const client = neon((process.env as any).DRIZZLE_DATABASE_URL)
//
// export const db = drizzleNeon(<postgres.Sql<{}>>client, { schema })
export default db
