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
        <Button>See Projects</Button>
      </aside>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 144px 24px;
`

const Button = styled.button`
  padding: 16px 12px;
  width: 100%;
  background: #69d7ef;
  border: 1px transparent;
  color: black;
  border-radius: 4px;
  margin: 0;
  font-size: 20px;
`

export default CTASection
