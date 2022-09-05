import React, { useState } from 'react'
import { setDoneRow } from '../../services'

import { Container, HeaderContent, DoneLink, SubmitButton } from './styles'

export const Card = ({ id, orderPad, queue, shortRow, mediumRow, longRow }) => {
  const [display, setDisplay] = useState(true)

  const SetDoneRow = e => {
    // console.log(e)
    setDisplay(false)
    // setDoneRow(id)
    setDoneRow(id)
  }

  return (
    <>
      {display && (
        <Container>
          <HeaderContent>
            <h4>Senha: {queue}</h4>
            <h4>Comanda: {orderPad}</h4>
          </HeaderContent>
          {shortRow && <p>{shortRow} Volta a Cavalo</p>}
          {mediumRow && <p>{mediumRow} Trilha a Cavalo</p>}
          {longRow && <p>{longRow} Trilha Longa</p>}
          <DoneLink onClick={SetDoneRow}>
            <SubmitButton>Feito</SubmitButton>
          </DoneLink>
        </Container>
      )}
    </>
  )
}
