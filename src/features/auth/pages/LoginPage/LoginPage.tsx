import withLoginPage from './withLoginPage'
import { LoginPageProps } from './interface'

const LoginPage = ({ handelOnLogin }: LoginPageProps) => (
  <div className='flex flex-col'>
    <div>Login page</div>
    <button type='button' className='bg-blue-800' onClick={handelOnLogin}>
      Click me to login
    </button>
  </div>
)

const WrappedComponent = withLoginPage(LoginPage)
export default WrappedComponent
