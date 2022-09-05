import { styled } from '@stitches/react'

import { theme } from '../../styles/theme'

export const Container = styled('div', {
  position: 'relative',
  backgroundColor: 'White',
  margin: '10px',
  padding: '10px',
  minHeight: '200px',
  width: '200px',
  paddingBottom: '10px',
  borderRadius: '15px',
  listStyle: 'none',
  boxShadow: `0px 4px 4px ${theme.shadows.black}`,
  borderTop: `35px solid ${theme.transparent.blue}`,
  borderBottom: `50px solid ${theme.secondary.ciano}`,
})

export const HeaderContent = styled('div', {
  position: 'absolute',
  color: '#fff',
  top: '-45px',
  left: '15px',
  width: '90%',
  display: 'flex',
  justifyContent: 'space-between',
})

export const DoneLink = styled('div', {
  position: 'absolute',
  left: '0px',
  bottom: '-50px',
  height: '50px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
})

export const SubmitButton = styled('button', {
  background: 'none',
  color: 'inherit',
  border: 'none',
  height: '100%',
  width: '100%',
  padding: '0',
  font: 'inherit',
  cursor: 'pointer',
  outline: 'inherit',
})
