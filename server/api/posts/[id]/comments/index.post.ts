import { defineEventHandler } from 'h3'
import db from '~/db'
import { comments } from '~/db/schema'
import { eq } from 'drizzle-orm'
import { CommentInsert } from '~/types/models/comments'

export default defineEventHandler(async (event) => {
  const postId = getRouterParam(event, 'id')
  const body = await readBody(event)

  // @TODO: Add bcrypt
  const newComment: CommentInsert = {
    ...body
  }

  const inserted = await db.insert(comments).values(newComment)
  console.log(inserted)
  return inserted
})
