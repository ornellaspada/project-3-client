import axios from 'axios'
import { getToken } from './auth'

const baseUrl = 'http://localhost:3000/api/'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

export function getSinglePlace(placeId) {
  return axios.get(`${baseUrl}/places/${placeId}`)
}

export function createPlace(formData) {
  return axios.post(`${baseUrl}/places`, formData, headers())
}

export function deletePlace(id) {
  return axios.delete(`${baseUrl}/places/${id}`, headers())
}
