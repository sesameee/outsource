import { Response } from './common'
export interface ChannelData {
    isMarkColor: boolean
    /**
     * @examples ["11","12"]
     */
    cid: string
    /**
     * @examples ["女士服飾","包款","微風超市","餐飲票券"]
     */
    channelName: string
    /**
     * @examples ["channelCategory"]
     */
    categoryType: string
    /**
     * @examples ["https://img.ali-img.net/img.alicdn.com/imgextra/i2/701134268/TB2XU03b4olyKJjSZPfXXawNpXa_!!701134268.jpg_v_600.jpg","https://img.ali-img.net/img.alicdn.com/imgextra/i3/2564575308/O1CN01qp1lSG1p56qPOqdVv_!!2564575308.jpg_v_600.jpg"]
     */
    imageUrl: string
    categoryList: CategoryData[]
}

export interface CategoryData {
    /**
     * @examples ["11","12"]
     */
    cid: string
    /**
     * @examples ["斜背包","肩背包"]
     */
    cName: string
    /**
     * @examples ["subCategory"]
     */
    categoryType: string
    cData: CategoryData[]
}
export interface channelList extends Response {
    data: ChannelData[]
}
