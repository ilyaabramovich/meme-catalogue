import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
})

export function fetchMemes() {
  return api.get('/memes').then((res) => res.data)
}

export function fetchMemeById(id) {
  return api.get(`/memes/${id}`).then((res) => res.data)
}

export function createMeme(memeData) {
  return api
    .post(`/memes`, memeData)
    .then((res) => res.data)
}

export function uploadFile(fileData) {
  return api
    .post(`/uploads`, fileData)
    .then((res) => res.data)
}