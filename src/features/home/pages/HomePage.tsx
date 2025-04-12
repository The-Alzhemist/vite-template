import { useNavigate } from '@tanstack/react-router'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col'>
      <h1>Welcome to codework vite template</h1>
      <button type='button' onClick={() => navigate({ to: '/product' })}>
        Click me to view products
      </button>
    </div>
  )
}

export default HomePage
