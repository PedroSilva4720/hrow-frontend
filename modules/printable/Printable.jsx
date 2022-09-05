import React from 'react'

export const Printable = ({
  id,
  orderPad,
  queue,
  shortRow,
  mediumRow,
  longRow,
}) => {
  return (
    <>
      <h4>Senha: {queue}</h4>
      <h4>Comanda: {orderPad}</h4>
      {shortRow && <p>{shortRow} Volta a Cavalo</p>}
      {mediumRow && <p>{mediumRow} Trilha a Cavalo</p>}
      {longRow && <p>{longRow} Trilha Longa</p>}
    </>
  )
}
