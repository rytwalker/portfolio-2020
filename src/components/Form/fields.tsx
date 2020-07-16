import styled from "styled-components"
import { useField } from "formik"

interface InputProps {
  label: string
  name: string
  type?: string
  placeholder: string
}

export function TextField({ label, ...props }: InputProps) {
  const [field, meta] = useField(props)

  return (
    <FormGroup>
      <Label htmlFor={props.name}>{label}:</Label>
      <TextInput
        {...field}
        {...props}
        validInput={meta.touched && meta.error}
      />
      {meta.touched && meta.error ? (
        <InputError>{meta.error}</InputError>
      ) : null}
    </FormGroup>
  )
}

export function TextAreaField({ label, ...props }: InputProps) {
  const [field, meta] = useField(props)

  return (
    <FormGroup>
      <Label htmlFor={props.name}>{label}:</Label>
      <TextArea {...field} {...props} />
      {meta.touched && meta.error ? (
        <InputError>{meta.error}</InputError>
      ) : null}
    </FormGroup>
  )
}

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 4px;
`
const TextInput = styled.input`
  background-color: ${(props) =>
    props.validInput ? props.theme.colors.white : props.theme.colors.lightGrey};
  border: 2px solid transparent;
  padding: 8px 12px;
  font-size: inherit;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.white};
  }
`
const TextArea = styled.textarea`
  background-color: ${(props) => props.theme.colors.lightGrey};
  border: 2px solid transparent;
  padding: 8px 12px;
  font-size: inherit;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.white};
  }
`
const InputError = styled.div``
