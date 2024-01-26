import { describe, test, expect } from 'vitest'
import { TableFormFieldsValue } from '../descriptors'
import { copy } from './table-form-fields'
import { ReplacementContext } from '../../state/react-page'

describe.concurrent('table form fields copy', () => {
  test('replaces the table column id', () => {
    // Arrange
    const data: TableFormFieldsValue = {
      grid: [
        {
          value: {
            count: 12,
            spans: [[12], [12]],
          },
          deviceId: 'desktop',
        },
      ],
      fields: [
        {
          id: '8c4b3dcb-d9d2-4199-9a66-c35aa39248f0',
          label: 'hello',
          required: true,
          tableColumnId:
            'U2luZ2xlTGluZVRleHRUYWJsZUNvbHVtbjphMzQ0Yzk3ZC04MTQ0LTRmMzctYjU2My1hODE5OTQ5OGMyYWI=',
        },
      ],
    }
    const expected = JSON.parse(
      JSON.stringify(data).replace(
        'U2luZ2xlTGluZVRleHRUYWJsZUNvbHVtbjphMzQ0Yzk3ZC04MTQ0LTRmMzctYjU2My1hODE5OTQ5OGMyYWI=',
        'testing',
      ),
    )

    const replacementContext = {
      elementHtmlIds: new Set(),
      elementKeys: new Map(),
      swatchIds: new Map(),
      fileIds: new Map(),
      typographyIds: new Map(),
      tableIds: new Map(),
      tableColumnIds: new Map([
        [
          'U2luZ2xlTGluZVRleHRUYWJsZUNvbHVtbjphMzQ0Yzk3ZC04MTQ0LTRmMzctYjU2My1hODE5OTQ5OGMyYWI=',
          'testing',
        ],
      ]),
      pageIds: new Map(),
      globalElementIds: new Map(),
      globalElementData: new Map(),
    }

    // Act
    const result = copy(data, {
      replacementContext: replacementContext as ReplacementContext,
      copyElement: node => node,
    })

    // Assert
    expect(result).toMatchObject(expected)
  })
})
