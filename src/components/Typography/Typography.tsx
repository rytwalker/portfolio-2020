import styled from "styled-components"

export const Heading1 = styled.h1`
  font-size: ${({ theme }) => theme.typeScale.h1};
  font-family: ${({ theme }) => theme.headingFont};
  margin: 0 0 24px;
  padding: 0;
  text-transform: uppercase;
`

export const Heading2 = styled.h2`
  font-size: ${({ theme }) => theme.typeScale.h2};
  font-family: ${({ theme }) => theme.headingFont};
  margin: 0 0 24px;
  padding: 0;
  text-transform: uppercase;
`

export const Heading3 = styled.h3`
  font-size: ${({ theme }) => theme.typeScale.h3};
  font-family: ${({ theme }) => theme.headingFont};
  margin: 0 0 16px;
  padding: 0;
  text-transform: uppercase;
`
export const Heading4 = styled.h4`
  font-size: ${({ theme }) => theme.typeScale.h4};
  font-family: ${({ theme }) => theme.headingFont};
  margin: 0 0 24px;
  padding: 0;
`

export const Heading5 = styled.h5`
  font-size: ${({ theme }) => theme.typeScale.h1};
  font-family: ${({ theme }) => theme.headingFont};
  margin: 0 0 24px;
  padding: 0;
`

export const Heading6 = styled.h6`
  font-size: ${({ theme }) => theme.typeScale.h6};
  font-family: ${({ theme }) => theme.headingFont};
  margin: 0 0 24px;
  padding: 0;
`

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.typeScale.paragraph};
  font-family: ${({ theme }) => theme.primaryFont};
  margin: 0 0 24px;
  padding: 0;
  line-height: 28px;
`
