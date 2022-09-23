import { styled } from '@stitches/react'

import { theme } from '../../styles/theme'

export const Form = styled('form', {
  backgroundColor: theme.transparent.blue,
  padding: '10px',
})

export const GenericInput = styled('input', {
  background: theme.transparent.gray,
  height: '25px',
  width: '150px',
  outline: 'none',
  color: '#fff',
  fontSize: '14px',
  marginLeft: '8px',
  appearance: 'textfield',
  '&::placeholder': {
    color: '#fff',
    fontSize: '14px',
  },
  '&:focus': {
    WebkitBoxShadow: '4px 4px 17px -4px #000000',
    boxShadow: '4px 4px 17px -4px #000000',
    outline: theme.background.gray,
    fontSize: '14px',
    color: '#fff',
  },
  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
})
