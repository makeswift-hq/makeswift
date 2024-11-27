import Image from 'next/image'
import Link from 'next/link'

import { PrismicRichText } from '@prismicio/react'
import useSWR from 'swr'

import { BlogPostDocument, BlogPostQuery, Blog_PostBodyRich_Text } from '@/generated/prismic'
import { client } from '@/lib/prismic/client'
import { useSlug } from '@/lib/utils'

type Props = {
  className?: string
}

export function BlogRichText({ className }: Props) {
  const slug = useSlug()
  const { data } = useSWR(
    `blog/${slug}`,
    async () =>
      (await client.request(BlogPostDocument, {
        slug: slug || (process.env.NEXT_PUBLIC_MAKESWIFT_TEMPLATE_BLOG_SLUG as string),
        lang: 'en-us',
      })) as BlogPostQuery,
    {
      keepPreviousData: true,
    }
  )
  return (
    <div className={className}>
      <PrismicRichText
        field={(data?.blog_post?.body?.[0] as Blog_PostBodyRich_Text).primary?.body}
        fallback={<p>No richtext content</p>}
        components={{
          heading1: ({ children }) => (
            <h1 className="mb-3 mt-8 text-3xl font-bold text-[#111827]">{children}</h1>
          ),
          heading2: ({ children }) => (
            <h2 className="mb-3 mt-8 text-2xl font-bold text-[#111827]">{children}</h2>
          ),
          heading3: ({ children }) => (
            <h3 className="mb-3 mt-8 text-xl font-bold text-[#111827]">{children}</h3>
          ),
          heading4: ({ children }) => (
            <h4 className="mb-3 mt-8 text-lg font-bold text-[#111827]">{children}</h4>
          ),
          paragraph: ({ children }) => <p className="prose mt-4 leading-7">{children}</p>,
          oList: ({ children }) => (
            <ol className="prose mt-4 list-decimal pl-6 leading-7">{children}</ol>
          ),
          oListItem: ({ children }) => (
            <li className="mt-2 pl-2 marker:text-gray-500">{children}</li>
          ),
          list: ({ children }) => <ul className="prose ml-2 mt-4 list-disc pl-4">{children}</ul>,
          listItem: ({ children }) => (
            <li className="ml-2 mt-2 marker:text-gray-500">{children}</li>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-[#111827]">{children}</strong>
          ),
          image: ({ children, node }) => (
            <Image
              className="mt-8"
              src={node.url}
              alt={node.alt ?? ''}
              width={node.dimensions.width}
              height={node.dimensions.width}
            />
          ),
          hyperlink: ({ children, node }) => (
            <Link
              href={node.data.url ?? ''}
              className="a-underline text-highlight-blue group no-underline transition duration-300 hover:text-blue-800"
            >
              {children}
            </Link>
          ),
        }}
      />
    </div>
  )
}
