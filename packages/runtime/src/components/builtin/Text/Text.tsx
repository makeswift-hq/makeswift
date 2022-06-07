import {
  useState,
  Ref,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useCallback,
  useRef,
  KeyboardEvent as ReactKeyboardEvent,
} from 'react'
import styled from 'styled-components'
import { Editor, OnChangeParam } from 'slate-react'
import { Value, ValueJSON } from 'slate'
// @ts-expect-error: no types for 'slate-hotkeys'
import Hotkeys from 'slate-hotkeys'
// @ts-expect-error: there are no types for 'corporate-ipsum'
import ipsum from 'corporate-ipsum'
import { cx } from '@emotion/css'
import { isHotkey } from 'is-hotkey'

import {
  ElementIDValue,
  MarginValue,
  RichTextDescriptor,
  RichTextValue,
} from '../../../prop-controllers/descriptors'
import { cssMargin } from '../../utils/cssMediaRules'
import { BoxModelHandle, getBox } from '../../../box-model'
import { PropControllersHandle } from '../../../state/modules/prop-controller-handles'
import { RichTextEditor } from './components/RichTextEditor'
import { ReactRuntime, useIsInBuilder } from '../../../react'
import { DescriptorsPropControllers } from '../../../prop-controllers/instances'
import { Props } from '../../../prop-controllers'

type Props = {
  id?: ElementIDValue
  text?: RichTextValue
  width?: string
  margin?: MarginValue
}

const StyledRichTextEditor = styled(RichTextEditor).withConfig({
  shouldForwardProp: prop => !['margin'].includes(prop.toString()),
})<{ margin: Props['margin'] }>`
  ${cssMargin()}
`

const defaultText: ValueJSON = {
  document: { nodes: [{ object: 'block' as const, type: 'paragraph' as const, nodes: [] }] },
  data: {},
}

const COMMIT_DEBOUNCE_DELAY = 500

type Descriptors = { text?: RichTextDescriptor }

const Text = forwardRef(function Text(
  { id, text, width, margin }: Props,
  ref: Ref<BoxModelHandle & PropControllersHandle<Descriptors>>,
) {
  const [editor, setEditor] = useState<Editor | null>(null)
  const [propControllers, setPropControllers] =
    useState<DescriptorsPropControllers<Descriptors> | null>(null)
  const controller = propControllers?.text

  useImperativeHandle(
    ref,
    () => ({
      getBoxModel() {
        const el = editor?.findDOMNode([])

        return el instanceof Element ? getBox(el) : null
      },
      setPropControllers,
    }),
    [editor, setPropControllers],
  )

  useEffect(() => {
    if (editor) controller?.setSlateEditor(editor)
  }, [controller, editor])

  /**
   * We must keep local state so that we can reflect the user's typed changes immediately. At the
   * same time, though, the source of truth for the data is the prop data. This presents a
   * challenge: how do we keep local state in sync with the prop data without mangling user input as
   * data comes in?
   *
   * Consider, for example, that the user types "Hello". If at a later time, when the user is trying
   * to type ", world" the component re-renders with prop data "H", "He", "Hel", "Hell", "Hello", it
   * will disrupt the user's typing. This could also happen as a result of the prop data changing
   * for other reasons, like collaborators changing the prop data concurrently. We want to avoid to
   * disrupt the user's typing, while at the same time display the "true" value as quickly as
   * possible.
   *
   * The approach we take here is to commit the prop data at an opportune time: as the user is
   * typing we avoid to commit prop data. But once they've stopped typing, we commit it as soon as
   * possible. This is known as a debounce.
   */
  const [value, setValue] = useState(() => {
    const { selection, ...textWithoutSelection } = text ?? defaultText

    return Value.fromJSON(textWithoutSelection)
  })
  const [shouldCommit, setShouldCommit] = useState(true)

  useEffect(() => {
    if (shouldCommit) {
      const nextValue = Value.fromJSON(text ?? defaultText)

      setValue(currentValue =>
        currentValue.selection.isBlurred
          ? Value.fromJSON(nextValue.toJSON({ preserveSelection: false }))
          : nextValue,
      )
    }
  }, [shouldCommit, text])

  useEffect(() => {
    if (shouldCommit) return

    const timeoutId = window.setTimeout(() => {
      setShouldCommit(true)
    }, COMMIT_DEBOUNCE_DELAY)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [shouldCommit])

  function handleChange(change: OnChangeParam) {
    setValue(change.value as Value)

    if (change.value !== value) {
      setShouldCommit(false)

      controller?.onChange(change)
    }
  }

  // HACK: Slate holds on to the very first DOM event handlers passed in and doesn't update them
  // even if they change. Since `controller` is first `undefined` then we must use a ref.
  const lastController = useRef(controller)
  if (lastController.current !== controller) lastController.current = controller
  const handleFocus = useCallback(() => {
    lastController.current?.focus()
  }, [])
  const handleKeyDown = useCallback(
    (event: ReactKeyboardEvent, _editor: Editor, next: () => any) => {
      if (Hotkeys.isUndo(event)) {
        lastController.current?.undo()

        return true
      }

      if (Hotkeys.isRedo(event)) {
        lastController.current?.redo()

        return true
      }

      if (isHotkey('escape')(event)) {
        lastController.current?.blur()

        return true
      }

      return next()
    },
    [],
  )

  const isInBuilder = useIsInBuilder()

  return (
    <StyledRichTextEditor
      // @ts-expect-error: types don't allow for 'id' prop even though it's used.
      id={id}
      ref={setEditor}
      className={cx(width)}
      readOnly={!isInBuilder}
      margin={margin}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      // Workaround for: clicking on any of the text panel will remove the text selection.
      onBlur={e => e.preventDefault()}
    />
  )
})

export default Text

export function registerComponent(runtime: ReactRuntime) {
  return runtime.registerComponent(Text, {
    type: './components/Text/index.js',
    label: 'Text',
    props: {
      id: Props.ElementID(),
      text: Props.RichText(() => ({
        preset: {
          document: {
            nodes: [
              {
                object: 'block',
                type: 'paragraph',
                nodes: [
                  {
                    object: 'text',
                    text: ipsum(3),
                    marks: [
                      {
                        object: 'mark',
                        type: 'typography',
                        data: {
                          value: {
                            id: null,
                            style: [
                              {
                                deviceId: 'mobile',
                                value: { fontSize: { value: 16, unit: 'px' } },
                              },
                              {
                                deviceId: 'desktop',
                                value: {
                                  fontWeight: 400,
                                  fontSize: { value: 18, unit: 'px' },
                                  lineHeight: 1.5,
                                },
                              },
                            ],
                          },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      })),
      width: Props.Width({
        format: Props.Width.Formats.ClassName,
        preset: [{ deviceId: 'desktop', value: { value: 700, unit: 'px' } }],
        defaultValue: { value: 100, unit: '%' },
      }),
      margin: Props.Margin({
        preset: [
          {
            deviceId: 'desktop',
            value: {
              marginTop: null,
              marginRight: 'auto',
              marginBottom: { value: 20, unit: 'px' },
              marginLeft: 'auto',
            },
          },
        ],
      }),
    },
  })
}
