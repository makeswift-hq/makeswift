import { testDefinition } from '../../testing/test-definition'

import { Checkbox, CheckboxDefinition } from './checkbox'

describe('Checkbox', () => {
  describe('constructor', () => {
    test.each([true, false, undefined])(
      'call with default value `%s` returns versioned definition',
      (value) => {
        expect(
          Checkbox({
            label: 'visible',
            defaultValue: value,
          }),
        ).toMatchSnapshot()
      },
    )

    test('disallows extraneous properties', () => {
      Checkbox({
        label: undefined,
        defaultValue: undefined,
        // @ts-expect-error
        extra: 'extra',
      })
    })
  })

  describe('assignability', () => {
    function assignTest(_def: CheckboxDefinition) {}
    assignTest(Checkbox())
    assignTest(Checkbox({ label: 'visible' }))
    assignTest(Checkbox({ defaultValue: true }))
    assignTest(Checkbox({ label: 'visible', defaultValue: true }))
    assignTest(Checkbox({ defaultValue: false as boolean }))
    assignTest(Checkbox({ defaultValue: undefined }))
    assignTest(Checkbox({ label: 'visible', defaultValue: undefined }))
    assignTest(Checkbox({ label: undefined, defaultValue: undefined }))
  })

  const invalidValues = [null, 17, 'text']

  testDefinition(
    Checkbox({ defaultValue: false, label: 'visible' }),
    [true, false],
    invalidValues,
  )

  testDefinition(
    Checkbox({ label: 'disabled' }),
    [true, false, undefined],
    invalidValues,
  )
})