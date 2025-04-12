import { XIcon } from '@components/icons/XIcon'
import { ModalProps } from './interface'
import { withModal } from './withModal'

const Modal = ({
  children,
  disabeldClose,
  handleToggleModal,
  onClose,
}: ModalProps & { handleToggleModal: () => void }) => (
  <div className='fixed bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center bg-black bg-opacity-50'>
    <div className='shadow-3 relative max-h-[95vh] w-fit max-w-[80vw] overflow-y-auto rounded-[5px] bg-white p-[28px]'>
      {!disabeldClose && (
        <button
          type='button'
          className='text-darkGray absolute right-[15px] top-[15px]'
          onClick={onClose ?? handleToggleModal}
        >
          <XIcon width='20' height='20' />
        </button>
      )}
      {children}
    </div>
  </div>
)
const WrappedComponent = withModal(Modal)
export default WrappedComponent
