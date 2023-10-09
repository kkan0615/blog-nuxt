import { defineEventHandler } from 'h3'
import db from '~/db'
import { comments } from '~/db/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const postId = getRouterParam(event, 'id')
  const list = await db.select().from(comments).where(eq(comments.postId, postId as string))
  // const list = await db.query.comments.findMany({
  //   where: eq(comments.postId, postId)
  // })

  return list
})
