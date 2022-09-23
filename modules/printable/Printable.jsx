import React from 'react'

export const Printable = ({
  orderPad,
  queue,
  shortRow,
  mediumRow,
  longRow,
}) => {
  return (
    <>
      <div className='flex'>
        <div className='printable_container'>
          <h4>Senha: {queue}</h4>

          {shortRow && shortRow > 0 ? <p>{shortRow} Volta a Cavalo</p> : <></>}
          {mediumRow && mediumRow > 0 ? (
            <p>{mediumRow} Trilha a Cavalo</p>
          ) : (
            <></>
          )}
          {longRow && longRow > 0 ? <p>{longRow} Trilha Longa</p> : <></>}
        </div>
        <div className='powered'></div>
        <p>Powered by Andoras</p>
      </div>
    </>
  )
}
