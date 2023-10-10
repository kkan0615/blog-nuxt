import { comments } from '~/db/schema'

export type CommentInsert = typeof comments.$inferInsert
