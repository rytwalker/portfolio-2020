import styled from "styled-components"

import SplitPageLayout from "../components/Layout/SplitPageLayout"
import ContactForm from "../components/Form/ContactForm"

function Contact() {
  return (
    <SplitPageLayout>
      <ColumnForm>
        <ContactForm />
      </ColumnForm>
      <ColumnColor>
        <h1>Contact</h1>
        <p>
          I am searching for a role where I can use my development skills to
          make amazing things for the world. Let’s talk!
        </p>
      </ColumnColor>
    </SplitPageLayout>
  )
}

const Column = styled.div`
  padding: 144px;
`

const ColumnColor = styled(Column)`
  background: #eee;
`

const ColumnForm = styled(Column)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export default Contact
