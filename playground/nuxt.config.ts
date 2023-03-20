export default defineNuxtConfig({
  modules: [
    '../src/module'
  ],
  feed: {
    sources: [
      {
        path: '/feed.xml',
        type: 'rss2',
        cacheTime: 60 * 15
      },
      {
        path: '/feed2.xml',
        type: 'rss2',
        cacheTime: 60 * 15
      },
    ]
  }
})
