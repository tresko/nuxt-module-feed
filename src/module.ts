import { defineNuxtModule, createResolver, addServerHandler, addTemplate, addPrerenderRoutes } from '@nuxt/kit'
import type { ModuleOptions, SourceOptions } from './types';

export * from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-module-feed',
    configKey: 'feed',
  },
  defaults: {
    sources: [],
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)
    const feedOptions: Record<string, SourceOptions> = {}

    options.sources.forEach((source) => {
      addServerHandler({
        route: source.path,
        handler: resolver.resolve('./runtime/server/feed'),
        method: 'get',
      })

      // Handle SSG
      if (nuxt.options._generate) {
        addPrerenderRoutes([source.path])
      }

      feedOptions[source.path] = source
    })    

    nuxt.options.alias['#feed'] = (addTemplate({
      filename: 'feedOptions.mjs',
      write: true,
      getContents: () => `export default ${JSON.stringify(feedOptions, null, 2)}`
    }).dst || '')
  }
})
