export interface ChannelData {
  cid: string
  channelName: string
  categoryType: string
  imageUrl: string
  categoryList: CategoryData[]
}

export interface CategoryData {
  cid: string
  cName: string
  categoryType: string
  cData?: CategoryData[]
}
