import { createFileRoute } from '@tanstack/react-router'
import ProductsPage from '@features/product/pages/ProductsPage/ProductsPage'

type ProductSearchParam = {
  page?: number
}
export const Route = createFileRoute('/_authenticationLayout/product/')({
  component: ProductsPage,
  // validateSearch: zodValidator(searchSchema),
  validateSearch: (search: Record<string, unknown>): ProductSearchParam => ({
    page: Number(search?.page ?? 1),
  }),
})
