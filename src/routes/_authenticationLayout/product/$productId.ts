import { createFileRoute } from '@tanstack/react-router'
import ProductDetailPage from '@features/product/pages/ProductDetailPage/ProductDetailPage'

export const Route = createFileRoute(
  '/_authenticationLayout/product/$productId'
)({
  component: ProductDetailPage,
})
