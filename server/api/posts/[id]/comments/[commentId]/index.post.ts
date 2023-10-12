import { defineEventHandler } from 'h3'
import db from '~/db'
import { comments } from '~/db/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  let commentId = getRouterParam(event, 'commentId')
  const body = await readBody(event)

  if (!commentId || !Number(commentId) ) {
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
  const updated = await db.update(comments).set({
    updatedAt: new Date(),
    nickname: body.nickname,
    content: body.content,
    isSecret: body.isSecret,
  }).where(eq(comments.id, Number(commentId)))

  return updated
})
