/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useMemo, useRef, useState } from 'react'
import { Modal } from '@components/Modal'

type PromiseType = <T>(
  Component: JSX.Element,
  option: { isHideCloseButton: boolean }
) => Promise<T>

export const ModalContext = createContext<{
  handleOpenModal: null | PromiseType
  handleToggleModal: (v?: any) => void
}>({
  handleOpenModal: null,
  handleToggleModal: () => {
    //
  },
})
const initialValue = { body: <div />, isOpen: false, isHideCloseButton: false }

export const ModalContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [modal, setModal] = useState(initialValue)
  const resolve = useRef<(value?: any) => void>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleToggleModal = (v?: any) => {
    setModal({ ...initialValue })
    if (v && resolve.current) {
      resolve.current!(v)
    } else if (resolve.current) {
      resolve.current!()
    }
    resolve.current = undefined
  }

  const handleOpenModal: PromiseType = async (
    Component: JSX.Element,
    { isHideCloseButton }
  ) =>
    new Promise(res => {
      resolve.current = res
      setModal({ body: Component, isOpen: true, isHideCloseButton })
    })

  const handleOnClose = () => {
    setModal({ ...initialValue })
    resolve.current!()
    resolve.current = undefined
  }

  const BodyRenderer = modal.body

  const modalProps = useMemo(() => ({ handleOpenModal, handleToggleModal }), [])

  return (
    <ModalContext.Provider value={modalProps}>
      {children}
      <Modal
        isOpen={modal.isOpen}
        onClose={handleOnClose}
        disabeldClose={modal.isHideCloseButton}
      >
        {BodyRenderer}
      </Modal>
    </ModalContext.Provider>
  )
}

export interface ModalHookProps<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: (props?: any) => JSX.Element
  onSuccess?: (v: T) => void
  onClose?: () => void
  isHideCloseButton?: boolean
}

export function useModal<T>({
  component,
  onSuccess,
  onClose,
  isHideCloseButton = false,
}: ModalHookProps<T>) {
  const { handleToggleModal, handleOpenModal } = useContext(ModalContext)

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async openModal(params?: any): Promise<T | undefined> {
      const res = await handleOpenModal!<T | undefined>(component(params), {
        isHideCloseButton,
      })
      if (res !== undefined) {
        if (onSuccess) {
          onSuccess(res)
        }
        return res
      }
      if (onClose) {
        onClose()
      }
      return undefined
    },
    handleToggleModal,
  }
}
