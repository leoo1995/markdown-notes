import styled, { css } from "styled-components"
import { device } from "../../device"

export const StyledNote = styled.div`
  width: calc(100vw - 20px);
  margin: auto;
  display: grid;
  gap: 10px;
  grid-template-columns: 1;
  /* flex-direction: column; */
  @media ${device.laptop} {
    width: 100%;
    /* width: unset; */
    /* max-width: 80%; */
    flex-grow: 2;
    /* grid-column: 3/4; */
    grid-template-columns: 2;
    grid-template-rows: 2;
  }
  .note-editor {
    > textarea {
      width: 100%;
      min-height: 100px;
      max-height: 300px;
      resize: none;
      box-sizing: border-box;
      border: 1px solid;
      border-radius: 4px;
      @media ${device.laptop} {
        min-height: 300px;
      }
    }
    @media ${device.laptop} {
      /* max-width: 45%; */
      grid-column: 1/2;
      grid-row: 1/-1;
    }
  }
  .innerHTML {
    border: 1px solid #bbb;
    overflow: auto;
    border-radius: 4px;
    max-height: 500px;
    @media ${device.laptop} {
      > p {
        min-height: 100px;
      }
      max-width: 100%;
      grid-column: 2/3;
    }
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    @media ${device.laptop} {
      grid-row: 2/3;
      grid-column: 2/3;
      max-width: unset;
      flex-wrap: nowrap;
      align-items: center;
      /* justify-self: flex-end; */
      order: 2;
    }
    a,
    button {
      border: none;
      border-radius: 10px;
      text-decoration: none;
      color: black;
      background: #bbb;
      padding: 0.6rem 1rem;
      font-size: 1rem;
      cursor: pointer;
      text-align: center;
      max-width: 50%;
      flex: auto;
      box-sizing: border-box;
      @media ${device.laptop} {
        max-width: unset;
        flex-wrap: nowrap;
      }
    }
    .save-button {
      width: 100%;
      max-width: 100%;
      background: lightskyblue;
      @media ${device.laptop} {
        max-width: unset;
        width: unset;
      }
    }
    .delete-button {
      background: red;
      color: white;
      order: 1;
    }
  }
`
export const StyledModalContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
