import * as prismic from '@prismicio/client'
import { strict } from 'assert'
import { GraphQLClient } from 'graphql-request'

strict(process.env.NEXT_PUBLIC_PRISMIC_CLIENT_NAME, 'PRISMIC_CLIENT_NAME is required')
const clientName = process.env.NEXT_PUBLIC_PRISMIC_CLIENT_NAME

const prismicClient = prismic.createClient(clientName, {
  accessToken: process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN,
})

export const client = new GraphQLClient(prismic.getGraphQLEndpoint(clientName), {
  fetch: prismicClient.graphQLFetch,
  method: 'GET',
})
