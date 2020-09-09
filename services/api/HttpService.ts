import { AxiosObservable } from 'axios-observable/dist/axios-observable.interface'
import { axios } from './axios'
import { AxiosRequestConfig } from 'axios'
import { i18n } from '@/I18n'
const baseConfig = {
    // headers: {
    //     'Content-Type': 'multipart/form-data',
    // },
}
//const isDev = process.env.NODE_ENV.trim() !== 'production'
class HttpService {
    static readonly DEV: string = 'http://localhost:3000/api'
    static readonly BasePath: string = '://online-api.breezeonline.com/api/online'
    private myprotocal = 'http'

    public set protocal(val: string) {
        this.myprotocal = val
    }

    public get protocal() {
        return this.myprotocal
    }

    public getBaseUrl = (targetApi: string, basePath: string = HttpService.BasePath): string => {
        basePath = HttpService.BasePath
        return `${this.protocal}${basePath}/${targetApi}`
    }
    public GetAsync<Req, Res>(
        targetApi: string,
        params?: Req,
        basePath?: string,
        config?: AxiosRequestConfig,
    ): AxiosObservable<Res> {
        config = { ...baseConfig, ...config }
        return axios.get(this.getBaseUrl(targetApi, basePath), { params, ...config })
    }
    public PostAsync<Req, Res>(
        targetApi: string,
        data?: Req,
        basePath?: string,
        config?: AxiosRequestConfig,
    ): AxiosObservable<Res> {
        config = { ...baseConfig, ...config }
        const lang = i18n.language == 'tw' ? 'zh_TW' : 'en'
        return axios.post(this.getBaseUrl(targetApi, basePath), { ...data, lang }, config)
    }
    public PutAsync<Req, Res>(
        targetApi: string,
        data: Req,
        basePath?: string,
        config?: AxiosRequestConfig,
    ): AxiosObservable<Res> {
        config = { ...baseConfig, ...config }
        return axios.put(this.getBaseUrl(targetApi, basePath), data, config)
    }
    public DeleteAsync<Req, Res>(targetApi: string, data: Req, basePath?: string): AxiosObservable<Res> {
        return axios.delete(this.getBaseUrl(targetApi, basePath), { data: data })
    }
}

const httpServiceModel = new HttpService()
export default httpServiceModel
