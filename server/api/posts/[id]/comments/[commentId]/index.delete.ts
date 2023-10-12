import { defineEventHandler } from 'h3'
import db from '~/db'
import { comments } from '~/db/schema'
import { eq } from 'drizzle-orm'

interface Query {
  password?: string
}

export default defineEventHandler(async (event) => {
  let commentId = getRouterParam(event, 'commentId')
  const query = getQuery<Query>(event)

  if (!commentId || !Number(commentId) || !query.password ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'required query is missing',
    })
  }

  const commentById = await db.query.comments.findFirst({
    where: (comments, { eq }) => (eq(comments.id, Number(commentId)))
  })
  if (!commentById || commentById.deletedAt) {
    throw createError({
      statusCode: 404,
      statusMessage: 'NOT FOUND',
    })
  }
  const deleted = await db.update(comments).set({
    deletedAt: new Date(),
  }).where(eq(comments.id, Number(commentId)))
  console.log(deleted)
  return deleted
})
