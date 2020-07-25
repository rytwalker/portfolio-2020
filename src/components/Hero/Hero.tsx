import styled from "styled-components"
import { useRouter } from "next/router"

function Hero() {
  const router = useRouter()

  function handleCTAButtonClick() {
    router.push("/projects")
  }

  return (
    <StyledHero id="hero">
      <HeroTitle>
        <FirstName>Ryan </FirstName>
        <LastName>Walker</LastName>
        <TagLine>is a web developer.</TagLine>
      </HeroTitle>
      <CTAButton onClick={handleCTAButtonClick}>View my work</CTAButton>
    </StyledHero>
  )
}

const StyledHero = styled.header`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #69d7ef;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
`

const HeroTitle = styled.h1`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.headingFont};
  margin: 0 0 40px;
`
const FirstName = styled.span`
  font-size: 4.8rem;
  text-transform: uppercase;
`
const LastName = styled.span`
  font-size: 4.8rem;
  text-transform: uppercase;
`
const TagLine = styled.span`
  font-size: 1.6rem;
  align-self: flex-end;
`

const CTAButton = styled.button`
  font-size: 2.4rem;
  font-weight: 400;
  font-family: ${({ theme }) => theme.primaryFont};
  color: ${({ theme }) => theme.colors.white};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 16px;
  width: 240px;
`

export default Hero
