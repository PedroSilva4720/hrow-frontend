/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import { createRow } from '../../services'

import { Form, GenericInput } from './styles'

export const Order = ({ data, setData }) => {
  useEffect(() => {
    const localCounter = localStorage.getItem('counter')
    setData({
      ...data,
      queue: Boolean(localCounter) ? parseInt(localCounter) : 1,
    })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    var newData = {}
    var zeroLessKeys = Object.keys(data).filter(this_fruit =>
      Boolean(data[this_fruit])
    )
    zeroLessKeys.forEach(key => (newData[key] = data[key]))
    createRow(newData)
    setData({
      orderPad: '',
      queue: data.queue + 1,
      shortRow: 0,
      mediumRow: 0,
      longRow: 0,
    })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <GenericInput
          type='text'
          placeholder={'Comanda'}
          value={data.orderPad != 0 ? data.orderPad : ''}
          onChange={e => setData({ ...data, orderPad: e.target.value })}
        />
        <GenericInput
          type='number'
          placeholder='Volta'
          value={data.shortRow != 0 ? data.shortRow : ''}
          onChange={e =>
            setData({ ...data, shortRow: parseInt(e.target.value) })
          }
        />
        <GenericInput
          type='number'
          placeholder='Trilha'
          value={data.mediumRow != 0 ? data.mediumRow : ''}
          onChange={e =>
            setData({ ...data, mediumRow: parseInt(e.target.value) })
          }
        />
        <GenericInput
          type='number'
          placeholder='Trilha Longa'
          value={data.longRow != 0 ? data.longRow : ''}
          onChange={e =>
            setData({ ...data, longRow: parseInt(e.target.value) })
          }
        />
        <button type='submit'>Gerar senha</button>
      </Form>
    </>
  )
}
