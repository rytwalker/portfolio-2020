import styled from "styled-components"

function Footer() {
  return <StyledFooter>© 2020 Ryan Walker</StyledFooter>
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
`
export default Footer
