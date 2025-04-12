import React from 'react'
import { useAppStore } from '@stores/store'
import { useNavigate } from '@tanstack/react-router'
import { AuthenticationLayoutProps } from './interface'

const withAuthenticationLayout = (
  Component: React.FC<AuthenticationLayoutProps>
) => {
  const Hoc = () => {
    const logout = useAppStore(state => state.logout)
    const navigate = useNavigate()

    const handleOnLogout = () => {
      logout()
      return navigate({ to: '/auth/login' })
    }

    const newProps: AuthenticationLayoutProps = { handleOnLogout }
    return <Component {...newProps} />
  }
  return Hoc
}
export default withAuthenticationLayout
