import { createFileRoute } from '@tanstack/react-router'
import LoginPage from '@features/auth/pages/LoginPage/LoginPage'

export const Route = createFileRoute('/_unauthenticationLayout/auth/login')({
  component: LoginPage,
})
