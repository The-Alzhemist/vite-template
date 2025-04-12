import { useNavigate } from '@tanstack/react-router'
import { usePagination } from '@hooks/usePagination'

const mockProducts = [
  { id: 1, name: 'Apple', description: 'Apple' },
  { id: 2, name: 'Banana', description: 'Banana' },
  { id: 3, name: 'Grape', description: 'Grape' },
  { id: 4, name: 'Coconut', description: 'Coconut' },
]

const ProductsPage = () => {
  const { page, onPageChange } = usePagination({
    fromPath: '/product',
  })
  const navigate = useNavigate()
  const handleOnClick = (id: number) =>
    navigate({
      to: '/product/$productId',
      params: {
        productId: id.toString(),
      },
    })
  return (
    <div className='flex flex-col'>
      <h2>Just a sample data</h2>
      <div className='flex flex-col gap-y-2'>
        {mockProducts.map(prod => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            className='border-1 cursor-pointer rounded-xl hover:border-blue-300 hover:bg-blue-100'
            key={prod.id}
            onClick={() => handleOnClick(prod.id)}
          >
            <span>{prod.name}</span>
            <span>{prod.description}</span>
          </div>
        ))}
        {page}
        <button
          type='button'
          onClick={() => {
            onPageChange(page + 1)
          }}
        >
          Next Page
        </button>
      </div>
    </div>
  )
}

export default ProductsPage
