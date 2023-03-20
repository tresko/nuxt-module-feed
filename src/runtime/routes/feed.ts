import type { H3Event } from 'h3'
import { defineEventHandler, setHeader } from '#imports'
import feedOptions from '#feed'
import { createFeed, resolveContentType } from '../../feed'
import type { SourceOptions } from '../../types'

export default defineEventHandler(async (event: H3Event) => {
  const options = (feedOptions as Record<string, SourceOptions>)[event.node.req.url as string]
  setHeader(event, 'content-type', resolveContentType(options.type))
  setHeader(event, 'cache-control', `max-age=${options.cacheTime}`)
  const feed = await createFeed(options)
  return feed
})