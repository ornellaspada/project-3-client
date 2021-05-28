import axios from 'axios'


import { getToken } from './auth'

const baseUrl = '/api'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

export function getAllPlaces() {
  return axios.get(`${baseUrl}/places`)
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

export function editPlace(placeId, formData) {
  return axios.put(`${baseUrl}/places/${placeId}`, formData, headers())
}

export function deletePlace(id) {
  return axios.delete(`${baseUrl}/places/${id}`, headers())
}

export function getCordinates(pc) {
  return axios.get(`http://api.postcodes.io/postcodes/${pc}`)
}

export function createReview(formData, placeId) {
  return axios.post(`${baseUrl}/places/${placeId}/review`, formData, headers())

}
