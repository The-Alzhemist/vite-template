import { createFileRoute, redirect } from '@tanstack/react-router'
import UnAuthenticationLayout from '@components/Layout/UnAuthenticationLayout/UnAuthenticationLayout'
import { useAppStore } from '@stores/store'

export const Route = createFileRoute('/_unauthenticationLayout')({
  component: UnAuthenticationLayout,
  beforeLoad: async () => {
    const { isAuth } = useAppStore.getState()
    if (isAuth) {
      throw redirect({
        to: '/',
      })
    }
  },
})
