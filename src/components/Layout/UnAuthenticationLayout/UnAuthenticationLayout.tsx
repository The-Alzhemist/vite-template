import { Outlet } from '@tanstack/react-router'

export const UnAuthenticationLayout = () => (
  <div className='relative mx-auto flex min-h-[100dvh] max-w-[1440px] flex-col items-center justify-center gap-[24px] p-[30px] lg:flex-row lg:gap-x-[130px]'>
    Un-Authentication layout
    <Outlet />
  </div>
)

export default UnAuthenticationLayout
