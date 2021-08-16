import styled, { css } from "styled-components"

export const StyledNote = styled.div`
  width: calc(100vw - 20px);
  margin: auto;
  textarea {
    width: 100%;
    min-height: 200px;
    max-height: 300px;
    resize: none;
    box-sizing: border-box;
  }
  a,
  button {
    border: none;
    text-decoration: none;
    color: black;
    padding: 1rem;
    font-size: 1rem;
  }
`
export const StyledModalContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  a,
  button {
    text-decoration: none;
    border: none;
    padding: 1rem 0.6rem;
    background: red;
    border-radius: 10px;
    color: white;
  }
`
