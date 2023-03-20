import type { Feed } from 'feed'

export type * from 'feed'

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