import Classes from './Modal.module.css'
import  ReactDOM  from 'react-dom'

const BackDrop = ({onClose}) => {
    return <div onClick={onClose} className={Classes.backdrop}></div>
}

const ModalOverlay = ({children}) => {
    return (
        <div className={Classes.modal}>
            <div className={Classes.content}>
                {children}
            </div>
        </div>
    )
}

// React Portals

const portalElement = document.querySelector('#modal')

const Modal = ({children,onOpenModal}) => {
  return (
    <>
        {ReactDOM.createPortal(<BackDrop onClose={onOpenModal} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>,portalElement)}
    </>
  )
}

export default Modal