export type UnknownRecord = Record<string, unknown>

type ObjectSchema = {
  validate: (
    data: UnknownRecord,
    config: UnknownRecord
  ) => Promise<UnknownRecord>
}

type SchemaProperty = {
  path: string
  message: string
}

export default async (schema: ObjectSchema, data: UnknownRecord) => {
  const result: UnknownRecord = {}
  await schema.validate(data, { abortEarly: false }).catch(({ inner }) => {
    inner.forEach(
      ({ path, message }: SchemaProperty) => (result[path] = message)
    )
  })
  return result
}
