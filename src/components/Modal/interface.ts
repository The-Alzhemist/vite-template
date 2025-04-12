import { Dispatch, SetStateAction } from 'react'

export type ModalProps = {
  children: React.ReactNode
  isOpen: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClose: (v?: any) => void
  disabeldClose?: boolean
}
export type SuccessModal = {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}
