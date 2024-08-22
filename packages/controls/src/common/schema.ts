import { z } from 'zod'

import { ResourceSchema } from '../resources'

const primitives = z.union([
  z.undefined(),
  z.null(),
  z.boolean(),
  z.number(),
  z.string(),
])

// See https://github.com/colinhacks/zod?tab=readme-ov-file#recursive-types
type Data = z.infer<typeof primitives> | Data[] | { [key: string]: Data }

export const data: z.ZodType<Data> = z.any()

export const colorData = z.object({
  swatchId: z.string(),
  alpha: z.number(),
})

export const resolvedColorData = z.object({
  swatch: ResourceSchema.swatch,
  alpha: z.number(),
})

export const deviceId = z.string()

export const deviceOverride = <T extends z.ZodTypeAny>(value: T) =>
  z.object({
    deviceId,
    value,
  })

export const responsiveValue = <T extends z.ZodTypeAny>(value: T) =>
  z.array(deviceOverride(value))

export const elementData = z.object({
  type: z.string(),
  key: z.string(),
  props: z.record(data),
})

export const elementReference = z.object({
  type: z.literal('reference'),
  key: z.string(),
  value: z.string(),
})

export const element = z.union([elementData, elementReference])
