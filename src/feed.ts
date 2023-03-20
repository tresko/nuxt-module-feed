import { useNitroApp } from '#imports'
import { Feed } from 'feed'
import { FeedType, SourceOptions } from './types';

export function resolveContentType(type: FeedType) {
  const lookup = {
    rss2: 'application/rss+xml',
    atom1: 'application/atom+xml',
    json1: 'application/json'
  }

  return lookup[type]
}

export async function createFeed(options: SourceOptions): Promise<string> {
  const feed = new Feed({
    id: '',
    title: '',
    copyright: '',
  })

  await useNitroApp().hooks.callHook('feed:generate', { feed, options })

  return feed[options.type]()
}