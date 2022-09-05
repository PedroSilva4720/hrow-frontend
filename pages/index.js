import React, { useEffect, useState } from 'react'

import { Card } from '../modules/card/Card'
import { Order } from '../modules/order/Order'

import { CardContainer } from '../styles/styles'

import { getRowsUnused } from '../services'

export default function Home() {
  const [data, setData] = useState({
    orderPad: '',
    queue: 0,
    shortRow: 0,
    mediumRow: 0,
    longRow: 0,
  })
  const [rows, setRows] = useState()

  useEffect(() => {
    getRowsUnused()
      .then(data =>
        data.sort(
          (item1, item2) => parseInt(item1.queue) - parseInt(item2.queue)
        )
      )
      .then(setRows)
    if (Boolean(data.queue)) {
      localStorage.setItem('counter', data.queue)
    }
  }, [data.queue, Order])

  return (
    <>
      <Order data={data} setData={setData} />
      <CardContainer>
        {rows &&
          rows.map(row => {
            return (
              <div key={row.id}>
                <Card key={row.id} {...row} />
              </div>
            )
          })}
      </CardContainer>
    </>
  )
}
