import React from 'react'
import { useNavigate, useParams } from '@tanstack/react-router'
import { ProductDetailPageProps } from './interface'

const withProductDetailPage = (Component: React.FC<ProductDetailPageProps>) => {
  const Hoc = () => {
    const { productId } = useParams({
      from: '/_authenticationLayout/product/$productId',
    })
    const navigate = useNavigate()
    const handleOnBack = () => navigate({ to: '..' })
    const newProps: ProductDetailPageProps = {
      productId,
      handleOnBack,
    }
    return <Component {...newProps} />
  }
  return Hoc
}
export default withProductDetailPage
