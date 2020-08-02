import { Response } from './common'

export interface BannerData {
    /**
     * @examples [0,1,2,3]
     */
    seq: number
    /**
     * @examples ["11","12"]
     */
    cid: string
    /**
     * @examples ["image","video"]
     * @description 1 = 使用linkUrl 2 = 內部網連結
     */
    contentType: string
    /**
     * @examples ["https://img.ali-img.net/img.alicdn.com/imgextra/i2/701134268/TB2XU03b4olyKJjSZPfXXawNpXa_!!701134268.jpg_v_600.jpg","https://img.ali-img.net/img.alicdn.com/imgextra/i3/2564575308/O1CN01qp1lSG1p56qPOqdVv_!!2564575308.jpg_v_600.jpg"]
     */
    sourceUrl: string
    desc: string
    /**
     * @description 連結
     * @examples ["https://www.google.com.tw/"]
     */
    linkUrl: string
    /**
     * @examples ["brand",""]
     */
    categoryType: string
}

export interface BannerList extends Response {
    data: BannerData[]
}
