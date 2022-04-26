import axios from 'axios'
const wedUrl = axios.create({
  baseURL: 'https://www.fastmock.site/mock/8c4654727793732e7a87f03eded3b6a6/blog',
  timeout: 10000
})
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    wedUrl.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    wedUrl.get(url, { params }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
