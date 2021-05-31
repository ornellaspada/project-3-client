export function setToken(token) {
  window.localStorage.setItem('token', token)
}

export function getToken() {
  return window.localStorage.getItem('token')
}

export function remove() {
  window.localStorage.removeItem('token')
}

function getPayLoad() {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 3) return false
  return JSON.parse(atob(parts[1]))
}

export function isAuthorized() {
  const payload = getPayLoad()
  console.log(payload)
  if (!payload) return false
  const now = Math.round(Date.now() / 1000)
  return now < payload.exp
}

export function isOwner(userId) {
  const payload = getPayLoad()
  
  if (!payload) return false
  return userId === payload.sub
}
