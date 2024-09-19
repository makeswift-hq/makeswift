import { randomUUID } from 'crypto'
import { type MakeswiftPageSnapshot } from '../../next'
import { type ElementData } from '../../state/react-page'
import { MakeswiftComponentType } from '../../components'

export function createRootComponent(elements: ElementData[], rootId?: string) {
  return {
    key: rootId ?? randomUUID(),
    type: MakeswiftComponentType.Root,
    props: {
      children: {
        columns: [
          {
            deviceId: 'desktop',
            value: {
              count: 12,
              spans: elements?.map(() => [12]),
            },
          },
        ],
        elements,
      },
    },
  }
}

export function createMakeswiftPageSnapshot(
  elementData: ElementData,
  {
    cacheData = {},
    locale = null,
  }: { cacheData?: Partial<MakeswiftPageSnapshot['cacheData']>; locale?: string | null } = {},
): MakeswiftPageSnapshot {
  return {
    document: {
      id: 'test-page-id',
      site: { id: 'test-site-id' },
      data: elementData,
      snippets: [],
      fonts: [],
      meta: {},
      seo: {},
      localizedPages: [],
      locale,
    },
    cacheData: {
      apiResources: {},
      localizedResourcesMap: {},
      ...cacheData,
    },
  }
}
