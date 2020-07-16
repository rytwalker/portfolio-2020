import styled from "styled-components"
import Nav from "../Nav/Nav"

function SplitPageLayout({ children }) {
  return (
    <Container>
      <Nav />
      <SplitContainer>{children}</SplitContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  /* padding: 144px 0 0; */
`

const SplitContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 66px;
  min-height: calc(100vh);
`

export default SplitPageLayout
