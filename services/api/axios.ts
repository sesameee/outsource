import Axios from 'axios-observable'
import { AxiosRequestConfig } from 'axios'

Axios.interceptors.request.use(
    (request: AxiosRequestConfig) => {
        console.log('request前處理: ', request.url)
        return request
    },
    (error) => {
        console.error(error)
        return Promise.reject(error)
    },
)

Axios.interceptors.response.use((response) => {
    console.log('request後處理: ', response)
    return response
})

export const axios = Axios
