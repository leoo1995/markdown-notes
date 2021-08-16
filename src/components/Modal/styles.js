import styled from "styled-components"

export const StyledModal = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
  place-content: center;
  background: rgba(0, 0, 0, 0.5);
  min-height: 100vh;
  .container {
    padding: 1rem;
    background: white;
    border-radius: 10px;
    ${({ stylesContainer }) => stylesContainer}
  }
`
