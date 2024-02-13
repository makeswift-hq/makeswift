import { ReactNode, lazy } from 'react'
import { MakeswiftHostApiClient } from '../../../api/react'
import { Element as ReactPageElement } from '../../../state/react-page'
import { ReactRuntime } from '../react-runtime'

type RuntimeProviderProps = {
  client: MakeswiftHostApiClient
  preview: boolean
  rootElements?: Map<string, ReactPageElement>
  children?: ReactNode
  runtime?: ReactRuntime
}

const PreviewProvider = lazy(() => import('./PreviewProvider'))
const LiveProvider = lazy(() => import('./LiveProvider'))

export function RuntimeProvider({ preview, ...props }: RuntimeProviderProps): JSX.Element {
  return preview ? <PreviewProvider {...props} /> : <LiveProvider {...props} />
}
