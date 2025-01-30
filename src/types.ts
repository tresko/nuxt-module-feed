import type { H3Event } from 'h3'

import type { Feed } from 'feed'

export type { Feed } from 'feed'

export type FeedType = 'rss2' | 'atom1' | 'json1'

export interface SourceOptions {
  path: string;
  type: FeedType;
  cacheTime: number;
}

export interface ModuleOptions {
  sources: SourceOptions[];
}

export interface NitroCtx {
  feed: Feed;
  options: SourceOptions;
}

declare module 'nitropack' {
  interface NitroRuntimeHooks {
    'feed:generate': (ctx: NitroCtx, event: H3Event) => void;
  }
}
