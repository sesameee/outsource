export interface PromoCodeRequest {
    promoCode: string;
    memberId: string;
    pid: string[];
    accessToken: string;
}

// TODO: 返回格式需要查證
export interface PromoCodeResponse {
    discount: string;
    data: string[];
}