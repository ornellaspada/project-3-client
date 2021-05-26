import axios from 'axios'


import { getToken } from './auth'

const baseUrl = 'http://localhost:3001/api/'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

export function getPlacesWithFiveStars() {
  return axios.get(`${baseUrl}/places/search?rating=5`)
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
