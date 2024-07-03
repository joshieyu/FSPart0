import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const responseLog = axios.get(baseUrl).then(response => response.data)
  // console.log(responseLog)
  return responseLog
}

const create = newObject => {
  const response = axios.post(baseUrl, newObject).then(response => response.data)
  console.log(response)
  return response
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data)
}

export default { getAll, create, update }