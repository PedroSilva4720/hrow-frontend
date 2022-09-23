import { styled } from '@stitches/react'

export const CardContainer = styled('div', {
  display: 'flex',
  '@media:print': {
    display: 'none',
  },
})
