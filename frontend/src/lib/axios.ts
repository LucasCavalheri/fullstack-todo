import axios from 'axios'
import { env } from '../env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

/* DESCOMENTE PARA FAZER TODAS AS REQUISIÇÕES DEMORAREM 2 SEGUNDOS */
// api.interceptors.response.use((response) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(response)
//     }, 2000)
//   })
// })
