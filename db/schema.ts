import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  postId: text('postId').notNull(),
  nickname: varchar('nickname', { length: 100 }).notNull(),
  password: text('password').notNull(),
  content: text('content').notNull(),
  ipAddress: text('ipAddress'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})
