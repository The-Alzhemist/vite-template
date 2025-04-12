import { Outlet } from '@tanstack/react-router'
import withAuthenticationLayout from '@components/Layout/AuthenticationLayout/withAuthenticationLayout'
import { AuthenticationLayoutProps } from './interface'

const AuthenticationLayout = ({
  handleOnLogout,
}: AuthenticationLayoutProps) => (
  <div className='bg-gray-2 min-h-[100dvh]'>
    Authentication layout{' '}
    <button type='button' className='bg-red-900' onClick={handleOnLogout}>
      logout
    </button>
    <Outlet />
  </div>
)
const WrappedComponent = withAuthenticationLayout(AuthenticationLayout)
export default WrappedComponent
