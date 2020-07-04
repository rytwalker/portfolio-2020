import styled from "styled-components"

function Hero() {
  return (
    <StyledHero>
      <h1>Ryan Walker</h1>
    </StyledHero>
  )
}

const StyledHero = styled.header`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e9fcfe;
`

export default Hero
