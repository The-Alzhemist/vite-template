import React, { useContext } from 'react'
import { ModalContext } from '@components/Modal/context/ModalContext'
import { ModalProps } from './interface'

const withModal = (
  Component: React.FC<ModalProps & { handleToggleModal: () => void }>
) => {
  const HOC = ({ isOpen, ...props }: ModalProps) => {
    const { handleToggleModal } = useContext(ModalContext)
    if (!isOpen) {
      return null
    }
    const newProps = { ...props, handleToggleModal }
    return <Component isOpen={isOpen} {...newProps} />
  }
  return HOC
}
export { withModal }
