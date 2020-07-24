import styled from "styled-components"

import PageLayout from "../components/Layout/PageLayout"
import {
  Heading1,
  Paragraph,
  Heading2,
  Heading3
} from "../components/Typography/Typography"

function About() {
  return (
    <PageLayout>
      <Heading1>About</Heading1>
      <ContentSection>
        <Paragraph>
          My name is Ryan Walker and I am a full-stack developer from
          Youngstown, Ohio. Learning how to code started out as a hobby for me,
          but I grew obsessed with building things that required both creativity
          and logic. Right now I am currently enrolled at Lambda School where I
          spend 40+ hours a week learning the latest web development trends and
          fundamental computer science skills to bring my projects to life.
        </Paragraph>
      </ContentSection>
      <ContentSection>
        <Heading3>Music</Heading3>
        <Paragraph>
          My name is Ryan Walker and I am a full-stack developer from
          Youngstown, Ohio. Learning how to code started out as a hobby for me,
          but I grew obsessed with building things that required both creativity
          and logic. Right now I am currently enrolled at Lambda School where I
          spend 40+ hours a week learning the latest web development trends and
          fundamental computer science skills to bring my projects to life.
        </Paragraph>
        <Paragraph>
          My name is Ryan Walker and I am a full-stack developer from
          Youngstown, Ohio. Learning how to code started out as a hobby for me,
          but I grew obsessed with building things that required both creativity
          and logic. Right now I am currently enrolled at Lambda School where I
          spend 40+ hours a week learning the latest web development trends and
          fundamental computer science skills to bring my projects to life.
        </Paragraph>
      </ContentSection>
      <ContentSection>
        <Heading3>Psychology</Heading3>
        <Paragraph>
          My name is Ryan Walker and I am a full-stack developer from
          Youngstown, Ohio. Learning how to code started out as a hobby for me,
          but I grew obsessed with building things that required both creativity
          and logic. Right now I am currently enrolled at Lambda School where I
          spend 40+ hours a week learning the latest web development trends and
          fundamental computer science skills to bring my projects to life.
        </Paragraph>
      </ContentSection>
    </PageLayout>
  )
}

const ContentSection = styled.section`
  margin-bottom: 48px;
`

export default About
