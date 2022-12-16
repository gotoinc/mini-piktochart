import axios from 'axios'

const apiRoot = axios.create({
  baseURL: 'http://localhost:8000',
})

export { apiRoot }
