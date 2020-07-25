import styled from "styled-components"
import { above } from "../../styles/breakpoints"

function Hamburger({ toggle }) {
  return (
    <HamburgerContainer onClick={toggle}>
      <Top />
      <Line />
      <Bottom />
    </HamburgerContainer>
  )
}

const HamburgerContainer = styled.div`
  width: 30px;
  height: 24px;
  cursor: pointer;
  position: relative;
  z-index: 1001;
  ${above.md`
    display: none;
  `}
`

const Line = styled.div`
  width: 30px;
  height: 3px;
  position: absolute;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 2px;
  top: 50%;
`

const Top = styled(Line)`
  transform: translate3d(0, -10px, 0);
`

const Bottom = styled(Line)`
  transform: translate3d(0, 10px, 0);
`

export default Hamburger
