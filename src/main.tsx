import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createRouter, RouterProvider } from '@tanstack/react-router'

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ClientContextProvider } from '@client/ClientContext'
import { client } from '@client/init'
import { ToastContainer } from 'react-toastify'
import { ModalContextProvider } from '@components/Modal/context/ModalContext'
import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree,
  context: {
    queryClient: undefined,
  },
})
// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
const queryClient = new QueryClient({
  queryCache: new QueryCache({}),
  defaultOptions: {
    queries: { retry: 1, refetchOnWindowFocus: false },
    mutations: { retry: 1 },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClientContextProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <ModalContextProvider>
          <RouterProvider router={router} context={{ queryClient }} />
          <ToastContainer position='top-center' />
        </ModalContextProvider>
      </QueryClientProvider>
    </ClientContextProvider>
  </StrictMode>
)
