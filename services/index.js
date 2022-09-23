import axios from 'axios'

export const getRowsUnused = async () => {
  const response = await axios.get(`http://192.168.0.122:9001/get-rows`)

  return response.data
}

export const setDoneRow = async id => {
  await axios.post('http://192.168.0.122:9001/toggle-row', {
    id,
  })
}

export const createRow = async data => {
  await axios.post('http://192.168.0.122:9001/create-row', {
    ...data,
  })
}
