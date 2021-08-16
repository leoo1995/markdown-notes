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
    background: lightcoral;
    padding: 3px;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    color: black;
  }
  .active {
    background: lightcyan;
  }
`
