# nuxt-module-feed

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Feed module enables everyone to have RSS, Atom and JSON.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
  <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-module-feed &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->

- Nuxt 3 ready
- Three different feed types (RSS 2.0, ATOM 1.0 and JSON 1.0)
- Completely customizable
- Multiple feeds
- Works with all modes (SSR, SSG)

## Quick Setup

1. Add `nuxt-module-feed` dependency to your project

```bash
npx nuxi@latest module add module-feed
```

2. Add `nuxt-module-feed` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["nuxt-module-feed"],
});
```

That's it! You can now use nuxt-module-feed in your Nuxt app ✨

## Configuration

You can pass configuration to the module in the `nuxt.config.ts` like following:

```js
export default {
  feed: {
    sources: [
      {
        path: "/feed.xml", // The route to your feed.
        type: "rss2", // Can be: rss2, atom1, json1
        cacheTime: 60 * 15, // How long should the feed be cached
      },
      {
        path: "/feed2.xml", // The route to your feed.
        type: "rss2", // Can be: rss2, atom1, json1
        cacheTime: 60 * 15, // How long should the feed be cached
      }
      ...
    ]
  },
};
```

## Nitro Hooks

### `feed:generate`

**Type:** `async (ctx: { feed: Feed, options: SourceOptions }) => void | Promise<void>`

This hook allows you to modify the feed as runtime before it is sent to the client.

Feed creation is based on the [feed](https://github.com/jpmonette/feed) package. Please use it as reference and further documentation for
modifying the feed object that is passed to the create function.

Note: It works for SSG and prerendered pages.

```ts
import type { NitroCtx, Feed } from "nuxt-module-feed";

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("feed:generate", async ({ feed, options }: NitroCtx) => {
    switch (options.path) {
      case "/feed.xml": {
        createTestFeed(feed);
        break;
      }
      case "/feed2.xml": {
        createTestFeed(feed);
        break;
      }
      ...
    }
  });

  function createTestFeed(feed: Feed) {
    feed.options = {
      id: "Test Feed",
      title: "Test Feed",
      copyright: "Test company",
    };

    type Post = {
      title: string;
      url: string;
      description: string;
      content: string;
      date: Date;
      image: string;
    };

    const posts: Post[] = [
      {
        title: "Post 1",
        url: "https://example.com/post-1",
        description: "This is the first post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: new Date("2022-01-01"),
        image: "https://example.com/images/post1.jpg",
      },
      {
        title: "Post 2",
        url: "https://example.com/post-2",
        description: "This is the second post",
        content:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: new Date("2022-01-05"),
        image: "https://example.com/images/post2.jpg",
      },
      {
        title: "Post 3",
        url: "https://example.com/post-3",
        description: "This is the third post",
        content:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: new Date("2022-01-10"),
        image: "https://example.com/images/post3.jpg",
      },
      {
        title: "Post 4",
        url: "https://example.com/post-4",
        description: "This is the fourth post",
        content:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        date: new Date("2022-01-15"),
        image: "https://example.com/images/post4.jpg",
      },
      {
        title: "Post 5",
        url: "https://example.com/post-5",
        description: "This is the fifth post",
        content:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: new Date("2022-01-20"),
        image: "https://example.com/images/post5.jpg",
      },
    ];

    posts.forEach((post) => {
      feed.addItem({
        title: post.title,
        id: post.url,
        link: post.url,
        description: post.description,
        content: post.content,
        date: post.date,
      });
    });

    feed.addCategory("Nuxt.js");

    feed.addContributor({
      name: "Miha Sedej",
      email: "sedej.miha@gmail.com",
      link: "https://tresko.dev/",
    });
  }
});
```

Here is an [example](./playground/server/plugins/feed.ts).

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm run dev:prepare

# Develop with the playground
pnpm run dev

# Build the playground
pnpm run dev:build

# Run ESLint
pnpm run lint

# Run Vitest
pnpm run test
pnpm run test:watch

# Release new version
pnpm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-module-feed/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://www.npmjs.com/package/nuxt-module-feed
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-module-feed.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://www.npmjs.com/package/nuxt-module-feed
[license-src]: https://img.shields.io/npm/l/nuxt-module-feed.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://www.npmjs.com/package/nuxt-module-feed
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
