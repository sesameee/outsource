export interface BannerData {
    seq: number
    contentType: string
    sourceUrl: string
    desc: string
    /**
     * @description 連結
     * @examples ["https://avatars0.githubusercontent.com/u/19217384?s=460&u=fe86581d6e255b21a44f66626875c1bf634ee902&v=4", "上海", "北京"]
     */
    linkUrl: string
}
