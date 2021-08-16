import ReactDOM from "react-dom"
import { StyledModal } from "./styles"
const Modal = ({
  isOpen,
  openModal,
  closeModal,
  children,
  stylesContainer,
  ...rest
}) => {
  return ReactDOM.createPortal(
    <StyledModal
      {...rest}
      isOpen={isOpen}
      onClick={closeModal}
      {...{ stylesContainer }}
    >
      <div className="container" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </StyledModal>,
    document.getElementById("portal")
  )
}

export default Modal
