import styled from "styled-components"

function CTASection() {
  return (
    <Container>
      <aside>
        <h2>So here's the deal.</h2>
        <p>
          This is a mini section where I talk about myself and tell you to look
          at my projects
        </p>
        <p>And right below here is the button to do that!</p>
        <button>See Projects</button>
      </aside>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 144px 0;
`

export default CTASection
