import { pgTable, serial, text, integer, timestamp, varchar } from 'drizzle-orm/pg-core'

export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  postId: text('post_id').notNull(),
  commentId: integer('comment_id'),
  nickname: varchar('nickname', { length: 100 }).notNull(),
  password: text('password').notNull(),
  content: text('content').notNull(),
  ipAddress: text('ip_address'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

/**
 * Subscribe users
 */
export const subscribes = pgTable('subscribes', {
  id: serial('id').primaryKey(),
  email: text('email').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})
