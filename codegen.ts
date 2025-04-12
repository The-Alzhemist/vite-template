import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.VITE_GQL_API_URL,
  documents: ['src/client/graphql/**/*.tsx', 'src/client/graphql/**/*.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/client/graphql/gql-gen/': {
      preset: 'client',
      config: {
        declarationKind: 'class',
      },
    },
    './src/client/graphql/gql-gen/types-and-hooks.ts': {
      config: {
        fetcher: 'graphql-request',
      },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
        // Ignore RequestInit TS-error
        { add: { content: '// @ts-nocheck' } },
      ],
    },
  },
  config: {
    namingConvention: {
      enumValues: 'change-case-all#constantCase',
    },
    exposeFetcher: true,
    exposeQueryKeys: true,
    reactQueryVersion: 5,
  },
}

export default config
