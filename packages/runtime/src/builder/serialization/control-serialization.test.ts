import { serializeControls, deserializeControls } from './control-serialization'
import { Checkbox, Number, Select } from '@makeswift/controls'

describe('deserializeControls', () => {
  test('deserializes record of serialized controls', () => {
    // Arrange
    const controls = {
      checkbox: Checkbox({ label: 'Checkbox', defaultValue: true }),
      number: Number({ label: 'Number', defaultValue: 42 }),
      select: Select({ label: 'Select', options: [{ value: 'red', label: 'Red' }] }),
    } as const

    const [serialized, transferables] = serializeControls(controls)

    // Act
    const deserializedControls = deserializeControls(serialized)

    // Assert
    expect(Object.keys(deserializedControls)).toEqual(Object.keys(controls))
    expect(deserializedControls).toEqual(controls)

    transferables.forEach((port: any) => port.close())
  })

  test('gracefully deserializes record of serialized controls when invalid config is provided', () => {
    // Arrange
    const controls = {
      checkbox: Checkbox({ label: 'Checkbox', defaultValue: true }),
      // @ts-expect-error Semi-valid config for select: at runtime, we allow for values that can be coerced to string
      select: Select({ label: 'Select', options: [{ value: 1, label: 'Red' }] }),
      // @ts-expect-error Invalid config for checkbox, we expect a strict boolean value
      faultyCheckbox: Checkbox({ label: 'Boolean', defaultValue: 1 }),
      // @ts-expect-error Invalid config for number
      faultyNumber: Number({ label: 'Number', defaultValue: 'not a number!' }),
    } as const

    const [serialized, transferables] = serializeControls(controls)

    // Act
    const errors: Error[] = []
    const errorCallback = jest.fn().mockImplementation(e => errors.push(e))
    const deserializedControls = deserializeControls(serialized, {
      onError: errorCallback,
    })

    // Assert
    expect(Object.keys(deserializedControls)).toEqual(['checkbox', 'select'])
    expect(errorCallback).toHaveBeenCalledTimes(2)
    expect(errors).toMatchSnapshot()

    transferables.forEach((port: any) => port.close())
  })
})