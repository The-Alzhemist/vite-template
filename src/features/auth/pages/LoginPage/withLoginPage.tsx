import React from 'react'
import { useAppStore } from '@stores/store'
import { useNavigate } from '@tanstack/react-router'
import { LoginPageProps } from './interface'

const withLoginPage = (Component: React.FC<LoginPageProps>) => {
  const Hoc = () => {
    const navigate = useNavigate()
    const setToken = useAppStore(state => state.setToken)
    const handelOnLogin = () => {
      setToken('Access token', 'Refresh token')
      return navigate({
        to: '/',
      })
    }
    const newProps: LoginPageProps = {
      handelOnLogin,
    }
    return <Component {...newProps} />
  }
  return Hoc
}
export default withLoginPage
