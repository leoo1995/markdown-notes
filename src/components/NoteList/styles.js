import styled from "styled-components"

export const StyledListNotes = styled.div`
  width: 100%;

  list-style: none;
  padding: 0;
  box-sizing: border-box;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 3px;

  a {
    background: lightslategray;
    padding: 3px;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    color: white;
  }
  .active {
    background: lightgreen;
    color: lightslategray;
  }
`
