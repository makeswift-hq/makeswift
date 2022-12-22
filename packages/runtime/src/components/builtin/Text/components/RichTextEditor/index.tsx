import { ComponentPropsWithoutRef, forwardRef, useMemo } from 'react'

import { Editor as SlateEditor } from 'slate-react'

// @ts-expect-error: no types for '@convertkit/slate-lists'
import Lists from '@convertkit/slate-lists'

import DeviceOverridesMarks from './plugins/DeviceOverridesMarks'
import DeviceOverridesBlocks from './plugins/DeviceOverridesBlocks'
import Link from './plugins/Link'
import Inlines from './plugins/Inlines'
import { useStyle } from '../../../../../runtimes/react/use-style'
import { cx } from '@emotion/css'

export { overrideTypographyStyle } from './components/Mark'

type Props = ComponentPropsWithoutRef<typeof SlateEditor>

export const RichTextEditor = forwardRef<SlateEditor, Props>(function RichTextEditor(
  { placeholder = 'Write some text...', className, ...restOfProps }: Props,
  ref,
) {
  const plugins = useMemo(
    () => [Lists(), Link(), Inlines(), DeviceOverridesBlocks(), DeviceOverridesMarks()],
    [],
  )

  return (
    <SlateEditor
      {...restOfProps}
      // Workaround because our Slate editor is broken on Chrome 105
      // Problem: https://linear.app/makeswift/issue/PRD-434/our-rich-text-component-breaks-in-the-latest-version-of-chrome
      // Workaround: https://github.com/ianstormtaylor/slate/issues/5110#issuecomment-1234951122
      style={{ WebkitUserModify: undefined }}
      className={cx(className, useStyle({ 'ul, ol': { margin: 0 } }))}
      ref={ref}
      autoFocus={false}
      plugins={plugins}
      placeholder={placeholder}
    />
  )
})
