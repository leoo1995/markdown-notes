import styled from "styled-components"

export const StyledListNotes = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  box-sizing: border-box;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 3px;
  /* align-items: flex-start; */
  li {
    background: lightcoral;
    padding: 3px;
    border-radius: 4px;
  }
`
