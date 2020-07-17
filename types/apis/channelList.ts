interface ChannelList {
    cid: string;
    channelName: string;
    categoryType: string;
    imageUrl: string;
    categoryList: ChannelCategory[];
}

interface ChannelCategory {
    cid: string;
    cName: string;
    categoryType: string;
    cData: CData[];
}

interface CData {
    cid: string;
    cName: string;
    categoryType: string;
}