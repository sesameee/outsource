import { AxiosObservable } from 'axios-observable/dist/axios-observable.interface'
import { axios } from './axios'
import { AxiosRequestConfig } from 'axios'
const baseConfig = {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
}
class HttpService {
    static readonly BasePath: string = 'https://cors-anywhere.herokuapp.com/http://13.76.80.106:8090/api/online' // todo BaseURL変更
    public static getBaseUrl = (targetApi: string, basePath: string = HttpService.BasePath): string => {
        // return `/${basePath}/${targetApi}`
        return `${basePath}/${targetApi}`
    }
    public static GetAsync<Req, Res>(
        targetApi: string,
        params?: Req,
        basePath?: string,
        config?: AxiosRequestConfig,
    ): AxiosObservable<Res> {
        config = { ...baseConfig, ...config }
        return axios.get(this.getBaseUrl(targetApi, basePath), { params, ...config })
    }
    public static PostAsync<Req, Res>(
        targetApi: string,
        data?: Req,
        basePath?: string,
        config?: AxiosRequestConfig,
    ): AxiosObservable<Res> {
        config = { ...baseConfig, ...config }
        return axios.post(this.getBaseUrl(targetApi, basePath), data, config)
    }
    public static PutAsync<Req, Res>(
        targetApi: string,
        data: Req,
        basePath?: string,
        config?: AxiosRequestConfig,
    ): AxiosObservable<Res> {
        config = { ...baseConfig, ...config }
        return axios.put(this.getBaseUrl(targetApi, basePath), data, config)
    }
    public static DeleteAsync<Req, Res>(targetApi: string, data: Req, basePath?: string): AxiosObservable<Res> {
        return axios.delete(this.getBaseUrl(targetApi, basePath), { data: data })
    }
}
export default HttpService
