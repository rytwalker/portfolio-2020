import styled from "styled-components"
import Nav from "../Nav/Nav"

function PageLayout({ children }) {
  return (
    <Container>
      <Nav />
      {children}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 144px 24px 0;
`

export default PageLayout
