import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'

export interface RouteContext {
  queryClient?: QueryClient
}

export const Route = createRootRouteWithContext<RouteContext>()({
  component: () => <Outlet />,
})
