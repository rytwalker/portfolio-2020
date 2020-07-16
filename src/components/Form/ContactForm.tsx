import styled from "styled-components"
import { Formik, Form } from "formik"
import { TextField, TextAreaField } from "./fields"

function ContactForm() {
  return (
    <FormContainer>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: ""
        }}
        onSubmit={() => {}}
      >
        <Form>
          <TextField
            label="Name"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
          <TextField
            label="Email"
            name="email"
            type="text"
            placeholder="Enter your email"
          />
          <TextAreaField
            label="Message"
            name="message"
            placeholder="Enter your message"
          />
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`

export default ContactForm
