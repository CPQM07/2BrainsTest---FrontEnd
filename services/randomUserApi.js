import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://randomuser.me/api/',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
