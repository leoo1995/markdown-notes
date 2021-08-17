import styled from "styled-components"
import { device } from "../../device"
export const StyledSearch = styled.div`
  width: calc(100vw - 20px);
  margin: 10px auto;

  .search-bar {
    height: 22px;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    border: 1px solid #999;
    box-sizing: border-box;
    width: 100%;
    padding: 2px;
    border-radius: 4px;
    input {
      border: none;
      flex-grow: 1;
      outline: none;
    }
    img {
      height: 100%;
    }
  }
  @media ${device.laptop} {
    max-width: 20%;
    flex-grow: 1;
  }
  button {
    margin: 10px 0;

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
  }
`
