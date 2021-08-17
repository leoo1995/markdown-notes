import styled from "styled-components"
import { device } from "../../device"

export const StyledContainer = styled.div`
  min-height: 100%;
  margin: auto;
  place-content: center;
  @media ${device.laptop} {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    width: calc(100vw - 40px);
  }
`
