import { describe, it, expect } from 'vitest'
import { fileURLToPath } from 'node:url'
import { setup, $fetch } from '@nuxt/test-utils'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/feed', import.meta.url)),
    server: true
  })

  it('renders the rss feed', async () => {
    const html = await $fetch('/feed.xml')
    expect(await html.text()).toMatchSnapshot()
  })

  it('renders the atom feed', async () => {
    const html = await $fetch('/feed.atom')
    expect(await html.text()).toMatchSnapshot()
  })

  it('renders the json feed', async () => {
    const html = await $fetch('/feed.json')
    expect(html).toMatchSnapshot()
  })
})

