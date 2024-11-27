import type { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnvConfig } from '@next/env'
import * as prismic from '@prismicio/client'
import { strict } from 'assert'

loadEnvConfig(process.cwd())

const { pascalCase } = require('change-case-all')

function pascalCaseWithUnderscores(str: string) {
  const result = pascalCase(str)

  if (!result) {
    return str
  }

  // if there is a leading underscore but it's not in the converted string, add it
  if (str.indexOf('_') === 0 && result.substring(0, 1) !== '_') {
    return `_${result}`
  }
  return result
}

async function getConfig() {
  strict(
    process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN,
    'NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN is required'
  )
  strict(
    process.env.NEXT_PUBLIC_PRISMIC_GRAPHQL_ENDPOINT,
    'NEXT_PUBLIC_PRISMIC_GRAPHQL_ENDPOINT is required'
  )
  strict(process.env.NEXT_PUBLIC_REPOSITORY_ENDPOINT, 'NEXT_PUBLIC_REPOSITORY_ENDPOINT is required')

  const restEndpoint = prismic.getRepositoryEndpoint(process.env.NEXT_PUBLIC_REPOSITORY_ENDPOINT)
  const macStadiumGraphqlEndpoint = process.env.NEXT_PUBLIC_PRISMIC_GRAPHQL_ENDPOINT
  const client = prismic.createClient(restEndpoint, { fetch })
  const ref = (await client.getMasterRef()).ref

  const config: CodegenConfig = {
    generates: {
      'generated/prismic.ts': {
        documents: './components/Prismic/**/*.graphql',
        schema: {
          [macStadiumGraphqlEndpoint]: {
            headers: {
              'Prismic-Ref': ref,
              Authorization: `Token ${process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN}`,
            },
            method: 'GET',
          },
        },
        plugins: [
          'typescript',
          'typed-document-node',
          {
            'typescript-operations': {
              strictScalars: true,
              scalars: {
                Json: 'JSON',
                BooleanType: 'boolean',
                CustomData: 'Record<string, unknown>',
                Date: 'string',
                DateTime: 'string',
                Long: 'number',
                FloatType: 'number',
                IntType: 'number',
                ItemId: 'string',
                JsonField: 'unknown',
                MetaTagAttributes: 'Record<string, string>',
                UploadId: 'string',
              },
            },
          },
        ],
        config: {
          namingConvention: {
            enumValues: pascalCaseWithUnderscores,
          },
          nonOptionalTypename: true,
        },
      },
    },
  }

  return config
}

export default getConfig()
