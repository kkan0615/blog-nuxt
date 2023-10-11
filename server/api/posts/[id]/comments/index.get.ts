import { defineEventHandler } from 'h3'
import db from '~/db'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const postId = getRouterParam(event, 'id')
  if (!postId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Post Id is empty',
    })
  }
  const list = await db.query.comments.findMany({
    columns: {
      id: true,
      nickname: true,
      content: true,
      createdAt: true,
      updatedAt: true,
    },
    where: (comments, { eq }) => (eq(comments.postId, postId))
  })
  return list
})
