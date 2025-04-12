import { createFileRoute } from '@tanstack/react-router'
import RegisterPage from '@features/auth/pages/RegisterPage/RegisterPage'

export const Route = createFileRoute('/_unauthenticationLayout/auth/register')({
  component: RegisterPage,
})
