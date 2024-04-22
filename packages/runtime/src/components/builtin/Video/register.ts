import { Props } from '../../../prop-controllers'
import { ReactRuntime } from '../../../runtimes/react'
import { MakeswiftComponentType } from '../constants'
import { ComponentIcon } from '../../../state/modules/components-meta'
import { lazy } from 'react'
import { BorderRadius, Margin, Video } from '@makeswift/prop-controllers'

export function registerComponent(runtime: ReactRuntime) {
  return runtime.registerComponent(
    lazy(() => import('./Video')),
    {
      type: MakeswiftComponentType.Video,
      label: 'Video',
      icon: ComponentIcon.Video,
      props: {
        id: Props.ElementID(),
        video: Video({ preset: { controls: true } }),
        width: Props.Width({
          format: Props.Width.Format.ClassName,
          defaultValue: { value: 560, unit: 'px' },
        }),
        margin: Margin({ format: Margin.Format.ClassName }),
        borderRadius: BorderRadius({ format: BorderRadius.Format.ClassName }),
      },
    },
  )
}
