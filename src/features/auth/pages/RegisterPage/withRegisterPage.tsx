import React from 'react'
import { RegisterPageProps } from './interface'

const withRegisterPage = (Component: React.FC<RegisterPageProps>) => {
  const Hoc = () => {
    const newProps: RegisterPageProps = {}
    return <Component {...newProps} />
  }
  return Hoc
}
export default withRegisterPage
