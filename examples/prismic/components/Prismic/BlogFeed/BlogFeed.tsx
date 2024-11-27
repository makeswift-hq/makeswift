'use client'

import Link from 'next/link'
import { Ref, forwardRef, useEffect, useState } from 'react'

import { ImageFieldImage } from '@prismicio/client/*'
import { PrismicNextImage } from '@prismicio/next'
import clsx from 'clsx'
import useSWR from 'swr'

import {
  BlogFeedDocument,
  BlogFeedQuery,
  BlogPostInfoFragment,
  Blog_Post,
  Category,
  SortBlog_Posty,
  WhereBlog_Post,
} from '@/generated/prismic'
import { client } from '@/lib/prismic/client'
import { useSlug } from '@/lib/utils'

type ParamsType = {
  first: number
  after: string
  sortBy: SortBlog_Posty
  where: WhereBlog_Post
}

type Props = {
  className?: string
  params?: ParamsType
  noCategory?: boolean
}

export const DEFAULT_PARAMS = {
  first: 9,
  after: '',
  sortBy: 'date_DESC',
  where: {},
} as ParamsType

export const BlogFeed = forwardRef(function BlogFeed(
  { className, params = DEFAULT_PARAMS, noCategory = false }: Props,
  ref: Ref<HTMLDivElement>
) {
  const queryCategory = useSlug()

  const [{ first, after, sortBy, where }, setParams] = useState(params)

  const { data, isLoading } = useSWR(
    `blog/feed'/${first}/${after}/${sortBy}/${where} }`,
    () => {
      return client.request(BlogFeedDocument, {
        first,
        after,
        sortBy,
        where,
      }) as Promise<BlogFeedQuery>
    },
    {
      keepPreviousData: true,
    }
  )

  const [items, setItems] = useState(
    data?.allBlog_posts.edges?.map(e => ({ node: e?.node, cursor: e?.cursor })) ?? []
  )

  const total = data?.allBlog_posts.totalCount ?? 0
  const hasNextPage = data?.allBlog_posts.pageInfo.hasNextPage

  // Effect to handle data changes from query changes.
  useEffect(() => {
    setItems(prev => {
      const existingIds = new Set(prev.map(item => item?.node?._meta.id))
      const newItems =
        data?.allBlog_posts.edges?.map(e => ({ node: e?.node, cursor: e?.cursor })) ?? []
      const filteredNewItems = newItems.filter(item => !existingIds.has(item?.node?._meta.id))

      return [...prev, ...filteredNewItems]
    })
  }, [data, queryCategory])

  return (
    <div className={clsx(className, '@container space-y-12')} ref={ref}>
      {items.length === 0 && !isLoading && (
        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-gray-400">
          <p className="text-lg">No results found</p>
        </div>
      )}
      <div className="@6xl:grid-cols-3 @xl:grid-cols-2 @3xl:gap-12 grid grid-cols-1 gap-8">
        {items.map(({ node }) => (
          <BlogCard key={node?._meta.uid} node={node as BlogPostInfoFragment} />
        ))}
      </div>

      <div className="flex w-full justify-center">
        {hasNextPage && (
          <button
            disabled={isLoading}
            onClick={e => {
              e.preventDefault()
              if (items.length < total) {
                setParams(prev => ({ ...prev, after: items[items.length - 1]?.cursor ?? '' }))
              }
            }}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  )
})

export function BlogCard({ node }: { node: BlogPostInfoFragment }) {
  return (
    <div key={node?._meta.uid} className="flex w-full">
      <Link
        className="@3xl:flex-col @3xl:pb-6 group relative flex h-full w-full overflow-hidden rounded-lg shadow-md duration-300 hover:scale-[102%] hover:shadow-xl max-md:items-center"
        href={`/blog/${node?._meta.uid}`}
      >
        <div className="relative flex flex-shrink-0">
          {node?.thumbnail_image && (
            <PrismicNextImage
              field={node?.thumbnail_image as ImageFieldImage}
              width={300}
              className="object-cover"
              alt=""
            />
          )}
        </div>

        <div className="@3xl:pb-6 @3xl:px-8 flex h-full flex-col justify-between p-4">
          <div className="flex flex-col gap-3">
            <div className="my-2 text-xs text-gray-400">
              {node?.date &&
                `${new Date(node?.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}`}
            </div>
            <h3 className="text-xl font-extrabold tracking-tight text-gray-600">
              {node?.title && (node as Blog_Post)?.title[0].text}
            </h3>
            <p className="@3xl:block line-clamp-4 hidden text-sm text-gray-400">
              {node?.summary && ((node as Blog_Post)?.summary)[0].text}
            </p>
          </div>

          <div className="@3xl:flex mt-8 hidden flex-wrap gap-2">
            {node?.categories?.map(({ category }) => {
              const name = (category as Category)?.name[0].text
              return (
                <span
                  key={(category as Category)?._meta.id}
                  className="flex items-center whitespace-nowrap rounded-md bg-gray-100 p-1.5 text-center text-[11px] font-medium uppercase tracking-wide text-gray-400"
                >
                  {name}
                </span>
              )
            })}
          </div>
        </div>
      </Link>
    </div>
  )
}
