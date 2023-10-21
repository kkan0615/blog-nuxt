import { comments } from '~/db/schema'

export type CommentSelect = typeof comments.$inferSelect
export type CommentInsert = typeof comments.$inferInsert
