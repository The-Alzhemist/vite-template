import withRegisterPage from './withRegisterPage'
import { RegisterPageProps } from './interface'

const RegisterPage = ({}: RegisterPageProps) => <div>Register page</div>

const WrappedComponent = withRegisterPage(RegisterPage)
export default WrappedComponent
