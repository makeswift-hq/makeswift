import { useState, useEffect, useCallback } from 'react'
import { Editor } from 'slate'
import {
  compareRichTextDAO,
  compareRichTextSelection,
  richTextDTOtoDAO,
  richTextDTOtoSelection,
} from '../../../../controls'
import { RichTextValue } from '../../../../prop-controllers'

const COMMIT_DEBOUNCE_DELAY = 500

export function useSyncWithBuilder(editor: Editor, text?: RichTextValue) {
  const [shouldCommit, setShouldCommit] = useState(true)

  useEffect(() => {
    if (false && text) {
      const nextValue = richTextDTOtoDAO(text)
      const nextSelection = richTextDTOtoSelection(text)
      if (
        !compareRichTextDAO(editor.children, nextValue) ||
        !compareRichTextSelection(editor.selection, nextSelection)
      ) {
        editor.children = nextValue
        editor.selection = nextSelection
        editor.onChange()
      }
    }
  }, [editor, shouldCommit, text])

  useEffect(() => {
    if (shouldCommit) return

    const timeoutId = window.setTimeout(() => {
      setShouldCommit(true)
    }, COMMIT_DEBOUNCE_DELAY)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [shouldCommit])

  return useCallback(() => setShouldCommit(false), [])
}
