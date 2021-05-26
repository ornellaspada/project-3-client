import axios from 'axios'
import { getToken } from './auth'

const baseUrl = 'http://localhost:4000'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

export function getSinglePlace(placeId) {
  return axios.get(`${baseUrl}/places/${placeId}`)
}

export function deletePlace(id) {
  return axios.delete(`${baseUrl}/places/${id}`, headers())
}