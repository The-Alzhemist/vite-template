import { ClientError, GraphQLClient } from 'graphql-request'
import { GQL_API_URL } from '@config/environment'
import { Mutex } from 'async-mutex'
import { useAppStore } from '@stores/store'

export default class Client {
  graphQLClient: GraphQLClient

  pureGraphQLClient: GraphQLClient

  mutex: Mutex

  constructor() {
    this.mutex = new Mutex()
    this.graphQLClient = new GraphQLClient(GQL_API_URL)
    this.pureGraphQLClient = new GraphQLClient(GQL_API_URL)
    this.setupGraphqlMiddleware()
  }

  private getToken() {
    const session = localStorage.getItem('persist:authentication')
    if (session) {
      const sessionObj = JSON.parse(session)
      // DESC: remove double quotes
      const token: string = sessionObj.state?.accessToken?.replaceAll('"', '')
      return token
    }
    return undefined
  }

  // private getRefreshToken = () => {
  //   const session = localStorage.getItem('persist:authentication')
  //   if (session) {
  //     const sessionObj = JSON.parse(session)
  //     // DESC: remove double quotes
  //     const refreshToken: string = sessionObj.state.refreshToken?.replaceAll(
  //       '"',
  //       ''
  //     )
  //
  //     return refreshToken
  //   }
  //   return undefined
  // }

  private setupGraphqlMiddleware = () => {
    this.graphQLClient.requestConfig.requestMiddleware = async request => {
      if (request.operationName === 'CreateFileUploads') {
        // const files = (request.variables as CreateFileUploadsMutationVariables)
        //   .files as Array<File>
        //
        // const formData = new FormData()
        // formData.append(
        //   'operations',
        //   JSON.stringify({
        //     query:
        //       'mutation CreateFileUploads($files: [Upload!]!, $createFileUploadsInput: [CreateFileUploadsInput!]!) {  createFileUploads(files: $files, createFileUploadsInput: $createFileUploadsInput)}',
        //     operationName: 'CreateFileUploads',
        //     variables: {
        //       ...request.variables,
        //       files: files.map(() => null),
        //     },
        //   })
        // )
        // let count = -1
        // formData.append(
        //   'map',
        //   JSON.stringify(
        //     files.reduce(file => {
        //       count += 1
        //       return { ...file, [`${count}`]: [`variables.files.${count}`] }
        //     }, {})
        //   )
        // )
        //
        // files.forEach((file, index) => {
        //   formData.append(`${index}`, file)
        // })
        //
        // request.body = formData
      } else {
        request.headers = { 'Content-Type': 'application/json' }
      }

      const token = this.getToken()
      if (token) {
        return {
          ...request,
          headers: {
            authorization: `Bearer ${token}`,
            ...request.headers,
          },
        }
      }

      return request
    }

    this.graphQLClient.requestConfig.responseMiddleware = async response => {
      if (response instanceof ClientError) {
        const status = response.response.errors?.[0]?.extensions?.code
        // เช็ค unauthorized
        if (status === 401) {
          if (!this.mutex.isLocked()) {
            const release = await this.mutex.acquire()
            // const { setToken } = useAppStore.getState()
            try {
              // const refreshTokenFetcher = useRefreshTokenMutation.fetcher(
              //   this.pureGraphQLClient,
              //   {
              //     refreshTokenInput: {
              //       refreshToken: this.getRefreshToken() ?? '',
              //     },
              //   }
              // )
              // const {
              //   refreshToken: { refreshToken, accessToken },
              // } = await refreshTokenFetcher()
              // setToken(accessToken, refreshToken)
              // Retry process will handle by react-query
            } catch {
              const { tokenExpired } = useAppStore.getState()
              tokenExpired(window.location.pathname)
            } finally {
              release()
            }
          } else {
            // wait until the mutex is available without locking it
            await this.mutex.waitForUnlock()
            // Retry process will handle by react-query
          }
        }
      }
    }
  }
}
