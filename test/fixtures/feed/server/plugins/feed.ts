import type { NitroCtx } from '../../../../../src/module'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('feed:generate', async ({ feed }: NitroCtx) => {
    feed.options = {
      id: 'Test Feed',
      title: 'Test Feed',
      copyright: 'Test company',
      updated: new Date("2023-01-01T00:00:00Z")
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
  })
})