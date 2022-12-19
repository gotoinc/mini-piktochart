import axios from 'axios'

const apiRoot = axios.create({
  // Move to the .env
  baseURL: 'http://localhost:8000',
})

export { apiRoot }
