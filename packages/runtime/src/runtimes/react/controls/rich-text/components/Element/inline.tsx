import { cx } from '@emotion/css'
import { ComponentPropsWithoutRef } from 'react'
import { RenderElementProps } from 'slate-react'
import { Slate } from '@makeswift/controls'

import { useStyle } from '../../../../use-style'
import { Link } from '../../../../../../components/shared/Link'
import { InlineType } from '../../../../../../slate/types'

function StyledLink({ className, ...restOfProps }: ComponentPropsWithoutRef<typeof Link>) {
  return <Link {...restOfProps} className={cx(useStyle({ textDecoration: 'none' }), className)} />
}

export interface InlineRenderElementProps extends RenderElementProps {
  element: Slate.Inline
}

export function InlineElement({ element, attributes, children }: InlineRenderElementProps) {
  switch (element.type) {
    case InlineType.Code:
      return <code {...attributes}>{children}</code>

    case InlineType.SuperScript:
      return <sup {...attributes}>{children}</sup>

    case InlineType.SubScript:
      return <sub {...attributes}>{children}</sub>

    case InlineType.Link:
      return (
        <StyledLink {...attributes} link={element.link ?? undefined}>
          {children}
        </StyledLink>
      )
  }
}
