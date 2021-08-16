import styled from "styled-components"

export const StyledSearch = styled.div`
  width: calc(100vw - 20px);
  margin: 10px auto;
  .search-bar {
    height: 22px;
    display: flex;
    border: 1px solid #999;
    box-sizing: border-box;
    width: 100%;
    padding: 2px;
    input {
      border: none;
      flex-grow: 1;
    }
    img {
      height: 100%;
    }
  }
  button {
    margin: 10px 0;
  }
`
