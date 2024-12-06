import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Document } from '@contentful/rich-text-types'
import useSWR from 'swr'

import { GetBlogsDocument } from '@/generated/contentful'
import { client } from '@/lib/contentful/client'
import { useSlug } from '@/lib/utils'

type Props = {
  className?: string
}

export function BlogRichText({ className }: Props) {
  const slug = useSlug()
  console.log('slug', `blog/${slug}`)
  const { data } = useSWR(
    `blog/${slug}`,
    async () => await client.request(GetBlogsDocument, { filter: { slug } }),
    {
      keepPreviousData: true,
    }
  )

  if (!data?.blogCollection?.items[0]?.body) return <div>Data provided is not rich text</div>

  const html = documentToHtmlString(data?.blogCollection?.items[0]?.body.json as Document)

  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
