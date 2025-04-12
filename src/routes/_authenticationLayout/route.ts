import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAppStore } from '@stores/store'
import AuthenticationLayout from '@components/Layout/AuthenticationLayout/AuthenticationLayout'

export const Route = createFileRoute('/_authenticationLayout')({
  component: AuthenticationLayout,
  beforeLoad: async () => {
    const { isAuth } = useAppStore.getState()
    if (!isAuth) {
      throw redirect({
        to: '/auth/login',
      })
    }
  },
})
