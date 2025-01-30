import { H3Event } from 'h3';
import type { NitroCtx, Feed } from '../../../src/module'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('feed:generate', async ({ feed, options }: NitroCtx, event: H3Event) => {
    switch(options.path) {
      case '/feed.xml': {
        setHeader(event, 'content-type', 'application/xml; charset=UTF-8');
        createTestFeed(feed)
        break
      }
      case '/feed2.xml': {
        createTestFeed(feed)
        break
      }
    }
  })

  function createTestFeed(feed: Feed) {
    feed.options = {
      id: 'Test Feed',
      title: 'Test Feed',
      copyright: 'Test company'
    }

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
        content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: new Date("2022-01-05"),
        image: "https://example.com/images/post2.jpg",
      },
      {
        title: "Post 3",
        url: "https://example.com/post-3",
        description: "This is the third post",
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: new Date("2022-01-10"),
        image: "https://example.com/images/post3.jpg",
      },
      {
        title: "Post 4",
        url: "https://example.com/post-4",
        description: "This is the fourth post",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        date: new Date("2022-01-15"),
        image: "https://example.com/images/post4.jpg",
      },
      {
        title: "Post 5",
        url: "https://example.com/post-5",
        description: "This is the fifth post",
        content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: new Date("2022-01-20"),
        image: "https://example.com/images/post5.jpg",
      },
      {
        title: "帖子 6",
        url: "https://example.com/post-6",
        description: "这是第六篇帖子",
        content: "除非有意外情况发生，否则那些故意造成伤害的人将被追究责任，他们的行为将被视为严重的过失。",
        date: new Date("2025-01-30"),
        image: "https://example.com/images/post5.jpg",
      },
    ];

    posts.forEach(post => {
      feed.addItem({
        title: post.title,
        id: post.url,
        link: post.url,
        description: post.description,
        content: post.content,
        date: post.date
      })
    })

    feed.addCategory('Nuxt.js')

    feed.addContributor({
      name: 'Miha Sedej',
      email: 'sedej.miha@gmail.com',
      link: 'https://tresko.dev/'
    })
  }
})
