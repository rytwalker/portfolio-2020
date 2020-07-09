import styled from "styled-components"

function HomePageProjects() {
  return (
    <Container>
      <Project1>A</Project1>
      <Project2>B</Project2>
      <Project3>C</Project3>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const Project = styled.div`
  height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Project1 = styled(Project)`
  background: #9feeff;
`

const Project2 = styled(Project)`
  background: #04c6f0;
`

const Project3 = styled(Project)`
  background: #69d7ef;
`

export default HomePageProjects
