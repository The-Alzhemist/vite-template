import { createContext, useContext, useMemo } from 'react'
import Client from '@client/client'

const ClientContext = createContext<{
  client: Client | null
}>({ client: null })

export const ClientContextProvider = ({
  client,
  children,
}: {
  client: Client
  children: React.ReactNode
}) => {
  const value = useMemo(
    () => ({
      client,
    }),
    [client]
  )
  return (
    <ClientContext.Provider value={value}>{children}</ClientContext.Provider>
  )
}

export const useGraphQLClient = () =>
  useContext(ClientContext).client!.graphQLClient!
