import axios from 'axios'

export function getPlacesWithFiveStars() {
  return axios.get('http://localhost:3000/api/places/search?rating=5')
}