import { defineEventHandler } from 'h3'
import db from '~/db'
import { comments } from '~/db/schema'
import { and, desc, eq, isNull } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  // const query = getQuery(event)
  const postId = getRouterParam(event, 'id')
  if (!postId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Post Id is empty',
    })
  }

  const list = await db.select({
    id: comments.id,
    commentId: comments.commentId,
    nickname: comments.nickname,
    content: comments.content,
    createdAt: comments.createdAt,
    updatedAt: comments.updatedAt,
  })
    .from(comments)
    .where(
      and(
        eq(comments.postId, postId),
        isNull(comments.deletedAt),
      )
    )
    .orderBy(desc(comments.updatedAt))
  console.log(list)
  const genTree = (array: any[], parentId: any) =>
    array.filter(element => element.commentId === parentId)
      .map(element => ({ ...element, children: genTree(array, element.id) }))

  const treeList = genTree(list, null)
  console.log(treeList)
  return treeList
})
