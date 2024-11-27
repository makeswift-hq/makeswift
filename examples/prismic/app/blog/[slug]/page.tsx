import { notFound } from 'next/navigation'

import { MakeswiftComponent } from '@makeswift/runtime/next'
import { getSiteVersion } from '@makeswift/runtime/next/server'

import { BLOG_EMBEDDED_COMPONENT_ID } from '@/components/Embedded/Blog/Blog.makeswift'
import { BlogFeedDocument, BlogFeedQueryVariables, BlogPostDocument } from '@/generated/prismic'
import { client as MakeswiftClient } from '@/lib/makeswift/client'
import { client } from '@/lib/prismic/client'

import { SWRProvider } from './swr-provider'

const DEFAULT_PARAMS = {
  after: '',
  sortBy: 'date_DESC',
  where: {},
} as BlogFeedQueryVariables

export async function generateStaticParams() {
  const { allBlog_posts } = await client.request(BlogFeedDocument, DEFAULT_PARAMS)
  return allBlog_posts.edges?.map(blog => ({ slug: blog?.node?._meta.uid }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Fetch all blogs and validate the slug
  const { allBlog_posts } = await client.request(BlogFeedDocument, DEFAULT_PARAMS)
  const validSlugs = new Set(allBlog_posts.edges?.map(blog => blog?.node?._meta.uid)) // Use a Set for O(1) lookups

  console.log({ validSlugs })
  // Check if the slug exists
  if (!slug || !validSlugs.has(slug)) {
    return notFound()
  }

  const componentSnapshot = await MakeswiftClient.getComponentSnapshot(
    `blog-${slug}`, //id of the component rendered on the page
    { siteVersion: await getSiteVersion() }
  )

  if (componentSnapshot == null) return notFound()

  return (
    <SWRProvider
      fallback={{
        [`blog/${slug}`]: await client.request(BlogPostDocument, {
          slug,
          lang: 'en-us',
        }),
      }}
    >
      <MakeswiftComponent
        snapshot={componentSnapshot}
        label="Blog Page"
        type={BLOG_EMBEDDED_COMPONENT_ID}
      />
    </SWRProvider>
  )
}
