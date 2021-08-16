import styled from "styled-components"

export const StyledHeader = styled.header`
  position: sticky;
  padding: 10px;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  background: lightgreen;
  align-items: center;
  img {
    height: 100%;
  }
  .profile {
    border-radius: 100%;
  }
  h1 {
    flex: auto;
    font-size: 1rem;
    margin: 0;
  }
  nav {
    display: flex;
    gap: 10px;
    li {
      list-style-type: none;
      button {
        border: none;
        background: transparent;
        cursor: pointer;
      }
    }
  }
`
