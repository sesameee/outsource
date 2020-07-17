export interface ChannelList {
  cid: string
  channelName: string
  categoryType: string
  imageUrl: string
  categoryList: ChannelCategory[]
}

export interface ChannelCategory {
  cid: string
  cName: string
  categoryType: string
  cData: CData[]
}

export interface CData {
  cid: string
  cName: string
  categoryType: string
}
