import withProductDetailPage from './withProductDetailPage'
import { ProductDetailPageProps } from './interface'

const ProductDetailPage = ({
  productId,
  handleOnBack,
}: ProductDetailPageProps) => (
  <div>
    <div>Product detail page {productId}</div>
    <button
      className='border-1 border-orange-400'
      type='button'
      onClick={handleOnBack}
    >
      TO GO BACK CLICK ME
    </button>
  </div>
)

const WrappedComponent = withProductDetailPage(ProductDetailPage)
export default WrappedComponent
