import { StyledButton } from './styles'

export const Button = props => {
  return <StyledButton type='submit'>{props.children}</StyledButton>
}
